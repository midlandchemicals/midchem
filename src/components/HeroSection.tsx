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
      `}</style>
      <header id="top" className="hero container" style={{ position: 'relative', padding: '64px 0 56px', overflow: 'hidden', width: 'min(1200px, 92vw)', margin: '0 auto' }}>
        <div className="glow" aria-hidden="true" style={{ position: 'absolute', inset: '-10%', background: 'radial-gradient(800px 500px at 20% 10%, rgba(102,246,193,.12), transparent 60%), radial-gradient(900px 600px at 85% 20%, rgba(109,225,255,.12), transparent 55%)', filter: 'blur(20px)', pointerEvents: 'none' }}></div>
        <div className="particles" aria-hidden="true"></div>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '42px', alignItems: 'center' }}>
          <div>
            <h1 className="title reveal in" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(36px, 5.6vw, 64px)', lineHeight: '1.03', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-.02em' }}>
              High Performance Chemical Solutions 
              <span style={{ background: 'linear-gradient(180deg, #25a25a, #177b55)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}> 
                <br />Manufactured in the UK
              </span>.
            </h1>
            <p className="subtitle reveal in" style={{ fontSize: 'clamp(16px,2.2vw,19px)', color: 'var(--text-dim)', maxWidth: '52ch', transitionDelay: '.1s' }}>Midland Chemicals Ltd specialises in tailored formulations and products that meet the chemical needs of the agriculture sector and a wide range of sectors including automotive, construction, and cleaning industries.</p>
            <div className="badges reveal in" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '22px 0 28px', transitionDelay: '.2s' }}>
              <span className="chip" title="UK Manufacturer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '999px', background: 'linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))', border: '1px solid rgba(255,255,255,.08)', fontWeight: '600', color: '#3a7ca5', fontSize: '14px' }}>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: '.9', width: '18px', height: '18px' }}><path d="M12 22C12 12 7 7 2 7c0 10 5 15 10 15z"/><path d="M12 22c0-10 5-15 10-15 0 10-5 15-10 15z"/></svg>
                UK Manufacturer
              </span>
              <span className="chip" title="Since 1991" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '999px', background: 'linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))', border: '1px solid rgba(255,255,255,.08)', fontWeight: '600', color: '#3a7ca5', fontSize: '14px' }}>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: '.9', width: '18px', height: '18px' }}><path d="M12 2s7 4 7 10a7 7 0 0 1-14 0C5 6 12 2 12 2z"/></svg>
                Since 1991
              </span>          
              <span className="chip" title="Domestic & International Supply" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 10px', borderRadius: '999px', background: 'linear-gradient(180deg,rgba(45, 103, 105,.06),rgba(255,255,255,.02))', border: '1px solid rgba(255,255,255,.08)', fontWeight: '600', color: '#3a7ca5', fontSize: '14px' }}>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: '.9', width: '18px', height: '18px' }}><path d="M20 6L9 17l-5-5"/></svg>
                Domestic & International Supply
              </span>
            </div>
            <div className="marquee" aria-hidden="true" style={{ marginTop: '34px', whiteSpace: 'nowrap', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0, #fff 15%, #fff 85%, transparent 100%)' }}>
              <span style={{ display: 'inline-block', paddingRight: '42px', opacity: '.8', animation: 'scroll 15s linear infinite', color: '#3a7ca5' }}>Paint Strippers • Aluminium Cleaners • Concentrated Foliar Nutrients • Biostimulants • Seed Treatments •  Brick Acid • Algae Remover • </span>
              <span style={{ display: 'inline-block', paddingRight: '42px', opacity: '.8', animation: 'scroll 15s linear infinite', color: '#3a7ca5' }}>Paint Strippers • Aluminium Cleaners • Concentrated Foliar Nutrients • Biostimulants • Seed Treatments •  Brick Acid • Algae Remover •</span>
            </div>
          </div>
          <div className="hero-card reveal in" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.06),rgba(45, 103, 105,.02))', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '22px', position: 'relative', overflow: 'hidden', transitionDelay: '.35s' }}>
            
          </div>
        </div>
      </header>
    </>
  );
}
