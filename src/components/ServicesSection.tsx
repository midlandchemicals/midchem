import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Settings,
  Package,
  FlaskConical,
  Truck,
  CheckCircle2,
  FileText,
  Tag,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Toll Manufacturing",
      description:
        "Comprehensive blending services for solvents, emulsions, and aqueous formulations.",
      features: [
        "Wide range of chemical types",
        "Acidic, neutral and alkaline formulations",
        "Both viscous and non-viscous products",
        "Your formulation or ours",
        "Full confidentiality guaranteed",
      ],
    },
    {
      icon: Package,
      title: "Private/White Label Service",
      description:
        "Complete private labeling solutions with your corporate identity.",
      features: [
        "UN approved packaging for UK & export",
        "Wide range of pack sizes available",
        "Bespoke packaging options",
        "In-house label printing service",
        "Maintain your corporate identity",
      ],
    },
    {
      icon: FlaskConical,
      title: "Custom Formulations",
      description:
        "Bespoke chemical solutions developed to your exact specifications.",
      features: [
        "Using existing raw materials",
        "Specially sourced materials",
        "Free-issue raw materials accepted",
        "Your specification & requirements",
        "R&D team with 70+ years experience",
      ],
    },
    {
      icon: Truck,
      title: "Bulk Supply & Contract Filling",
      description:
        "Flexible supply options including bulk products for contract filling.",
      features: [
        "Bulk product supply",
        "Contract filling services",
        "Flexible delivery options",
        "UK and worldwide shipping",
        "Just-in-time delivery",
      ],
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description:
        "Complete documentation and compliance support for all products.",
      features: [
        "Up to date CLP compliant data sheets",
        "Safety Data Sheets (SDS)",
        "Certificates of Analysis",
        "REACH compliance documentation",
        "Technical support materials",
      ],
    },
    {
      icon: Tag,
      title: "Labeling & Compliance",
      description:
        "Professional labeling services ensuring full regulatory compliance.",
      features: [
        "CLP/GHS compliant labeling",
        "REACH compliance",
        "Custom label design",
        "Multi-language options",
        "Regulatory updates included",
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
        
        .services-section {
          padding: 84px 0;
        }
        
        .services-container {
          width: min(1200px, 92vw);
          margin: 0 auto;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 64px;
        }
        
        .services-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800;
          margin: 0 0 16px;
          color: var(--text);
        }
        
        .services-subtitle {
          color: var(--text-dim);
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }
        
        .service-card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .service-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        
        .service-icon {
          padding: 16px;
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1);
          background: linear-gradient(135deg, #25a25a, #177b55);
        }
        
        .service-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 12px;
          text-align: center;
        }
        
        .service-description {
          color: var(--text-dim);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
          text-align: center;
          min-height: 48px;
        }
        
        .features-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 12px;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          space-y: 8px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-bottom: 6px;
        }
        
        .feature-check {
          color: #25a25a;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .service-cta {
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-size: 1rem;
        }
        
        .service-cta:hover {
          background: linear-gradient(135deg, #25a25a, #177b55);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .service-card {
            padding: 24px;
          }
        }
      `}</style>
      
      <section id="services" className="services-section">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <h2 className="services-title">
              Our Manufacturing Services
            </h2>
            <p className="services-subtitle">
              Midland Chemicals has the capacity and capability to blend a wide
              range of chemical types. We are flexible enough to blend to your
              formulation(s) with full confidentiality at all times.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <CheckCircle2 size={16} className="feature-check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact-form");
                      if (element) {
                        const topOffset =
                          element.getBoundingClientRect().top +
                          window.scrollY -
                          100;
                        window.scrollTo({
                          top: topOffset,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="service-cta"
                  >
                    Get Quote
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
