import { useState } from "react";
import { Factory } from "lucide-react";
import { Caustics } from "./Caustics";
import { CountUp } from "./CountUp";
import { useReveal } from "./useReveal";

export function HeroSection() {
  const ref = useReveal<HTMLElement>();
  // /hero.mp4 lives in public/. Until it's uploaded (or if it fails to load)
  // the animated caustics backdrop carries the hero on its own.
  const [videoOk, setVideoOk] = useState(true);

  return (
    <header id="top" ref={ref} className="lm-hero on-dark">
      {videoOk && (
        <video
          className="lm-hero-bg"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setVideoOk(false)}
        />
      )}
      <div className="lm-hero-tint" aria-hidden="true" />
      <Caustics blobs={6} alpha={videoOk ? 0.07 : 0.16} top="#0c3941" bottom="#08282e" />

      <div className="lm-hero-inner">
        <span className="hero-pill rv in">
          <Factory size={14} />
          UK Chemical Manufacturer. Since 1991. Warwickshire.
        </span>
        <h1 className="rv in rv-d1">
          Your brand. <span className="green">Our formulations.</span>
        </h1>
        <p className="lm-hero-sub rv in rv-d2">
          Toll manufacturing, white label and bespoke formulations for agriculture, automotive,
          construction and cleaning industries. From formulation to filled, labelled,
          shelf-ready product — we handle the chemistry so you can focus on your brand.
        </p>
        <div className="lm-hero-cta rv in rv-d3">
          <a className="btn-lm" href="#contact">
            Get a quote <span className="arr">→</span>
          </a>
          <a className="btn-lm-ghost" href="#services">
            See how it works
          </a>
        </div>
      </div>

      <div className="lm-hero-stats rv-stagger">
        <div className="rv in rv-d2">
          <div className="num">
            <CountUp to={35} />
          </div>
          <div className="lbl">Years manufacturing</div>
        </div>
        <div className="rv in rv-d2">
          <div className="num">
            <CountUp to={70} suffix="+" />
          </div>
          <div className="lbl">Combined R&amp;D years</div>
        </div>
        <div className="rv in rv-d3">
          <div className="num">Worldwide</div>
          <div className="lbl">UK, Europe &amp; export supply</div>
        </div>
        <div className="rv in rv-d3">
          <div className="num">
            <CountUp to={100} suffix="%" />
          </div>
          <div className="lbl">UK manufactured</div>
        </div>
      </div>
    </header>
  );
}
