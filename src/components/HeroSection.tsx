import { Caustics } from "./Caustics";
import { useReveal } from "./useReveal";

const marqueeItems =
  "Paint Strippers • Aluminium Cleaners • Concentrated Foliar Nutrients • Biostimulants • Seed Treatments • Brick Acid • Algae Remover • ";

export function HeroSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <header id="top" ref={ref} className="lm-dark lm-veil lm-grain lm-hero on-dark">
      <Caustics blobs={7} alpha={0.16} top="#0a3a42" bottom="#05262c" />
      <div className="lm-hero-inner">
        <p className="eyebrow rv in">Midland Chemicals Ltd — Atherstone, Warwickshire</p>
        <h1 className="lm-display rv in">
          High-performance chemistry, <em>manufactured in the UK.</em>
        </h1>
        <p className="lm-hero-sub rv in rv-d1">
          Tailored formulations and finished products for agriculture, automotive, construction
          and cleaning industries — blended, packed and labelled under one roof since 1991.
        </p>
        <div className="lm-hero-cta rv in rv-d2">
          <a className="btn-lm" href="#contact">
            Get a quote
          </a>
          <a className="btn-lm-ghost" href="#products">
            Explore industries
          </a>
        </div>
      </div>

      <div className="lm-marquee" aria-hidden="true">
        <span>{marqueeItems}</span>
        <span>{marqueeItems}</span>
      </div>

      <div className="lm-hero-meta">
        <div>
          <strong>Established 1991</strong>independent &amp; privately owned
        </div>
        <div>
          <strong>UK &amp; worldwide supply</strong>domestic and export
        </div>
        <div>
          <strong>Your formulation or ours</strong>full confidentiality
        </div>
        <div>
          <strong>REACH &amp; CLP compliant</strong>documentation included
        </div>
      </div>
    </header>
  );
}
