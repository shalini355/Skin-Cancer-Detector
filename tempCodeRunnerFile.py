from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

# Load the model
try:
    model = tf.keras.models.load_model("model/data/skin_cancer_model.h5")
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {str(e)}")
    model = None

@app.route("/predict", methods=["POST"])
def predict():
    print("Received request at /predict")
    if model is None:
        print("Model not loaded")
        return jsonify({"error": "Model not loaded. Please check the model path."}), 500

    if "file" not in request.files:
        print("No file uploaded")
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == "":
        print("No file selected")
        return jsonify({"error": "No file selected"}), 400

    print(f"Received file: {file.filename}")
    try:
        # Read and process the image
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        image = image.resize((224, 224))  # Adjust size if your model expects a different input
        image_array = np.array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)

        print("Making prediction...")
        prediction = model.predict(image_array)
        class_names = ["Benign", "Melanoma"]  # Replace with your actual class names
        predicted_class = class_names[np.argmax(prediction[0])]
        confidence = float(prediction[0][np.argmax(prediction[0])])

        print(f"Prediction: Class={predicted_class}, Confidence={confidence}")
        return jsonify({"class": predicted_class, "confidence": confidence})
    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return jsonify({"error": f"Failed to process image: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)