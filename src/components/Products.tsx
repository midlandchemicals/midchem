import useProductStore from "../store";
import { chemicals } from "../utils/chemicals";
import ProductCard from "./ProductCard";

const Products = () => {
  const { selectedChemical } = useProductStore();
  
  return (
    <>
      <style>{`
        :root {
          --bg: #f5f7fa;        
          --panel: #ffffff;     
          --panel-2: #e3ebf5;  
          --brand: #05262c;    
          --brand-2: #1e9d8f;   
          --text: #0d1b2a;    
          --text-dim: #556b7a; 
          --ring: rgba(102,246,193,.35);
          --radius: 20px;
          --shadow: 0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .products-section {
          background: var(--bg);
          padding: 40px 0 80px;
          position: relative;
        }
        
        .products-container {
          width: min(1400px, 95vw);
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .products-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .products-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: var(--text);
          margin: 0 0 12px;
          position: relative;
        }
        
        .products-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--brand-2), #4fd6c5);
          border-radius: 2px;
        }
        
        .products-count {
          color: var(--text-dim);
          font-size: 1rem;
          margin-top: 16px;
          font-weight: 500;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          justify-items: center;
          margin-top: 24px;
        }
        
        .products-empty {
          text-align: center;
          padding: 80px 20px;
          color: var(--text-dim);
        }
        
        .products-empty-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 24px;
          opacity: 0.5;
        }
        
        .products-empty-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 8px;
        }
        
        .products-empty-text {
          font-size: 1rem;
          line-height: 1.6;
        }
        
        /* Loading animation */
        .products-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 20px;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(58,124,165,0.2);
          border-top: 3px solid var(--brand-2);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
          }
        }
        
        @media (max-width: 768px) {
          .products-section {
            padding: 24px 0 60px;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .products-container {
            padding: 0 12px;
          }
        }
      `}</style>
      
      <section className="products-section">
        <div className="products-container">
          <div className="products-header">
            <h2 className="products-title">
              {selectedChemical}
            </h2>
            <p className="products-count">
              {chemicals[selectedChemical as keyof typeof chemicals]?.length || 0} products available
            </p>
          </div>

          {chemicals[selectedChemical as keyof typeof chemicals]?.length > 0 ? (
            <div className="products-grid">
              {chemicals[selectedChemical as keyof typeof chemicals].map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <svg className="products-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
              </svg>
              <h3 className="products-empty-title">No Products Found</h3>
              <p className="products-empty-text">
                We're currently updating our {selectedChemical} catalog.<br />
                Please check back soon or contact us for specific requirements.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;