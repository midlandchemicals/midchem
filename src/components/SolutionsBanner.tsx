import { CheckCircle2 } from "lucide-react";
import ilexLogo from "../assets/ilex-logo.png";
import midlandLogo from "../assets/midlandLogo-Nobg.png";
import { useReveal } from "./useReveal";

const trustItems = [
  "GB CLP Compliant",
  "UK REACH Registered",
  "SDS Provided",
  "UN Approved Packaging",
  "In-House Formulation",
];

export function SolutionsBanner() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {trustItems.map((item) => (
            <span key={item} className="trust-item">
              <CheckCircle2 size={16} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="stats-strip">
        <div className="stats-strip-inner">
          <p className="rv">
            Trusted by customers <strong>throughout the UK, Europe and worldwide</strong> — from
            startups to established brands
          </p>
          <div className="stats-row">
            <div className="cell rv">
              <div className="num">1991</div>
              <div className="lbl">Independent since</div>
            </div>
            <div className="cell rv rv-d1">
              <div className="num">70+</div>
              <div className="lbl">Combined R&amp;D years</div>
            </div>
            <div className="cell rv rv-d2">
              <div className="num">7</div>
              <div className="lbl">Industry sectors</div>
            </div>
            <div className="cell rv rv-d3">
              <div className="num">100%</div>
              <div className="lbl">Formulation confidentiality</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ilex-strip">
        <img src={ilexLogo} alt="Ilex EnviroSciences logo" />
        <p>
          Ilex EnviroSciences Ltd is now part of <strong>Midland Chemicals Ltd</strong>
        </p>
        <img src={midlandLogo} alt="Midland Chemicals logo" />
      </div>
    </div>
  );
}
