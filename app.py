from flask import Flask, request, jsonify
from keras.models import load_model
from PIL import Image
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to call Flask backend

# Load model once at startup
model = load_model('model/skin_cancer_model.h5')

class_names = ['Melanoma', 'Nevus', 'Basal Cell Carcinoma', 'Actinic Keratosis', 'Benign Keratosis', 'Dermatofibroma', 'Vascular Lesion']

descriptions = {
    'Melanoma': 'A type of skin cancer that develops from pigment-producing cells.',
    'Nevus': 'Commonly known as a mole; usually benign.',
    'Basal Cell Carcinoma': 'A type of skin cancer arising from basal cells.',
    'Actinic Keratosis': 'A rough, scaly patch on the skin caused by years of sun exposure.',
    'Benign Keratosis': 'Non-cancerous skin growths.',
    'Dermatofibroma': 'Benign skin nodules.',
    'Vascular Lesion': 'Abnormal blood vessel formations on the skin.'
}
def preprocess_image(image):
    image = image.resize((64, 64))           # Model expects 64x64
    image = np.array(image) / 255.0
    image = image.reshape(1, 64, 64, 3)      # No flattening!
    return image

allowed_extensions = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions

@app.route('/predict', methods=['POST'])
def predict():
    # ...existing code...
    try:
        file = request.files['file']
        if file and allowed_file(file.filename):
            image = Image.open(file.stream).convert('RGB')
            img = preprocess_image(image)
            preds = model.predict(img)
            pred_class_idx = int(np.argmax(preds))
            pred_class = class_names[pred_class_idx]
            confidence = float(np.max(preds))
            description = descriptions.get(pred_class, "No description available.")

            return jsonify({
                "class": pred_class,           # <-- yeh key zaroor bhejein
                "confidence": confidence,
                "description": description
            })
        else:
            return jsonify({"error": "Invalid file type."}), 400
    except Exception as e:
        return jsonify({"error": f"Prediction error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)
