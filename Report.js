import React, { useEffect, useState } from "react";
import "./CameraCapture.css"; // Same CSS for card look

const Report = () => {
  const [previousReport, setPreviousReport] = useState(null);

  useEffect(() => {
    // Try to get the previous prediction report from localStorage
    const savedReport = localStorage.getItem("predictionReport");
    if (savedReport) {
      setPreviousReport(JSON.parse(savedReport));
    }
  }, []);

  return (
    <div className="camera-capture-outer">
      <div className="camera-capture-container">
        <h2>Prediction Report</h2>
        <p>Detailed report will be displayed here.</p>

        {previousReport ? (
          <div className="report-box">
            <h3>Previous Report</h3>
            <p>
              <strong>Class:</strong> {previousReport.class}
            </p>
            <p>
              <strong>Confidence:</strong> {(previousReport.confidence * 100).toFixed(1)}%
            </p>
            <p>
              <strong>Description:</strong> {previousReport.description}
            </p>
            {previousReport.date && (
              <p>
                <strong>Date:</strong> {previousReport.date}
              </p>
            )}
          </div>
        ) : (
          <p style={{ color: "#b91c1c", fontWeight: "bold" }}>
            No previous report found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Report;

// Somewhere in your code, when you have the class, confidence, and description
// localStorage.setItem("predictionReport", JSON.stringify({ class, confidence, description, date: new Date().toLocaleString() }));