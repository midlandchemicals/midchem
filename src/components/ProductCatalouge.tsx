import { useEffect } from "react";
import ProductOptions from "./ProductOptions";
import Products from "./Products";
import { Caustics } from "./Caustics";

const ProductCatalouge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <style>{`
        :root {
          --bg: #f4f8f8;
          --panel: #ffffff;
          --panel-2: #eaf1f1;
          --brand: #0e3a40;
          --brand-2: #16a34a;
          --text: #0d1b2a;    
          --text-dim: #556b7a; 
          --ring: rgba(102,246,193,.35);
          --radius: 20px;
          --shadow: 0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .catalog-wrapper {
          min-height: 100vh;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }
        
        .catalog-hero {
          position: relative;
          padding: 110px 0 70px;
          background: var(--abyss);
          overflow: hidden;
        }
        
        .catalog-container {
          width: min(1200px, 92vw);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .catalog-header {
          text-align: center;
          color: white;
          position: relative;
          z-index: 2;
        }
        
        .catalog-title {
          font-family: var(--lm-display);
          font-size: clamp(34px, 5.4vw, 66px);
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 14px 0 18px;
          line-height: 1.05;
          text-wrap: balance;
        }

        .catalog-title em {
          color: var(--green);
          font-style: normal;
        }

        .catalog-subtitle {
          font-size: clamp(14px, 1.6vw, 17px);
          line-height: 1.65;
          max-width: 56ch;
          margin: 0 auto;
          color: var(--white-soft);
          font-weight: 330;
        }
        
        .catalog-badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }
        
        .catalog-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(34,197,94,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(34,197,94,0.4);
          color: #fff;
          font-weight: 460;
          font-size: 12.5px;
          letter-spacing: 0.04em;
          transition: all 0.3s ease;
        }

        .catalog-badge:hover {
          background: rgba(34,197,94,0.2);
          transform: translateY(-2px);
        }

        .catalog-badge svg {
          color: var(--green);
        }
        
        .catalog-badge svg {
          opacity: 0.9;
          width: 18px;
          height: 18px;
        }
        
        .catalog-content {
          position: relative;
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .catalog-hero {
            padding: 80px 0 60px;
          }
          
          .catalog-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .catalog-badge {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
      
      <div className="catalog-wrapper">
        <header className="catalog-hero lm-veil lm-grain on-dark">
          <Caustics blobs={6} alpha={0.15} top="#0a3a42" bottom="#05262c" />
          <div className="catalog-container">
            <div className="catalog-header">
              <p className="eyebrow">Midland Chemicals Ltd</p>
              <h1 className="catalog-title">
                The product <em>catalogue.</em>
              </h1>
              <p className="catalog-subtitle">
                Discover our comprehensive range of professional chemical solutions
                designed for every industry need.
              </p>
              
              <div className="catalog-badges">
                <span className="catalog-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22C12 12 7 7 2 7c0 10 5 15 10 15z"/>
                    <path d="M12 22c0-10 5-15 10-15 0 10-5 15-10 15z"/>
                  </svg>
                  UK Manufactured
                </span>
                <span className="catalog-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2s7 4 7 10a7 7 0 0 1-14 0C5 6 12 2 12 2z"/>
                  </svg>
                  Professional Grade
                </span>
                <span className="catalog-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Industry Certified
                </span>
              </div>
            </div>
          </div>
        </header>
        
        <div className="catalog-content">
          <ProductOptions />
          <Products />
        </div>
      </div>
    </>
  );
};

export default ProductCatalouge;