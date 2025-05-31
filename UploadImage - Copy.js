import React from "react";
import "./CameraCapture.css"; // Use the same CSS for centering

const UploadImage = () => {
  return (
    <div className="camera-capture-outer">
      <div className="camera-capture-container">
        <h2>Upload Your Skin Image</h2>
        <form>
          <input type="file" accept="image/*" />
          <button type="submit">Upload</button>
        </form>
        {/* Add any preview or result here */}
      </div>
    </div>
  );
};

export default UploadImage;