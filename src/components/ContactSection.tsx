import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    text: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields
    const requiredFields = {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      text: "Requirements",
    };

    Object.entries(requiredFields).forEach(([field]) => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myznqarl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(`Network error ${error}. Please try again.`);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "UK Headquarters",
      details: [
        "Midland Chemicals Ltd",
        "Atherstone, Warwickshire",
        "United Kingdom",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: 01827 722911",
        "Available during business hours",
        "UK & International calls welcome",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "Sales: sales@midlandchem.com",
        "General enquiries welcome",
        "Technical support available",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "UK Time (GMT/BST)",
        "Response within 24 hours",
      ],
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #f5f7fa;        
          --panel: #ffffff;     
          --panel-2: #e3ebf5;  
          --brand: #1f4e79;    
          --brand-2: #3a7ca5;   
          --text: #0d1b2a;    
          --text-dim: #556b7a; 
          --ring: rgba(102,246,193,.35);
          --radius: 20px;
          --shadow: 0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .contact-section {
          padding: 84px 0;
        }
        
        .contact-container {
          width: min(1200px, 92vw);
          margin: 0 auto;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 64px;
        }
        
        .contact-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800;
          margin: 0 0 16px;
          color: var(--text);
        }
        
        .contact-subtitle {
          color: var(--text-dim);
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .info-card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 24px;
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .info-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .info-icon {
          padding: 12px;
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          border-radius: 12px;
          color: white;
        }
        
        .info-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        
        .info-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .info-detail {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin: 0;
        }
        
        .quick-contact-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        
        .quick-contact-card {
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          color: white;
          border-radius: var(--radius);
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .quick-contact-card:hover {
          background: linear-gradient(135deg, #25a25a, #177b55);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }
        
        .quick-contact-card.green {
          background: linear-gradient(135deg, #25a25a, #177b55);
        }
        
        .quick-contact-card.green:hover {
          background: linear-gradient(135deg, #2bb865, #1a8a5d);
        }
        
        .quick-contact-icon {
          margin: 0 auto 12px;
        }
        
        .quick-contact-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 8px;
        }
        
        .quick-contact-text {
          font-size: 0.9rem;
          opacity: 0.9;
          margin: 0 0 16px;
        }
        
        .quick-contact-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .quick-contact-btn:hover {
          background: rgba(255,255,255,0.3);
        }
        
        .contact-form-wrapper {
          position: relative;
        }
        
        .form-card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 40px;
        }
        
        .form-header {
          margin-bottom: 32px;
        }
        
        .form-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--text);
          margin: 0 0 12px;
        }
        
        .form-subtitle {
          color: var(--text-dim);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-label {
          display: block;
          color: var(--text);
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid rgba(255,255,255,.08);
          border-radius: 8px;
          background: rgba(255,255,255,0.5);
          color: var(--text);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--brand-2);
          box-shadow: 0 0 0 3px rgba(58,124,165,0.1);
        }
        
        .form-input.error, .form-textarea.error {
          border-color: #ef4444;
        }
        
        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .error-message {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 4px;
        }
        
        .form-submit {
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .form-submit:hover {
          background: linear-gradient(135deg, #25a25a, #177b55);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }
        
        .form-footer {
          color: var(--text-dim);
          font-size: 0.8rem;
          margin-top: 16px;
          line-height: 1.5;
        }
        
        .success-card {
          background: linear-gradient(135deg, #25a25a, #177b55);
          color: white;
          border-radius: var(--radius);
          padding: 64px;
          text-align: center;
          box-shadow: var(--shadow);
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .success-icon {
          margin-bottom: 24px;
          color: white;
        }
        
        .success-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 16px;
        }
        
        .success-message {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 400px;
          margin: 0;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .contact-info {
            order: 2;
          }
          
          .contact-form-wrapper {
            order: 1;
          }
        }
        
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .form-card {
            padding: 24px;
          }
          
          .success-card {
            padding: 40px 24px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <h2 className="contact-title">Contact Midland Chemicals</h2>
            <p className="contact-subtitle">
              Ready to discuss your chemical manufacturing requirements? Our
              experienced team based in Atherstone, Warwickshire is here to help
              with custom solutions for UK and worldwide customers.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="info-card">
                    <div className="info-header">
                      <div className="info-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="info-title">{info.title}</h3>
                    </div>
                    <div className="info-details">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="info-detail">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Quick Contact Cards */}
              <div className="quick-contact-cards">
                <div className="quick-contact-card">
                  <Mail size={40} className="quick-contact-icon" />
                  <h3 className="quick-contact-title">Email Us Now</h3>
                  <p className="quick-contact-text">sales@midlandchem.com</p>
                  <button className="quick-contact-btn">Send Email</button>
                </div>

                <div className="quick-contact-card green">
                  <Phone size={40} className="quick-contact-icon" />
                  <h3 className="quick-contact-title">Call Us Now</h3>
                  <p className="quick-contact-text">01827 722911</p>
                  <button className="quick-contact-btn">Call Now</button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="success-card">
                  <CheckCircle size={64} className="success-icon" />
                  <h3 className="success-title">Thank You!</h3>
                  <p className="success-message">
                    Your inquiry has been submitted successfully. Our team will
                    contact you soon with detailed information!
                  </p>
                </div>
              ) : (
                <div id="contact-form" className="form-card">
                  <div className="form-header">
                    <h3 className="form-title">Get a Quote</h3>
                    <p className="form-subtitle">
                      Tell us about your chemical manufacturing requirements and
                      we'll get back to you within 24 hours with a detailed
                      proposal.
                    </p>
                  </div>
                  <form id="inquiry-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={`form-input ${errors.name ? "error" : ""}`}
                      />
                      {errors.name && (
                        <p className="error-message">{errors.name}</p>
                      )}
                    </div>

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className={`form-input ${
                            errors.email ? "error" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="error-message">{errors.email}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          type="tel"
                          placeholder="+44 1234 567890"
                          className={`form-input ${
                            errors.phone ? "error" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="error-message">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                        className={`form-input ${
                          errors.company ? "error" : ""
                        }`}
                      />
                      {errors.company && (
                        <p className="error-message">{errors.company}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Please describe your chemical requirements, quantities needed, specifications, target markets, or any specific questions about our toll manufacturing or private label services..."
                        className={`form-textarea ${
                          errors.text ? "error" : ""
                        }`}
                      />
                      {errors.text && (
                        <p className="error-message">{errors.text}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <button type="submit" className="form-submit">
                        Send Enquiry
                      </button>
                    </div>

                    <p className="form-footer">
                      * Required fields. We respect your privacy and will only
                      use your information to respond to your enquiry. Company
                      Registration: 02591575
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
