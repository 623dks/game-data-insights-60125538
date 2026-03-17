const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-[56px] flex flex-col justify-end relative overflow-hidden">
      {/* Background glows */}
      <div className="fixed pointer-events-none z-0 -top-[200px] -left-[300px] w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(ellipse, hsla(217,91%,60%,0.04) 0%, transparent 70%)' }} />
      <div className="fixed pointer-events-none z-0 -bottom-[300px] -right-[200px] w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(ellipse, hsla(187,85%,68%,0.03) 0%, transparent 70%)' }} />

      <div className="section-container py-16 relative z-10">
        <div className="fade-up inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-primary border border-primary/25 bg-primary/5 px-3 py-1.5 rounded-full mb-6">
          🎮 CU Boulder · CSCI 4502 · Data Mining
        </div>

        <h1 className="fade-up font-heading font-bold text-hi mb-5" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Surviving the<br />
          <span className="text-primary">Videogame</span><br />
          Industry
        </h1>

        <p className="fade-up text-body text-[1.05rem] max-w-[520px] leading-relaxed mb-8">
          What do 4 million Steam reviews, 266,000 screenshots, and three ML models tell us about why some games win and others disappear? We went and found out.
        </p>

        <div className="fade-up flex gap-3 flex-wrap mb-10">
          <a href="#introduction" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-[0.82rem] font-bold px-5 py-2.5 rounded-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-primary/20">
            Read the Research
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
          {[
            { num: "23.7K", label: "Steam apps analyzed" },
            { num: "4.1M", label: "Reviews processed" },
            { num: "266K", label: "Game screenshots" },
            { num: "3", label: "ML models deployed" },
          ].map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-hi leading-none mb-1">
                {stat.num.replace(/[A-Z]/g, '')}
                <span className="text-primary">{stat.num.match(/[A-Z]+/)?.[0] || ''}</span>
              </div>
              <div className="text-[0.7rem] font-medium text-muted-custom">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Poster */}
      <div className="section-container pb-0 fade-up">
        <div className="img-wrap rounded-b-none border-b-0">
          <img
            src="https://www.audiovascular.com/assets/data-mining-assets/data-minining-poster.jpeg"
            alt="Project research poster"
            className="parallax-target"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
