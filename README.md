# 🧬 Skin Cancer Detection Using CNN

This project uses a Convolutional Neural Network (CNN) to detect skin cancer types from dermatoscopic images. It is trained on the HAM10000 dataset and predicts 7 types of skin lesions.

---

## 📁 Dataset

- **Name**: HAM10000 ("Human Against Machine with 10000 training images")
- **Source**: [Kaggle HAM10000 Dataset](https://www.kaggle.com/kmader/skin-cancer-mnist-ham10000)
- **Contents**:
  - `HAM10000_metadata.csv`: Contains metadata for each image.
  - `HAM10000_images_part_1/` and `HAM10000_images_part_2/`: Contains image files.

Ensure the dataset folder structure is like this:
project_folder/
├── data/
│ ├── HAM10000_metadata.csv
│ ├── HAM10000_images_part_1/
│ └── HAM10000_images_part_2/


---

## 🔧 Requirements
Install the required libraries using pip:

```bash
pip install tensorflow pandas numpy matplotlib scikit-learn seaborn

#train the model
python main.py
#make prediction
python predict.py
```

🧠 Model Architecture
Image Size: 64x64 (resized for training)

Layers:
Multiple Conv2D and MaxPooling layers
Flatten + Dense layers
Dropout to prevent overfitting
Output Classes: 7 types of skin lesions
akiec, bcc, bkl, df, mel, nv, vasc

📊 Output
Accuracy and loss graph after training
Saved model as model.h5
Sample prediction printed in the terminal

📦 SKINCANCERAPP
├── 📁 backend
│   ├── 📁 model
│   │   └── 📁 data
│   │       └── 🧠 skin_cancer_model.h5
│   ├── 🐍 app.py
│   ├── 🐍 main.py
│   ├── 🐍 predict.py
│   ├── 📄 requirements.txt
│   └── 🐍 tempCodeRunnerFile.py
│
├── 📁 frontend
│   ├── 📁 node_modules
│   ├── 📁 public
│   │   ├── 🌐 favicon.ico
│   │   ├── 🧾 index.html
│   │   ├── 🖼️ logo192.png
│   │   ├── 🖼️ logo512.png
│   │   ├── 📄 manifest.json
│   │   └── 📄 robots.txt
│   │
│   ├── 📁 src
│   │   ├── 📁 components\store
│   │   │   ├── 📸 CameraCapture.js
│   │   │   ├── ℹ️  FAQSection.js
│   │   │   ├── 🎨 HomePage.css
│   │   │   ├── 🏠 HomePage.js
│   │   │   ├── 🧭 Navbar.js
│   │   │   ├── 📥 PDFDownload.js
│   │   │   ├── 🔒 Privacy.js
│   │   │   ├── 📊 Report.js
│   │   │   ├── 🖼️ ShowImage.js
│   │   │   └── 🧠 useImageStore.js
│   │   │
│   │   └── 📁 pages
│   │       ├── ⚙️ App.js
│   │       ├── 🏠 HomePage.js
│   │       └── 🎨 index.css
│
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md


Author
Name: Shalini Yadav
Course: B.Tech CSE
