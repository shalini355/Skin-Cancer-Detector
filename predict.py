from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend access

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files.get('file')
    if not file:
        return jsonify({'error': 'No file uploaded'}), 400

    # Dummy prediction logic
    classes = ['Melanoma', 'Nevus', 'Seborrheic Keratosis']
    predicted_class = random.choice(classes)
    confidence = round(random.uniform(0.7, 0.99), 2)
    description = f"This is a dummy description for {predicted_class}."

    return jsonify({
        'predicted_class': predicted_class,
        'confidence': confidence,
        'description': description
    })

if __name__ == '__main__':
    # Run on port 5001 as you specified
    app.run(port=5001, debug=True)