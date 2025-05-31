import React, { useState } from "react";
import "./CameraCapture.css";
import ShowImage from "./ShowImage";
import jsPDF from "jspdf"; // <-- Add this import

const CameraCapture = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction(null);
    setError(null);
    setLoading(false);
    setShowImage(false);
    // Save image to localStorage for ShowImage component
    if (e.target.files[0]) {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      localStorage.setItem("uploadedImage", imgUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data); // data me class, confidence, description hona chahiye
    } catch (err) {
      setError("Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  // PDF download handler
  const handleDownloadPDF = () => {
    if (!prediction) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Skin Cancer Detection Result", 14, 20);
    doc.setFontSize(12);
    doc.text(`Class: ${prediction.class}`, 14, 40);
    doc.text(`Confidence: ${(prediction.confidence * 100).toFixed(1)}%`, 14, 50);
    doc.text(`Description: ${prediction.description}`, 14, 60);
    doc.save("skin-cancer-prediction.pdf");
  };

  return (
    <div className="camera-capture-outer">
      <div className="camera-capture-container">
        <h2>Upload Image for Skin Cancer Detection</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {/* Image Preview */}
        {showImage && file && (
          <div style={{ margin: "1.2rem 0" }}>
            <img
              src={URL.createObjectURL(file)}
              alt="Selected"
              style={{
                maxWidth: "220px",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(79,70,229,0.08)",
                display: "block",
                margin: "0 auto"
              }}
            />
          </div>
        )}

        {/* Show Image Button */}
        {file && (
          <button
            type="button"
            style={{
              marginTop: "1rem",
              background: "#ede9fe",
              color: "#5b21b6",
              border: "none",
              borderRadius: "0.375rem",
              padding: "0.5rem 1.5rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => setShowImage((prev) => !prev)}
          >
            {showImage ? "Hide Image" : "Show Image"}
          </button>
        )}

        {/* ShowImage Component */}
        {showImage && <ShowImage />}

        {error && (
          <div className="error-message">{error}</div>
        )}

        {prediction && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>
              <strong>Class:</strong> {prediction.class}
            </p>
            <p>
              <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(1)}%
            </p>
            <p>
              <strong>Description:</strong> {prediction.description}
            </p>
            <button
              className="primary-btn"
              style={{ marginTop: "1.5rem" }}
              onClick={handleDownloadPDF}
            >
              Download PDF
            </button>
          </div>
        )}

        {!loading && !error && !prediction && file && (
          <div style={{ marginTop: "1rem", color: "#4b5563" }}>
            Click "Predict" to see the result.
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;