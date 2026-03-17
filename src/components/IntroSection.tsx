const IntroSection = () => {
  return (
    <section id="introduction" className="py-24 relative">
      <div className="section-container">
        <div className="fade-up">
          <div className="section-tag">Introduction</div>
          <h2 className="font-heading text-hi font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            The problem with getting advice
          </h2>
          <p className="text-body text-[1rem] max-w-[560px] leading-relaxed mb-10">
            Steam hosts over 200,000 games. Engines like Unity and Godot mean almost anyone can ship a title. That accessibility hasn't come with a roadmap for success.
          </p>
        </div>

        {/* Split: text + cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="fade-left">
            <h3 className="font-heading text-hi text-[1.25rem] font-bold mb-3">Lots of resources. Not much depth.</h3>
            <p className="text-body text-[0.92rem] leading-relaxed mb-3">
              Sites like Steamlytics, Gamalytic, and VGInsights give you high-level sentiment for individual games. Word clouds. Aggregated pros and cons.
            </p>
            <p className="text-body text-[0.92rem] leading-relaxed mb-3">
              The problem: you'd need to manually dig through 10 to 12 games just to spot a pattern. Key information stays buried, some behind paywalls.
            </p>
            <p className="text-body text-[0.92rem] leading-relaxed">
              So we asked a different question: <strong className="text-hi">what does the data actually say?</strong>
            </p>
          </div>
          <div className="fade-right flex flex-col gap-3">
            {[
              { icon: "⚠️", title: "The information gap", desc: "Current tools show what players thought about one game. They don't show patterns across thousands, or what separates successful releases from failed ones.", color: "border-l-amber-400/50" },
              { icon: "💡", title: "The data-first approach", desc: "By analyzing games at scale, patterns emerge: what successful games share, what struggling games have in common, and what that means for development decisions.", color: "border-l-primary/50" },
              { icon: "🎯", title: "Who this helps", desc: "Indie developers, art directors, marketing teams, and platforms like Steam itself.", color: "border-l-emerald-400/50" },
            ].map((card) => (
              <div key={card.title} className={`info-card border-l-2 ${card.color}`}>
                <div className="text-xl mb-2">{card.icon}</div>
                <h4 className="font-heading text-hi text-[0.95rem] font-bold mb-1.5">{card.title}</h4>
                <p className="text-body text-[0.85rem] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Questions */}
        <div className="fade-up">
          <div className="section-tag">Research Questions</div>
          <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
            <div className="px-5 py-2" style={{ borderRight: '1px solid hsl(var(--border-subtle))' }}>
              {[
                "Do indie games perform differently from AAA titles in terms of user feedback?",
                "Can promotional materials like descriptions and screenshots predict success?",
                "How do game trailers affect user reviews and ratings?",
                "Do certain genres consistently score better in user ratings?",
                "How do regional preferences shape the success of specific genres?",
              ].map((q, i) => (
                <div key={i} className="q-item">
                  <span className="font-heading text-[0.68rem] font-bold text-primary min-w-[20px] pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-body text-[0.88rem] leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-2">
              {[
                "Is trailer length correlated with user ratings?",
                "How does social media activity influence a game's success?",
                "How do reviews change over time after a game's release?",
                "Are there musical genres commonly found in highly-rated games?",
                "What compositional elements in soundtracks correlate with positive reviews?",
              ].map((q, i) => (
                <div key={i} className="q-item">
                  <span className="font-heading text-[0.68rem] font-bold text-primary min-w-[20px] pt-0.5">{String(i + 6).padStart(2, '0')}</span>
                  <span className="text-body text-[0.88rem] leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
