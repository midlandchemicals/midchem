import ilexLogo from '../assets/ilex-logo.png';
import midlandLogo from '../assets/midlandLogo-Nobg.png';

export function SolutionsBanner() {
  return (
    <>
      <style>{`
        /* Banner section */
        .banner-container {
          width: min(1100px, 85vw);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid #e0e0e0;
          padding-top: 10px;
        }
        .banner-logo {
          width: 150px;
          height: auto;
          flex-shrink: 0;
        }
        .banner-text {
          flex: 1;
          font-size: 0.95rem;
          color: #1e293b;
          font-weight: 500;
          margin: 0;
          text-align: center;
        }
        .banner-text strong {
          font-weight: 700;
        }

        /* Solutions card */
        .solutions-card {
          max-width: 800px;
          margin: 0 auto 40px;
          padding: 32px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(45,103,105,.02));
          box-shadow: var(--shadow);
        }

        .solutions-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--text);
          text-align: center;
        }

        .solutions-subtitle {
          font-size: 1.05rem;
          color: var(--text-dim);
          margin-bottom: 20px;
          line-height: 1.6;
          text-align: center;
        }

        .solutions-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn.primary {
          background-color: #3a7ca5;
          color: white;
          border: 2px solid #008060;
        }

        .btn.primary:hover {
          background-color: #00694e;
        }

        .btn.outline {
          background-color: transparent;
          border: 2px solid #008060;
          color: #008060;
        }

        .btn.outline:hover {
          background-color: #e6f5f1;
        }

        /* Mobile tweaks */
        @media (max-width: 700px) {
          .solutions-actions {
            flex-direction: column;
          }
          .btn {
            width: 100%;
            max-width: 260px;
          }
          .banner-container {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .banner-logo {
            height: 48px;
          }
          .banner-text {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Banner container */}
      <div className="banner-container">
        <img src={ilexLogo} alt="Ilex EnviroSciences Logo" className="banner-logo" />
        <p className="banner-text">
          Ilex EnviroSciences Ltd is now part of <strong>Midland Chemicals Ltd</strong>
        </p>
        <img src={midlandLogo} alt="Midland Chemicals Logo" className="banner-logo" />
      </div>

      {/* Solutions content */}
      <div style={{ width: 'min(1000px, 85vw)', margin: '0 auto' }}>
        <h2 className="solutions-title">
          Powering Agriculture & Industry
        </h2>
        <p className="solutions-subtitle">
          We provide bespoke white-label chemical manufacturing, specialising in tailored formulations 
          that meet the exacting needs of the <strong>agriculture</strong> sector and a wide range of industries including  {""}
          <strong>aerospace, automotive, construction,</strong> and <strong>healthcare</strong>.
        </p>
        <div className="solutions-actions">
          <a href="#benefits" className="btn outline">All Industries We Serve</a>
          <a href="https://ilex-envirosciences.com/" target="_blank" rel="noopener noreferrer" className="btn primary">Discover Ilex®</a>
        </div>
      </div>
    </>
  );
}
