import { Factory } from "lucide-react";
import { Caustics } from "./Caustics";
import { useReveal } from "./useReveal";
import heroBottle from "../assets/bottles/bottleAutomotive.png";

export function HeroSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <header id="top" ref={ref} className="lm-hero on-dark">
      <img
        className="lm-hero-bg"
        src={heroBottle}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
      <div className="lm-hero-tint" aria-hidden="true" />
      <Caustics blobs={6} alpha={0.1} top="#0c3941" bottom="#08282e" />

      <div className="lm-hero-inner">
        <span className="hero-pill rv in">
          <Factory size={14} />
          UK Chemical Manufacturer. Since 1991. Warwickshire.
        </span>
        <h1 className="rv in">
          Your brand. <span className="green">Our formulations.</span>
        </h1>
        <p className="lm-hero-sub rv in rv-d1">
          Toll manufacturing, white label and bespoke formulations for agriculture, automotive,
          construction and cleaning industries. From formulation to filled, labelled,
          shelf-ready product — we handle the chemistry so you can focus on your brand.
        </p>
        <div className="lm-hero-cta rv in rv-d2">
          <a className="btn-lm" href="#contact">
            Get a quote →
          </a>
          <a className="btn-lm-ghost" href="#services">
            See how it works
          </a>
        </div>
      </div>

      <div className="lm-hero-stats">
        <div className="rv in rv-d2">
          <div className="num">35</div>
          <div className="lbl">Years manufacturing</div>
        </div>
        <div className="rv in rv-d2">
          <div className="num">70+</div>
          <div className="lbl">Combined R&amp;D years</div>
        </div>
        <div className="rv in rv-d3">
          <div className="num">Worldwide</div>
          <div className="lbl">UK, Europe &amp; export supply</div>
        </div>
        <div className="rv in rv-d3">
          <div className="num">100%</div>
          <div className="lbl">UK manufactured</div>
        </div>
      </div>
    </header>
  );
}
