import React from "react";

const FAQSection = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
        Frequently Asked Questions
      </h2>
      <p>
        <strong>Q: How accurate is this tool?</strong>
        <br />
        A: Our AI tool provides results with high accuracy, but always consult a dermatologist for a professional diagnosis.
      </p>
      <p>
        <strong>Q: Is my data safe?</strong>
        <br />
        A: Yes, your data is handled with complete confidentiality. No image or result is stored without your consent.
      </p>
    </div>
  );
};

export default FAQSection;