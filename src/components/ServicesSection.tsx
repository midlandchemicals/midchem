import {
  Settings,
  Package,
  FlaskConical,
  Truck,
  CheckCircle2,
  FileText,
  Tag,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "./useReveal";

export function ServicesSection() {
  const ref = useReveal<HTMLElement>();

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
      title: "Private / White Label",
      description: "Complete private labeling solutions with your corporate identity.",
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
      description: "Bespoke chemical solutions developed to your exact specifications.",
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
      description: "Flexible supply options including bulk products for contract filling.",
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
      description: "Complete documentation and compliance support for all products.",
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
      description: "Professional labeling services ensuring full regulatory compliance.",
      features: [
        "CLP/GHS compliant labeling",
        "REACH compliance",
        "Custom label design",
        "Multi-language options",
        "Regulatory updates included",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={ref} className="shell">
      <div className="sec-head">
        <div>
          <p className="eyebrow rv">Manufacturing services</p>
          <h2 className="lm-display rv rv-d1">
            Blended, packed and labelled <em style={{ color: "var(--aqua-deep)" }}>under one roof.</em>
          </h2>
        </div>
        <p className="sec-lead rv rv-d2">
          Midland Chemicals has the capacity and capability to blend a wide range of chemical
          types. We are flexible enough to blend to your formulation(s) with full confidentiality
          at all times.
        </p>
      </div>

      <div className="svc-grid">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.title} className="svc-card rv">
              <div className="svc-icon">
                <IconComponent size={22} />
              </div>
              <h3>{service.title}</h3>
              <p className="svc-desc">{service.description}</p>
              <ul className="svc-list">
                {service.features.map((feature) => (
                  <li key={feature} className="svc-item">
                    <CheckCircle2 size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="svc-cta" onClick={scrollToContact}>
                Get a quote <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
