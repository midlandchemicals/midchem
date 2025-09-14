import ProductImg from "./ProductImg";
import useProductStore from "../store";
import { useNavigate } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";

type Application = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

export type productDetails = {
  id: string;
  code: string;
  name: string;
  description: string;
  highlights: string[];
  features: string[];
  applications: Application[];
  surfaces: string[];
};

const backgroundColors: { [key: string]: string } = {
  KC: "linear-gradient(135deg, #f59e0b, #d97706)",
  AC: "linear-gradient(135deg, #ef4444, #dc2626)", 
  BR: "linear-gradient(135deg, #eab308, #ca8a04)",
  DC: "linear-gradient(135deg, #22c55e, #16a34a)",
  FC: "linear-gradient(135deg, #f97316, #ea580c)",
  FP: "linear-gradient(135deg, #06b6d4, #0891b2)",
  HC: "linear-gradient(135deg, #6366f1, #4f46e5)",
  PS: "linear-gradient(135deg, #a855f7, #9333ea)",
  SC: "linear-gradient(135deg, #3b82f6, #2563eb)",
  TW: "linear-gradient(135deg, #0ea5e9, #0284c7)",
};

const getBgClass = (code: string) => {
  const prefix = code?.substring(0, 2);
  return backgroundColors[prefix] || "linear-gradient(135deg, #6b7280, #4b5563)";
};

const ProductCard: React.FC<{ product: productDetails }> = ({ product }) => {
  const { selectedChemical } = useProductStore();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/products/${id}`);
  };

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
        
        .product-card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-width: 320px;
          max-width: 320px;
          display: flex;
          flex-direction: column;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.04);
        }
        
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(400px 300px at 50% 0%, rgba(102,246,193,.05), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .product-card:hover::before {
          opacity: 1;
        }
        
        .product-header {
          position: relative;
          padding: 24px 24px 0;
        }
        
        .product-code {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 8px 16px;
          border-radius: 999px;
          color: white;
          font-weight: 700;
          font-size: 0.8rem;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          border: 2px solid rgba(255,255,255,0.2);
        }
        
        .product-image-container {
          height: 200px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background: rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }
        
        .product-content {
          padding: 0 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .product-info {
          flex: 1;
          margin-bottom: 20px;
        }
        
        .product-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 8px;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .product-category {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          color: white;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(58,124,165,0.2);
        }
        
        .product-description {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.6;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin-bottom: 20px;
        }
        
        .product-cta {
          background: transparent;
          border: 2px solid var(--brand-2);
          color: var(--brand-2);
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .product-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--brand-2), var(--brand));
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .product-card:hover .product-cta {
          color: white;
          border-color: var(--brand);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(58,124,165,0.3);
        }
        
        .product-card:hover .product-cta::before {
          left: 0;
        }
        
        .product-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover .product-arrow {
          transform: translateX(4px);
        }
        
        /* Highlight badges for featured products */
        .product-highlight {
          position: absolute;
          top: -8px;
          left: 16px;
          background: linear-gradient(135deg, #25a25a, #177b55);
          color: white;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          z-index: 15;
          box-shadow: 0 4px 12px rgba(37,162,90,0.3);
        }
        
        @media (max-width: 768px) {
          .product-card {
            min-width: 280px;
            max-width: 280px;
          }
          
          .product-header {
            padding: 20px 20px 0;
          }
          
          .product-content {
            padding: 0 20px 20px;
          }
          
          .product-name {
            font-size: 1.2rem;
          }
          
          .product-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <div
        className="product-card"
        onClick={() => handleClick(product.id)}
      >
        {/* Featured badge for popular products */}
        {product.highlights.length > 3 && (
          <div className="product-highlight">
            Popular
          </div>
        )}
        
        {/* Product Code Badge */}
        <span
          className="product-code"
          style={{ background: getBgClass(product.code) }}
        >
          {product.code}
        </span>

        <div className="product-header">
          {/* Product Image */}
          <div className="product-image-container">
            <ProductImg product={product} />
          </div>
        </div>

        <div className="product-content">
          <div className="product-info">
            {/* Product Name */}
            <h3 className="product-name" title={product.name}>
              {product.name}
            </h3>
            
            {/* Category Badge */}
            <span className="product-category">
              {selectedChemical}
            </span>

            {/* Product Description */}
            <p className="product-description">
              {product.description}
            </p>
          </div>

          {/* Call to Action */}
          <div className="product-cta">
            <span>View Details</span>
            <svg
              className="product-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;