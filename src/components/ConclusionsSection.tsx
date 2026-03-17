const ConclusionsSection = () => {
  return (
    <section id="conclusions" className="py-24">
      <div className="section-container">
        <div className="fade-up">
          <div className="section-tag">Conclusions</div>
          <h2 className="font-heading text-hi font-bold mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            What we found
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12 fade-up">
          {[
            { icon: "📖", title: "Story is the spine", desc: "Across genres, story emerged as the central cluster in positive reviews. A weak story undermines everything built on top of it." },
            { icon: "🎵", title: "Good craft disappears", desc: "In well-received games, music, visuals, and mechanics support the experience rather than competing for attention." },
            { icon: "🎮", title: "Restrictions kill engagement", desc: "In multiplayer games, restricted player freedom showed up clearly as a failure driver. Players feel when they're boxed in." },
          ].map((card) => (
            <div key={card.title} className="info-card border-l-2 border-l-primary/50">
              <div className="text-xl mb-2">{card.icon}</div>
              <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1.5">{card.title}</h4>
              <p className="text-body text-[0.83rem] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-narrow fade-up" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <p className="text-body text-[0.95rem] leading-relaxed mb-4">
            Video games are interactive art — narrative, visuals, music, and mechanics in a single coherent experience. Our results showed that coherence, especially a quality story, is one of the most consistently appreciated elements.
          </p>
          <p className="text-body text-[0.95rem] leading-relaxed mb-4">
            On the visual side, we showed the potential to automatically translate a screenshot into genre and context labels with no fine-tuning required. A developer can now find games with similar visual styles much faster, making competitive research dramatically more efficient.
          </p>
          <p className="text-body text-[0.95rem] leading-relaxed mb-4">
            We also found a quantifiable link between image properties and game success. Contrast (optimal range 50–80) and saturation carry real signal — concrete, data-derived guidelines.
          </p>
          <p className="text-body text-[0.95rem] leading-relaxed">
            Reviews and screenshots are just one slice. Music, sound design, lighting, and platform-specific behavior remain largely unexplored. The methodology scales, and so does the potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionsSection;
