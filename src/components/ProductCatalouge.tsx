import { useEffect } from "react";
import ProductOptions from "./ProductOptions";
import Products from "./Products";

const ProductCatalouge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
        
        .catalog-wrapper {
          min-height: 100vh;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }
        
        .catalog-hero {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--brand), var(--brand-2));
          overflow: hidden;
        }
        
        .catalog-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(600px 400px at 20% 10%, rgba(102,246,193,.15), transparent 60%), 
                      radial-gradient(800px 500px at 80% 20%, rgba(109,225,255,.12), transparent 55%);
          pointer-events: none;
        }
        
        .catalog-hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(1200px 800px at -10% 10%, rgba(109,225,255,.08), transparent 50%);
          filter: blur(20px);
          pointer-events: none;
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
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 6vw, 72px);
          font-weight: 900;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        
        .catalog-subtitle {
          font-size: clamp(16px, 2.5vw, 24px);
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 40px;
          opacity: 0.95;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .catalog-badge:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-2px);
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
        <header className="catalog-hero">
          <div className="catalog-container">
            <div className="catalog-header">
              <h1 className="catalog-title">
                Product Catalog
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