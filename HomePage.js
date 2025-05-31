import React from "react";
import { Link } from "react-router-dom";
import FAQSection from "./FAQSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* Header */}
      <header>
        <h1>
          Skin Cancer Detector
        </h1>
      </header>

      {/* Navbar */}
      <nav>
        {[
          { path: "/upload", label: "Upload Image" },
          { path: "/show-image", label: "Display Image" },
          { path: "/report", label: "Show Report" },
          { path: "/privacy", label: "Privacy Note" }
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="nav-link"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section>
          <h2>Detect Early. Stay Healthy.</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
              alt="Healthy Skin"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              Welcome to our advanced Skin Cancer Detector. Our AI-powered tool empowers you to take charge of your skin health by providing fast, secure, and reliable risk assessments. Simply upload a clear image of your skin lesion or mole, and receive instant feedback. <br /><br />
              <strong>Early detection is crucial—let us help you stay one step ahead.</strong>
            </p>
          </div>
        </section>

        {/* Skin Cancer Overview */}
        <section id="upload">
          <h2>What is Skin Cancer?</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://media.istockphoto.com/id/680386164/photo/worried-ladies-having-consultation-with-dermatologist.jpg?s=612x612&w=0&k=20&c=jWPKIrZgABfXXkOrO9WmZ2pljo3ffln5s2U5Gat1hHo="
              alt="Doctor Examining Skin"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              Skin cancer occurs when abnormal skin cells grow uncontrollably, often due to DNA damage from ultraviolet (UV) radiation. The most common types are basal cell carcinoma, squamous cell carcinoma, and melanoma.<br /><br />
              <strong>Understanding these types and their warning signs can help you seek timely medical advice and treatment.</strong>
            </p>
          </div>
        </section>

        {/* Symptoms */}
        <section id="display">
          <h2>Common Symptoms</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <ul style={{flex: 1, minWidth: "220px"}}>
              <li>Noticeable changes in the size, shape, or color of existing moles</li>
              <li>Appearance of new growths or unusual spots on the skin</li>
              <li>Sores that do not heal, or heal and return</li>
              <li>Unusual bleeding, oozing, or crusting from a skin lesion</li>
              <li>Persistent itching, tenderness, or pain in a specific area</li>
            </ul>
            <img
              src="https://www.verywellhealth.com/thmb/26ddRp1Ukfml1kCoN8Ib9kcpfdA=/1500x1001/filters:no_upscale():max_bytes(150000):strip_icc()/psoriasis-symptoms-5b6880af46e0fb002538c5ad.png"
              alt="Skin Symptoms"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
          </div>
        </section>

        {/* Why Early Detection Matters */}
        <section>
          <h2>Why Early Detection Matters</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
              alt="Early Detection"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              Detecting skin cancer at an early stage significantly increases the chances of successful treatment and recovery. Early intervention can minimize the need for invasive procedures and reduce the risk of cancer spreading to other parts of the body.<br /><br />
              <strong>Regular self-examinations and prompt action are key to protecting your health.</strong>
            </p>
          </div>
        </section>

        {/* Risk Factors */}
        <section>
          <h2>Risk Factors</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <ul style={{flex: 1, minWidth: "220px"}}>
              <li>Prolonged or intense exposure to sunlight or UV rays</li>
              <li>Frequent use of tanning beds or sunlamps</li>
              <li>Having fair skin, light hair, or freckles</li>
              <li>Personal or family history of skin cancer</li>
              <li>Weakened immune system due to illness or medication</li>
              <li>Presence of many moles or atypical moles</li>
            </ul>
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/17/47/52/1000_F_317475205_NqTkjNkA4Z5CYIsUTtLZTQo5fsGzqba3.jpg"
              alt="Risk Factors"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
          </div>
        </section>

        {/* Cure & Treatment */}
        <section id="report">
          <h2>Cure & Treatment Options</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://www.houstonmethodist.org/-/media/Images/Services-Specialties/Cancer/CancerTreatment_Graphic.ashx?h=346&w=601&la=en&hash=EAF2212767537051DA64CF3C5DD94B560E38CAAD"
              alt="Treatment"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              Treatment for skin cancer depends on the type and stage of the disease. Options include surgical removal, radiation therapy, cryotherapy (freezing), topical medications, and targeted therapies.<br /><br />
              <strong>Early detection and treatment greatly improve the likelihood of a full recovery and reduce the risk of recurrence.</strong>
            </p>
          </div>
        </section>

        {/* Prevention Tips */}
        <section>
          <h2>Prevention Tips</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <ul style={{flex: 1, minWidth: "220px"}}>
              <li>Apply broad-spectrum sunscreen with SPF 30 or higher every day</li>
              <li>Wear protective clothing, hats, and sunglasses outdoors</li>
              <li>Avoid tanning beds and unnecessary sun exposure</li>
              <li>Perform monthly self-examinations of your skin</li>
              <li>Schedule annual check-ups with a dermatologist</li>
              <li>Stay informed about the latest skin health recommendations</li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
              alt="Prevention"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
          </div>
        </section>

        {/* Medical Terms */}
        <section id="privacy">
          <h2>Medical Terms You Should Know</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              alt="Medical Terms"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              <strong>Benign:</strong> A non-cancerous growth that does not spread to other parts of the body.<br />
              <strong>Malignant:</strong> A cancerous growth that can invade nearby tissues or spread to distant organs.<br />
              <strong>Lesion:</strong> An area of abnormal tissue, such as a sore, mole, or lump.<br />
              <strong>Biopsy:</strong> A medical procedure in which a small sample of tissue is removed for examination.
            </p>
          </div>
        </section>

        {/* Myths vs Facts */}
        <section>
          <h2>Myths vs. Facts</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <ul style={{flex: 1, minWidth: "220px"}}>
              <li><strong>Myth:</strong> Only fair-skinned people get skin cancer.<br /><strong>Fact:</strong> Skin cancer can affect people of all skin tones and backgrounds.</li>
              <li><strong>Myth:</strong> Skin cancer only happens in old age.<br /><strong>Fact:</strong> It can occur at any age, especially with high UV exposure.</li>
              <li><strong>Myth:</strong> A tan protects you from skin cancer.<br /><strong>Fact:</strong> Tanning increases your risk by damaging your skin’s DNA.</li>
              <li><strong>Myth:</strong> Skin cancer is always easy to spot.<br /><strong>Fact:</strong> Some types can be subtle and require professional evaluation.</li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Myths and Facts"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
          </div>
        </section>

        {/* Privacy Note */}
        <section id="theme">
          <h2>Privacy Note</h2>
          <div style={{display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
              alt="Privacy"
              style={{width: "180px", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(79,70,229,0.08)"}}
            />
            <p style={{flex: 1, minWidth: "220px"}}>
              Your privacy is extremely important to us. All images and results are processed securely and are never stored or shared without your explicit consent. You are always in control of your data, and can delete your information at any time. For more details, please see our full privacy policy.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <FAQSection />
        </section>

        {/* Split Hero Section */}
        <div className="split-hero">
          <div className="split-hero-left">
            <h2>Early Skin Cancer Detection Saves Lives</h2>
            <p>
              Skin cancer is one of the most common cancers, but it’s also highly treatable when detected early.<br /><br />
              Our advanced AI-powered tool helps you screen suspicious skin spots quickly and privately from the comfort of your home. Upload a clear image and receive an instant, confidential risk assessment.<br /><br />
              Take control of your skin health—detect risks early, consult your doctor, and stay protected. Your journey to healthier skin starts here.
            </p>
            <Link to="/upload" className="primary-btn">Start Your Free Scan</Link>
          </div>
          <div className="split-hero-right">
            <img
              src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80"
              alt="Skin Cancer Awareness"
              className="split-hero-img"
            />
          </div>
        </div>
      </main>

      {/* Decorative Wave Background */}
      <div className="wave-bg">
        <svg viewBox="0 0 1440 320" style={{ width: "100%", height: "120px", display: "block" }}>
          <path
            fill="#ffe4c2"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomePage;