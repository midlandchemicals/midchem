export function HeroSection() {
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
        .subtitle {
          display: block;
          white-space: normal;
          word-break: break-word;
          overflow-wrap: anywhere;
          text-wrap: wrap;
          max-width: 100%;
          hyphens: auto;
        }
        @keyframes scroll {
          to { transform: translateX(-50%); }
        }
        .reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .reveal.in {
          opacity: 1;
          transform: none;
        }
        @media (max-width: 768px) {
          .title {
            font-size: clamp(24px, 8vw, 42px) !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            line-height: 1.1 !important;
          }
          .subtitle {
            font-size: clamp(14px, 2vw, 17px) !important;
            line-height: 1.4 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            max-width: 100% !important;
          }
          .chip {
            padding: 8px 12px !important;
            font-size: 12px !important;
          }
          .chip svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .title {
            font-size: clamp(20px, 7vw, 28px) !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            line-height: 1.15 !important;
          }
          .subtitle {
            font-size: clamp(13px, 1.8vw, 15px) !important;
            line-height: 1.35 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            max-width: 100% !important;
          }
          .chip {
            padding: 4px 8px !important;
            font-size: 10px !important;
            white-space: normal !important;
            text-align: center !important;
            min-height: 32px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .chip svg {
            width: 12px !important;
            height: 12px !important;
            flex-shrink: 0 !important;
          }
        }
        @media (max-width: 590px) {
          .chip[title="Domestic & International Supply"] {
            display: flex !important;
            width: 100% !important;
            justify-content: flex-start !important;
          }
          .chip-groups {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        .chip-groups {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      `}</style>
      <header
        id="top"
        className="hero container"
        style={
          {
            position: "relative",
            padding: "64px 0 56px",
            overflow: "hidden",
            width: "min(1200px, 92vw)",
            margin: "0 auto",
          } as React.CSSProperties
        }
      >
        <div
          className="glow"
          aria-hidden="true"
          style={
            {
              position: "absolute",
              inset: "-10%",
              background:
                "radial-gradient(800px 500px at 20% 10%, rgba(102,246,193,.12), transparent 60%), radial-gradient(900px 600px at 85% 20%, rgba(109,225,255,.12), transparent 55%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            } as React.CSSProperties
          }
        ></div>
        <div className="particles" aria-hidden="true"></div>
        <div
          className="hero-grid"
          style={
            {
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
              alignItems: "center",
            } as React.CSSProperties
          }
        >
          <div
            style={
              { maxWidth: "100%", overflow: "hidden" } as React.CSSProperties
            }
          >
            <h1
              className="title reveal in"
              style={
                {
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(48px, 6.8vw, 64px)",
                  lineHeight: "1.03",
                  fontWeight: "900",
                  margin: "0 0 16px",
                  letterSpacing: "-.02em",
                } as React.CSSProperties
              }
            >
              High Performance Chemical Solutions
              <span
                style={
                  {
                    background: "linear-gradient(180deg, #25a25a, #177b55)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  } as React.CSSProperties
                }
              >
                <br />
                Manufactured in the UK
              </span>
              .
            </h1>
            <p
              className="subtitle reveal in"
              style={
                {
                  fontSize: "clamp(16px,2.2vw,19px)",
                  color: "var(--text-dim)",
                  width: "100%",
                  maxWidth: "100%",
                  padding: "0 21px 0 0",
                  transitionDelay: ".1s",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                } as React.CSSProperties
              }
            >
              Midland Chemicals Ltd specialises in tailored formulations and
              products that meet the chemical needs of the agriculture sector
              and a wide range of sectors including automotive, construction,
              and cleaning industries.
            </p>
            <div
              className="badges reveal in chip-groups"
              style={
                {
                  margin: "22px 0 28px",
                  transitionDelay: ".2s",
                } as React.CSSProperties
              }
            >
              <div
                className="chip-group"
                style={{ display: "flex", gap: "10px" }}
              >
                <span
                  className="chip"
                  title="UK Manufacturer"
                  style={
                    {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))",
                      border: "1px solid rgba(255,255,255,.08)",
                      fontWeight: "600",
                      color: "#3a7ca5",
                      fontSize: "14px",
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      {
                        opacity: ".9",
                        width: "18px",
                        height: "18px",
                      } as React.CSSProperties
                    }
                  >
                    <path d="M12 22C12 12 7 7 2 7c0 10 5 15 10 15z" />
                    <path d="M12 22c0-10 5-15 10-15 0 10-5 15-10 15z" />
                  </svg>
                  UK Manufacturer
                </span>
                <span
                  className="chip"
                  title="Since 1991"
                  style={
                    {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))",
                      border: "1px solid rgba(255,255,255,.08)",
                      fontWeight: "600",
                      color: "#3a7ca5",
                      fontSize: "14px",
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      {
                        opacity: ".9",
                        width: "18px",
                        height: "18px",
                      } as React.CSSProperties
                    }
                  >
                    <path d="M12 2s7 4 7 10a7 7 0 0 1-14 0C5 6 12 2 12 2z" />
                  </svg>
                  Since 1991
                </span>
              </div>
              <div className="chip-group" style={{ display: "flex" }}>
                <span
                  className="chip"
                  title="Domestic & International Supply"
                  style={
                    {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 10px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))",
                      border: "1px solid rgba(255,255,255,.08)",
                      fontWeight: "600",
                      color: "#3a7ca5",
                      fontSize: "14px",
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      {
                        opacity: ".9",
                        width: "18px",
                        height: "18px",
                      } as React.CSSProperties
                    }
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Domestic & International Supply
                </span>
              </div>
            </div>
            <div
              className="marquee"
              aria-hidden="true"
              style={
                {
                  marginTop: "34px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  maskImage:
                    "linear-gradient(90deg, transparent 0, #fff 15%, #fff 85%, transparent 100%)",
                } as React.CSSProperties
              }
            >
              <span
                style={
                  {
                    display: "inline-block",
                    paddingRight: "42px",
                    opacity: ".8",
                    animation: "scroll 15s linear infinite",
                    color: "#3a7ca5",
                    "font-size": "20px",
                  } as React.CSSProperties
                }
              >
                Paint Strippers • Aluminium Cleaners • Concentrated Foliar
                Nutrients • Biostimulants • Seed Treatments • Brick Acid • Algae
                Remover •{" "}
              </span>
              <span
                style={
                  {
                    display: "inline-block",
                    paddingRight: "42px",
                    opacity: ".8",
                    animation: "scroll 15s linear infinite",
                    color: "#3a7ca5",
                    "font-size": "20px",
                  } as React.CSSProperties
                }
              >
                Paint Strippers • Aluminium Cleaners • Concentrated Foliar
                Nutrients • Biostimulants • Seed Treatments • Brick Acid • Algae
                Remover •
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
