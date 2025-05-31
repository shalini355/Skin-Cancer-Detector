import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h2 className="privacy-heading">Privacy Policy</h2>
      <p className="privacy-para">
        Your privacy is our top priority. We are committed to protecting your
        personal information and ensuring your experience is safe and secure.
      </p>
      <ul className="privacy-list">
        <li>
          <strong>No Storage:</strong> Your uploaded images and results are{" "}
          <span className="privacy-green">never stored</span>{" "}
          on our servers without your consent.
        </li>
        <li>
          <strong>Confidentiality:</strong> All predictions and reports are
          processed securely and are visible only to you.
        </li>
        <li>
          <strong>No Sharing:</strong> We do{" "}
          <span className="privacy-red">not share</span>{" "}
          your data with any third parties.
        </li>
        <li>
          <strong>Session-based:</strong> Your data is cleared after you leave or
          refresh the page.
        </li>
        <li>
          <strong>Transparency:</strong> You are always in control of your
          information.
        </li>
      </ul>
      <p className="privacy-para">
        For any questions or concerns about your privacy, please contact us at{" "}
        <a
          href="mailto:support@skincancerapp.com"
          className="privacy-link"
        >
          support@skincancerapp.com
        </a>
        .
      </p>
    </div>
  );
};

export default Privacy;