# Skin Cancer Detection System

> CNN-based image classification for early skin lesion detection — trained on 10,000+ real medical images.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=flat&logo=keras&logoColor=white)

## Overview

This project applies deep learning to detect and classify skin lesions from dermatoscopic images. It was trained on the **HAM10000 dataset** — a benchmark dataset of 10,015 real-world skin lesion images across 7 diagnostic categories.

Early detection of skin cancer significantly improves survival rates. This model aims to assist in faster, more accessible preliminary screening.

## Model Performance

| Metric | Result |
|--------|--------|
| Validation Accuracy | 85%+ |
| Dataset Size | 10,015 images |
| Classes | 7 lesion types |
| Framework | TensorFlow / Keras |

## 7 Lesion Categories

1. Melanocytic nevi (nv)
2. Melanoma (mel)
3. Benign keratosis (bkl)
4. Basal cell carcinoma (bcc)
5. Actinic keratosis (akiec)
6. Vascular lesions (vasc)
7. Dermatofibroma (df)

## Tech Stack

- **Model:** Convolutional Neural Network (CNN) via TensorFlow/Keras
- **Preprocessing:** Image augmentation, normalization, resizing
- **Deployment:** Flask REST API
- **Dataset:** HAM10000 (Harvard Dataverse)

## Getting Started

### Prerequisites
- Python 3.8+
- pip

### Installation

```bash
git clone https://github.com/shalini355/Skin-Cancer-Detector.git
cd Skin-Cancer-Detector
pip install -r requirements.txt
```

### Run the Flask API

```bash
python app.py
```

API runs at `http://localhost:5000`

### Predict via API

Send a POST request with an image file:
```bash
curl -X POST -F "file=@skin_image.jpg" http://localhost:5000/predict
```

Response:
```json
{
  "prediction": "Melanocytic nevi",
  "confidence": 0.91
}
```

## Dataset

The **HAM10000** dataset is publicly available on Harvard Dataverse.
> Tschandl, P., Rosendahl, C. & Kittler, H. The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. Sci. Data 5, 180161 (2018).

## Project Structure

Skin-Cancer-Detector/
├── model/
│   ├── train.py          # Model training script
│   └── model.h5          # Saved trained model
├── app.py                # Flask API
├── requirements.txt
└── README.md
## Disclaimer

This tool is for educational and research purposes only. It is not a substitute for professional medical diagnosis.

## Connect

**Shalini Yadav** — [LinkedIn](https://linkedin.com/in/shaliniyadav-355abc) · [GitHub](https://github.com/shalini355)
