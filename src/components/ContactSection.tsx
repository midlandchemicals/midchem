import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useReveal } from "./useReveal";

export function ContactSection() {
  const ref = useReveal<HTMLElement>();
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
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
        headers: { Accept: "application/json" },
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

  return (
    <section id="contact" ref={ref} className="contact-wrap">
      <div className="shell">
        <div className="contact-grid-lm">
          <div className="contact-copy">
            <p className="eyebrow rv">Contact us</p>
            <h2 className="lm-display rv rv-d1">Let's get your product into production</h2>
            <p className="rv rv-d2">
              Ready to discuss your chemical manufacturing requirements? Our experienced team in
              Atherstone, Warwickshire is here to help with custom solutions for UK and worldwide
              customers — we respond within 24 hours.
            </p>

            <div className="contact-details rv rv-d3">
              <div className="contact-line">
                <MapPin size={17} />
                <span>
                  <strong>UK Headquarters</strong>
                  Midland Chemicals Ltd, Atherstone, Warwickshire, United Kingdom
                </span>
              </div>
              <div className="contact-line">
                <Phone size={17} />
                <span>
                  <strong>Phone</strong>
                  <a href="tel:+441827722911">01827 722911</a> — UK &amp; international calls
                  welcome
                </span>
              </div>
              <div className="contact-line">
                <Mail size={17} />
                <span>
                  <strong>Email</strong>
                  <a href="mailto:sales@midlandchem.com">sales@midlandchem.com</a> — technical
                  support available
                </span>
              </div>
              <div className="contact-line">
                <Clock size={17} />
                <span>
                  <strong>Business hours</strong>
                  Monday – Friday, 9:00 AM – 5:00 PM UK time (GMT/BST)
                </span>
              </div>
            </div>
          </div>

          <div className="form-card-lm rv rv-d2">
            {isSubmitted ? (
              <div className="lm-success" role="status">
                <div className="tick">
                  <CheckCircle size={30} />
                </div>
                <h3>Thank you!</h3>
                <p>
                  Your enquiry has been submitted successfully. Our team will contact you soon
                  with detailed information.
                </p>
              </div>
            ) : (
              <div id="contact-form">
                <h3>Get a quote</h3>
                <p className="glass-sub">
                  Tell us about your chemical manufacturing requirements and we'll get back to
                  you within 24 hours with a detailed proposal.
                </p>
                <form id="inquiry-form" onSubmit={handleSubmit}>
                  <div className="lm-field">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && <p className="lm-error">{errors.name}</p>}
                  </div>

                  <div className="lm-field-row">
                    <div className="lm-field">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <p className="lm-error">{errors.email}</p>}
                    </div>
                    <div className="lm-field">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 1234 567890"
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <p className="lm-error">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="lm-field">
                    <label htmlFor="company">Company *</label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className={errors.company ? "error" : ""}
                    />
                    {errors.company && <p className="lm-error">{errors.company}</p>}
                  </div>

                  <div className="lm-field">
                    <label htmlFor="message">Requirements *</label>
                    <textarea
                      id="message"
                      name="text"
                      value={formData.text}
                      onChange={handleInputChange}
                      placeholder="Please describe your chemical requirements, quantities needed, specifications, target markets, or any specific questions about our toll manufacturing or private label services..."
                      className={errors.text ? "error" : ""}
                    />
                    {errors.text && <p className="lm-error">{errors.text}</p>}
                  </div>

                  <button type="submit" className="btn-lm" style={{ width: "100%" }}>
                    Send enquiry →
                  </button>

                  <p className="lm-form-note">
                    * Required fields. We respect your privacy and will only use your information
                    to respond to your enquiry. Company Registration: 02591575
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
