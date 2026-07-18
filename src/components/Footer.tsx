import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";
import { ReachStatementModal } from "./ReachStatementModal";
import { EnvironmentalPolicyStatement } from "./EnviornmentPolicyModal";
import { QualityPolicyStatement } from "./QualityPolicyStatement";

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Industries Served", href: "#products" },
    { label: "Manufacturing Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Toll Manufacturing", href: "#services" },
    { label: "Private Label Service", href: "#services" },
    { label: "Custom Formulations", href: "#services" },
    { label: "Bulk Supply", href: "#services" },
    { label: "Technical Support", href: "#contact" },
  ];

  const industries = [
    { label: "Aerospace", href: "#products" },
    { label: "Agricultural", href: "#products" },
    { label: "Automotive", href: "#products" },
    { label: "Construction", href: "#products" },
    { label: "Healthcare", href: "#products" },
    { label: "Industrial Cleaning", href: "#products" },
  ];

  return (
    <footer className="lm-footer">
      <div className="lm-foot">
        <div className="lm-foot-brand">
          <img src={logo} alt="Midland Chemicals Ltd logo" />
          <p>
            Privately owned, independent UK manufacturer of chemicals established in 1991, based
            in Atherstone, Warwickshire. Supplying UK &amp; worldwide with high-quality chemical
            solutions.
          </p>
          <div className="lm-foot-contact">
            <span>
              <MapPin size={15} />
              Atherstone, Warwickshire, United Kingdom
            </span>
            <span>
              <Phone size={15} />
              01827 722911
            </span>
            <span>
              <Mail size={15} />
              sales@midlandchem.com
            </span>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <EnvironmentalPolicyStatement>
                <button>Environmental Policy</button>
              </EnvironmentalPolicyStatement>
            </li>
            <li>
              <QualityPolicyStatement>
                <button>Quality Policy</button>
              </QualityPolicyStatement>
            </li>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.label}>
                <a href={service.href}>{service.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Industries</h4>
          <ul>
            {industries.map((industry) => (
              <li key={industry.label}>
                <a href={industry.href}>{industry.label}</a>
              </li>
            ))}
            <li>
              <ReachStatementModal>
                <button>REACH Statement</button>
              </ReachStatementModal>
            </li>
            <li>
              <PrivacyPolicyModal>
                <button>Privacy Policy</button>
              </PrivacyPolicyModal>
            </li>
          </ul>
        </div>
      </div>

      <div className="lm-foot-fine">
        <span>
          © 2025 Midland Chemicals Ltd. All rights reserved. Company Registration No: 02591575
        </span>
        <span>Established 1991 • UK Manufacturer • Worldwide Supply • CLP/GHS Compliant</span>
      </div>
    </footer>
  );
}
