import { Separator } from "./ui/separator";
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
    { label: "Toll Manufacturing", href: "#toll" },
    { label: "Private Label Service", href: "#private" },
    { label: "Custom Formulations", href: "#custom" },
    { label: "Bulk Supply", href: "#bulk" },
    { label: "Technical Support", href: "#support" },
  ];

  const industries = [
    { label: "Aerospace", href: "#aerospace" },
    { label: "Agricultural", href: "#agricultural" },
    { label: "Automotive", href: "#automotive" },
    { label: "Construction", href: "#construction" },
    { label: "Healthcare", href: "#healthcare" },
    { label: "Industrial Cleaning", href: "#industrial" },
  ];

  const complianceLinks = [
    { label: "CLP/GHS Compliance", href: "#clp" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Midland Chemicals Ltd Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 max-w-md text-base">
              Privately owned, independent UK manufacturer of chemicals
              established in 1991, based in Atherstone, Warwickshire. Supplying
              UK & worldwide with high-quality chemical solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-base text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Atherstone, Warwickshire, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3 text-base text-gray-300">
                <Phone className="h-5 w-5" />
                <span>01827 722911</span>
              </div>
              <div className="flex items-center space-x-3 text-base text-gray-300">
                <Mail className="h-5 w-5" />
                <span>sales@midlandchem.com</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Company Registration No: 02591575</p>
              <p>R&D Team: 70+ Years Combined Experience</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <EnvironmentalPolicyStatement>
                <button className="text-gray-300 hover:text-white cursor-pointer transition-colors text-base">
                  Environmental Policy
                </button>
              </EnvironmentalPolicyStatement>
              <QualityPolicyStatement>
                <button className="text-gray-300 hover:text-white cursor-pointer transition-colors text-base">
                  Quality Policy
                </button>
              </QualityPolicyStatement>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-base"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Compliance */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.label}>
                    <a
                      href={industry.href}
                      className="text-gray-300 hover:text-white transition-colors text-base"
                    >
                      {industry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Compliance Links */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Compliance & Policies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
            <ReachStatementModal>
              <button className="text-sm cursor-pointer text-gray-300 hover:text-white transition-colors text-left">
                REACH Statement
              </button>
            </ReachStatementModal>
            {complianceLinks.map((item) => (
              <span
                key={item.label}
                className="text-sm text-gray-300 cursor-default hover:text-white transition-colors"
              >
                {item.label}
              </span>
            ))}
            <PrivacyPolicyModal>
              <button className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors text-left">
                Privacy Policy
              </button>
            </PrivacyPolicyModal>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-base text-gray-300">
            © 2025 Midland Chemicals Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <span className="text-gray-300">
              Established 1991 • UK Manufacturer • Worldwide Supply
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
