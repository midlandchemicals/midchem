export function AboutSection() {
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
        .section {
          padding: 84px 0;
        }
        .container {
          width: min(1000px, 85vw);
          margin: 0 auto;
        }
        .section-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(30px, 4vw, 48px);
          margin: 0 0 12px;
          color: var(--text);
          text-align: center;
        }
        .lead {
          color: var(--text-dim);
          margin: 0 0 28px;
          font-size: 1.2rem;
          text-align: center;
        }
        .grid {
          display: grid;
          gap: 20px;
        }
        .cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .card {
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 26px;
        }
        .card h3 {
          margin: 0 0 8px;
          color: var(--text);
        }
        .card p {
          margin: 0;
          color: var(--text-dim);
        }

        /* Team styles */
        .about-team {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: var(--brand-2);
          box-shadow: var(--shadow);
          text-align: center;
          color: #fff;
        }

        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--brand);
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .team-member .info h3 {
          margin: 0 0 4px;
          font-size: 1.2rem;
          color: #ffffff;
        }

        .team-member .info p.muted {
          font-size: 1rem;
          color: #ffffff;
          margin: 0 0 6px;
        }

        .team-member .info .bio {
          font-size: 1rem;
          line-height: 1.4;
          color: #ffffff;
          margin: 6px 0 10px;
        }

        .team-member .info a {
          font-size: 1rem;
          color: #000;
          font-weight: 500;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .about-team {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="lead">Midland Chemicals Ltd is a privately owned, independent UK manufacturer of chemicals established in 1991, based in Atherstone, Warwickshire, UK. Our reputation for producing high-quality products and a high level of technical support has led to us supplying to customers throughout the UK, Europe, and worldwide.</p>
          <p className="lead">Our highly knowledgeable research and development team, with a combined experience of over 70 years in the industry, is always available to discuss the formulation and specification of new products to your requirements.</p>
          <div className="about-team">
            <div className="team-member">
              <div className="avatar">SP</div>
              <div className="info">
                <h3>Sunny Pathak</h3>
                <p className="muted">Managing Director</p>
                <p className="bio">Sunny founded Midland Chemicals in 1991 and brings over 40 years of hands-on experience in the chemical industry. He partners closely with clients to tackle complex formulation and process challenges, delivering practical, custom made chemical solutions that help their business succeed.</p>
                <a href="mailto:sunny@midlandchem.com">sunny@midlandchem.com</a>
              </div>
            </div>
            <div className="team-member">
              <div className="avatar">RC</div>
              <div className="info">
                <h3>Robert Cameron</h3>
                <p className="muted">Technical Director</p>
                <p className="bio">Robert brings years of technical chemistry expertise and a practical understanding of product innovation. He works alongside customers to solve complex challenges and develops bespoke formulations that give them a competitive edge.</p>
                <a href="mailto:rob@midlandchem.com">rob@midlandchem.com</a>
              </div>
            </div>
            <div className="team-member">
              <div className="avatar">BA</div>
              <div className="info">
                <h3>Brian Aconley</h3>
                <p className="muted">Agricultural Consultant</p>
                <p className="bio">Brian Aconley is an expert agricultural chemical specialist, dedicated to helping farmers and businesses achieve optimal results. At Midland Chemicals, he collaborates closely with clients to design and develop products precisely tailored to their specific requirements.</p>
                <a href="mailto:brian@ilex-envirosciences.com">brian@ilex-envirosciences.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
