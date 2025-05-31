import React, { useEffect, useState } from "react";
import "./CameraCapture.css";

const ShowImage = () => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const savedImg = localStorage.getItem("uploadedImage");
    if (savedImg) setImgSrc(savedImg);
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("uploadedImage");
    setImgSrc(null);
  };

  return (
    <div className="camera-capture-outer">
      <div className="camera-capture-container">
        <h2>Uploaded Image</h2>
        {imgSrc ? (
          <>
            <img
              src={imgSrc}
              alt="Uploaded"
              style={{
                maxWidth: "220px",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(79,70,229,0.08)",
                marginBottom: "1rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="primary-btn"
                style={{ marginTop: "1rem" }}
                onClick={handleDelete}
              >
                Delete Image
              </button>
            </div>
          </>
        ) : (
          <p>No image to display.</p>
        )}
      </div>
    </div>
  );
};

export default ShowImage;