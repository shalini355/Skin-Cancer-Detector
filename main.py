import os
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from PIL import Image
import tensorflow as tf
import matplotlib.pyplot as plt

# Load metadata CSV file
metadata = pd.read_csv("data/HAM10000_metadata.csv")

# Image folder paths
image_dir_1 = "data/HAM10000_images_part_1"
image_dir_2 = "data/HAM10000_images_part_2"

# Function to get full image path
def get_image_path(image_id):
    path1 = os.path.join(image_dir_1, image_id + ".jpg")
    path2 = os.path.join(image_dir_2, image_id + ".jpg")
    if os.path.exists(path1):
        return path1
    elif os.path.exists(path2):
        return path2
    else:
        return None

metadata["path"] = metadata["image_id"].map(get_image_path)

# Remove rows where image path was not found
metadata = metadata.dropna(subset=["path"])

# Load and preprocess images
images = []
labels = []

for _, row in metadata.iterrows():
    try:
        img = Image.open(row["path"]).convert("RGB").resize((64, 64))
        img_array = np.array(img)
        if img_array.shape == (64, 64, 3):
            images.append(img_array)
            labels.append(row["dx"])
    except Exception as e:
        print(f"Error loading image {row['path']}: {e}")

X = np.array(images) / 255.0
y = np.array(labels)

# Encode labels
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

print("Label Mapping:", dict(zip(encoder.classes_, range(len(encoder.classes_)))))

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42, shuffle=True
)

# Build CNN model
model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),
    tf.keras.layers.MaxPooling2D(2,2),

    tf.keras.layers.Conv2D(64, (3,3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2,2),

    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(len(np.unique(y_encoded)), activation='softmax')
])

# Compile
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train model
history = model.fit(X_train, y_train, epochs=5,
                    validation_data=(X_test, y_test))

# Plot accuracy
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

# Save model
model.save("skin_cancer_model.h5")
print("Model saved as skin_cancer_model.h5")

# Optional: Save label encoder classes for later use
import pickle
with open('label_encoder.pkl', 'wb') as f:
    pickle.dump(encoder.classes_, f)
print("Label encoder classes saved as label_encoder.pkl")
