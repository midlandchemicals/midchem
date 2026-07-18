import ilexLogo from "../assets/ilex-logo.png";
import midlandLogo from "../assets/midlandLogo-Nobg.png";
import { useReveal } from "./useReveal";

export function SolutionsBanner() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="ilex-strip rv">
        <img src={ilexLogo} alt="Ilex EnviroSciences logo" />
        <p>
          Ilex EnviroSciences Ltd is now part of <strong>Midland Chemicals Ltd</strong>
        </p>
        <img src={midlandLogo} alt="Midland Chemicals logo" />
      </div>

      <section className="shell" style={{ paddingBottom: 0 }}>
        <div className="sec-head">
          <div>
            <p className="eyebrow rv">Who we work with</p>
            <h2 className="lm-display rv rv-d1">
              Powering agriculture <em style={{ color: "var(--aqua-deep)" }}>&amp; industry.</em>
            </h2>
          </div>
          <p className="sec-lead rv rv-d2">
            We provide bespoke white-label chemical manufacturing, specialising in tailored
            formulations for the agriculture sector and a wide range of industries including
            aerospace, automotive, construction and healthcare.
          </p>
        </div>
        <div className="rv rv-d2" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#products" className="btn-lm dark">
            All industries we serve
          </a>
          <a
            href="https://ilex-envirosciences.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lm-ghost on-light"
          >
            Discover Ilex®
          </a>
        </div>
      </section>
    </div>
  );
}
