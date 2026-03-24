🩺 Skin Cancer Detection System

A Machine Learning–based web application designed to detect potential skin cancer from dermatoscopic images using the HAM10000 dataset.
The project demonstrates how Artificial Intelligence can assist early skin lesion analysis and support healthcare diagnostics.

📌 Project Overview

Skin cancer is one of the most common forms of cancer worldwide. Early detection significantly increases treatment success rates.
This project applies machine learning and image classification techniques to analyze skin lesion images and predict possible cancer types.

The system integrates a trained ML model with a web application backend to provide predictions based on uploaded images.

🎯 Objectives
Build an AI model for skin lesion classification
Apply image preprocessing and feature extraction
Integrate ML model with a backend API
Demonstrate real-world healthcare AI application
📂 Dataset

This project uses the HAM10000 ("Human Against Machine with 10000 training images") dataset from Kaggle.

Dataset Source:
HAM10000 – Human Against Machine Dataset (Kaggle)

Dataset Details
10,000+ dermatoscopic skin lesion images
Multiple diagnostic categories including:
Melanoma
Melanocytic nevi
Basal cell carcinoma
Benign keratosis
Dermatofibroma
Vascular lesions
Actinic keratoses

The dataset provides labeled medical images used for supervised learning.

⚙️ Tech Stack
Programming & ML
Python
TensorFlow / Keras
NumPy
Pandas
OpenCV
Backend
Flask
REST API
Tools
Jupyter Notebook
Git & GitHub

🧠 Model Workflow
Data Collection
Imported HAM10000 dataset from Kaggle.
Data Preprocessing
Image resizing and normalization
Label encoding
Train-test split
Model Training
CNN-based image classification model
Feature extraction using deep learning layers
Evaluation
Accuracy and loss monitoring
Validation dataset testing
Deployment
Integrated trained model with Flask backend API.

🚀 Features
Upload skin lesion images
AI-based prediction system
Image preprocessing pipeline
REST API integration
Real-time classification results
🛠️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/skin-cancer-detector.git
cd skin-cancer-detector
2️⃣ Install Dependencies
pip install -r requirements.txt
3️⃣ Run Backend Server
python app.py

Server runs at:

http://localhost:5000
📊 Project Structure
skin-cancer-detector/
│
├── dataset/
├── model/
├── app.py
├── requirements.txt
├── static/
├── templates/
└── README.md

⚠️ Disclaimer

This project is created for educational and research purposes only.
It is not a medical diagnostic tool and should not replace professional medical advice.

🤝 Contributing

Contributions are welcome!

Fork the repository
Create a feature branch
Commit your changes
Submit a pull request
📄 License

This project is licensed under the MIT License — free to use and modify.

👩‍💻 Author

Shalini Yadav
B.Tech CSE Student | AI & Full-Stack Developer

GitHub: https://github.com/shalini355
