import { chemicals, icons } from "../utils/chemicals";
import useProductStore from "../store";

const ProductOptions = () => {
  const { selectedChemical, setSelectedChemical } = useProductStore();

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
        
        .options-section {
          padding: 0 0 32px;
          background: var(--bg);
          position: relative;
        }
        
        .options-container {
          width: min(1200px, 92vw);
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .options-card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 32px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }
        
        .options-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 24px;
          text-align: center;
        }
        
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
          background: rgba(243, 244, 251, 0.5);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .option-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .option-item:hover {
          background: rgba(255,255,255,0.7);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        
        .option-item.selected {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          border-color: var(--brand-2);
          box-shadow: 0 8px 25px rgba(58,124,165,0.15);
          transform: translateY(-1px);
        }
        
        .option-item.selected::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--brand-2), #4fd6c5);
          border-radius: 12px 12px 0 0;
        }
        
        .option-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          filter: grayscale(0.3);
        }
        
        .option-item:hover .option-icon,
        .option-item.selected .option-icon {
          filter: grayscale(0);
          transform: scale(1.1);
        }
        
        .option-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s ease;
        }
        
        .option-item.selected .option-text {
          color: var(--brand);
        }
        
        @media (max-width: 768px) {
          .options-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .option-item {
            padding: 14px 16px;
          }
          
          .option-text {
            font-size: 0.9rem;
            white-space: normal;
            overflow: visible;
          }
        }
        
        @media (max-width: 480px) {
          .options-card {
            padding: 24px 16px;
            margin-top: -30px;
          }
        }
      `}</style>
      
      <section className="options-section">
        <div className="options-container">
          <div className="options-card">
            <h3 className="options-title">Select Product Category</h3>
            <div className="options-grid">
              {Object.keys(chemicals).map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedChemical(category)}
                  className={`option-item ${
                    category === selectedChemical ? "selected" : ""
                  }`}
                >
                  <img
                    className="option-icon"
                    src={icons[category as keyof typeof icons]}
                    alt={`${category} icon`}
                  />
                  <span className="option-text">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOptions;