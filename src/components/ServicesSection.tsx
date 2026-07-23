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

const processSteps = [
  {
    icon: FlaskConical,
    num: "01",
    title: "Formulate",
    text: "Blend to your formulation in full confidence, or brief our R&D team — 70+ combined years of experience — to develop a bespoke product to your exact specification.",
  },
  {
    icon: Settings,
    num: "02",
    title: "Blend & Fill",
    text: "Solvents, emulsions and aqueous formulations — acidic, neutral or alkaline, viscous or non-viscous — blended and filled at our Warwickshire facility.",
  },
  {
    icon: Package,
    num: "03",
    title: "Label & Deliver",
    text: "UN approved packaging in a wide range of sizes, in-house label printing with your corporate identity, and flexible delivery across the UK and worldwide.",
  },
];

const services = [
  {
    icon: Settings,
    title: "Toll Manufacturing",
    description:
      "Comprehensive blending services for solvents, emulsions, and aqueous formulations.",
    features: [
      "Wide range of chemical types",
      "Acidic, neutral and alkaline formulations",
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
      "In-house label printing service",
      "Maintain your corporate identity",
    ],
  },
  {
    icon: FlaskConical,
    title: "Custom Formulations",
    description: "Bespoke chemical solutions developed to your exact specifications.",
    features: [
      "Using existing or specially sourced materials",
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
    ],
  },
  {
    icon: Tag,
    title: "Labeling & Compliance",
    description: "Professional labeling services ensuring full regulatory compliance.",
    features: [
      "CLP/GHS compliant labeling",
      "Custom label design",
      "Multi-language options",
      "Regulatory updates included",
    ],
  },
];

export function ServicesSection() {
  const ref = useReveal<HTMLElement>();

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
        <p className="eyebrow rv">What we offer</p>
        <h2 className="lm-display rv rv-d1">Formulate. Blend. Deliver.</h2>
        <p className="sec-lead rv rv-d2">
          We handle every step of bringing your chemical product to market — from initial
          formulation through to filled, labelled, shelf-ready product delivered to your door.
        </p>
      </div>

      <div className="proc-grid rv-stagger" style={{ marginBottom: "clamp(44px, 8vh, 72px)" }}>
        {processSteps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.num} className="proc-card rv">
              <span className="proc-num">{step.num}</span>
              <div className="proc-icon">
                <IconComponent size={24} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          );
        })}
      </div>

      <div className="sec-head">
        <p className="eyebrow rv">Manufacturing services</p>
        <h2 className="lm-display rv rv-d1">Everything under one roof</h2>
        <p className="sec-lead rv rv-d2">
          Midland Chemicals has the capacity and capability to blend a wide range of chemical
          types — flexible enough to blend to your formulation(s) with full confidentiality at
          all times.
        </p>
      </div>

      <div className="svc-grid rv-stagger">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.title} className="svc-card rv">
              <div className="svc-icon">
                <IconComponent size={21} />
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
