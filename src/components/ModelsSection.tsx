interface ModelsSectionProps {
  onImageClick: (src: string, alt: string) => void;
}

const ModelsSection = ({ onImageClick }: ModelsSectionProps) => {
  const ClickableImage = ({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) => (
    <div>
      <div className={`img-wrap will-reveal ${className}`} onClick={() => onImageClick(src, alt)}>
        <img src={src} alt={alt} />
      </div>
      {caption && <p className="img-caption" dangerouslySetInnerHTML={{ __html: caption }} />}
    </div>
  );

  const genres = ["action", "adventure", "casual", "indie", "multiplayer", "racing", "rpg", "simulation", "sports", "strategy"];

  return (
    <section id="models" className="py-24">
      <div className="section-container">
        <div className="fade-up">
          <div className="section-tag">Models Implemented</div>
          <h2 className="font-heading text-hi font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Three models. One question.
          </h2>
          <p className="text-body text-[1rem] max-w-[600px] leading-relaxed mb-12">
            We combined unsupervised language mining, vision-language alignment, and gradient-boosted image feature modeling to cover the full range of game signals.
          </p>
        </div>

        {/* ==================== MODEL 01: ARM ==================== */}
        <div className="mb-20">
          <div className="fade-up flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-primary/80 border border-primary/25 bg-primary/5 px-2.5 py-1 rounded-md">Model 01</span>
            <span className="font-heading text-hi font-bold" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>Association Rule Mining</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="fade-left">
              <h3 className="font-heading text-hi text-[1.15rem] font-bold mb-3">Finding patterns in what players write</h3>
              <p className="text-body text-[0.9rem] leading-relaxed mb-3">
                ARM looks at which words appear together in reviews, grouped by genre and sentiment. Using Apriori, it surfaces which concepts cluster together and how strongly.
              </p>
              <p className="text-body text-[0.9rem] leading-relaxed mb-3">
                Games were labeled positive or negative based on overall review ratio. Reviews were stripped to meaningful tokens — removing punctuation, numbers, stopwords, duplicates, and non-latin characters.
              </p>
              <p className="text-body text-[0.9rem] leading-relaxed">
                Positive reviews: support 0.01, confidence 0.4. Negative reviews: support 0.02, confidence 0.55.
              </p>
            </div>
            <div className="fade-right">
              <div className="section-tag">Before & After Cleaning</div>
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/raw-arm-text.png" alt="Raw ARM text" className="mb-2 max-h-[160px] overflow-hidden" />
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/transaction-data-for-arm.png" alt="Clean transaction data" caption="Messy review text (top) → tokenized basket format (bottom), ready for Apriori." />
            </div>
          </div>

          {/* Positive ARM plots */}
          <div className="fade-up mb-6">
            <div className="section-tag">Positive Review Association Plots</div>
            <div className="arm-grid">
              {genres.map((g) => (
                <div key={`liked-${g}`} className="arm-tile will-reveal" onClick={() => onImageClick(`https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/liked-${g}.png`, g)}>
                  <img src={`https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/liked-${g}.png`} alt={g} />
                  <div className="arm-label">{g}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8 fade-up">
            <div className="info-card border-l-2 border-l-emerald-400/50">
              <div className="text-xl mb-2">✅</div>
              <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1">Immersion drives positive reviews</h4>
              <p className="text-body text-[0.83rem] leading-relaxed">Across genres, well-received games let players stay focused on story and experience. Art, music, and mechanics work together seamlessly.</p>
            </div>
            <div className="info-card border-l-2 border-l-emerald-400/50">
              <div className="text-xl mb-2">📖</div>
              <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1">Story is the hub</h4>
              <p className="text-body text-[0.83rem] leading-relaxed">Story emerges as a central cluster node across multiple genres. It doesn't replace other elements — it's what everything else is built around.</p>
            </div>
          </div>

          {/* Negative ARM plots */}
          <div className="fade-up mb-6">
            <div className="section-tag">Negative Review Association Plots</div>
            <div className="arm-grid">
              {genres.map((g) => (
                <div key={`disliked-${g}`} className="arm-tile will-reveal" onClick={() => onImageClick(`https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/disliked-${g}.png`, g)}>
                  <img src={`https://www.audiovascular.com/assets/data-mining-assets/visualisations/arm/disliked-${g}.png`} alt={g} />
                  <div className="arm-label">{g}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card border-l-2 border-l-red-400/50 fade-up">
            <div className="text-xl mb-2">⚡</div>
            <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1">Negative reviews scatter. Positive ones cluster.</h4>
            <p className="text-body text-[0.83rem] leading-relaxed">Negative reviews don't converge around a single theme. The exception is multiplayer games, where "can't" dominates — pointing to restricted player freedom as the main failure driver.</p>
          </div>
        </div>

        {/* ==================== MODEL 02: CLIP ==================== */}
        <div className="mb-20 pt-10" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          <div className="fade-up flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-primary/80 border border-primary/25 bg-primary/5 px-2.5 py-1 rounded-md">Model 02</span>
            <span className="font-heading text-hi font-bold" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>CLIP — Vision-Language Alignment</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="fade-left">
              <h3 className="font-heading text-hi text-[1.15rem] font-bold mb-3">Connecting game images to words</h3>
              <p className="text-body text-[0.9rem] leading-relaxed mb-3">
                CLIP maps images and text into a shared embedding space. We used it to automatically tag game screenshots with genre and context labels. The architecture runs a ViT or ResNet for images and a Transformer for text, comparing outputs using cosine similarity.
              </p>
              <p className="text-body text-[0.9rem] leading-relaxed">
                For novel pairs, a score above 0.2 is considered meaningful alignment. This connects visual content to semantic labels at scale, with no manual annotation.
              </p>
            </div>
            <div className="fade-right">
              <div className="section-tag">Before & After Cleaning</div>
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/clip-messy-data.png" alt="Messy CLIP data" className="mb-2 max-h-[160px] overflow-hidden" />
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/clip-clean-data.png" alt="Clean CLIP data" caption="Descriptions before and after cleaning. Removed irrelevant tokens and 404-error image URLs." />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="fade-left">
              <div className="section-tag">Similarity Score Matrix</div>
              <ClickableImage
                src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/clip-similarity.png"
                alt="CLIP similarity scores"
                caption="Cosine similarity between text and image embeddings. Diagonal dominance confirms correct matching."
              />
            </div>
            <div className="fade-right">
              <div className="section-tag">Zero-Shot Output</div>
              <ClickableImage
                src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/clip-output.png"
                alt="CLIP output examples"
                caption="CLIP labeled all 10 test images correctly with no fine-tuning — 'space combat simulation,' 'stealth game,' 'visual novel' from screenshots alone."
              />
            </div>
          </div>

          <div className="info-card border-l-2 border-l-cyan-400/50 fade-up">
            <div className="text-xl mb-2">🔍</div>
            <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1">What this opens up for developers</h4>
            <p className="text-body text-[0.83rem] leading-relaxed">Drop a screenshot and get genre tags automatically. Use those tags to find comparable successful games, gather inspiration faster, and feed better signals into recommendation systems.</p>
          </div>
        </div>

        {/* ==================== MODEL 03: Gradient Boosting ==================== */}
        <div className="pt-10" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          <div className="fade-up flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-primary/80 border border-primary/25 bg-primary/5 px-2.5 py-1 rounded-md">Model 03</span>
            <span className="font-heading text-hi font-bold" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>Gradient Boosting — Image Features</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="fade-left">
              <h3 className="font-heading text-hi text-[1.15rem] font-bold mb-3">Do visual properties predict success?</h3>
              <p className="text-body text-[0.9rem] leading-relaxed mb-3">
                We used Gradient Boosting to predict game success (positive review ratio) from per-image visual features: brightness, saturation, hue, and contrast extracted from screenshots.
              </p>
              <p className="text-body text-[0.9rem] leading-relaxed">
                Mean Squared Error of 130 confirms the model learns the relationship effectively without overfitting.
              </p>
            </div>
            <div className="fade-right">
              <div className="section-tag">Dataset Creation</div>
              <ClickableImage
                src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/create-dataset.png"
                alt="Dataset creation"
                caption="Each row is a game with extracted visual metrics and review ratio as the prediction target."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="fade-left">
              <div className="section-tag">Model Performance (MSE)</div>
              <ClickableImage
                src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-mse.png"
                alt="MSE score"
                caption="MSE of 130. The model learns image-to-review relationships without overfitting."
              />
            </div>
            <div className="fade-right">
              <div className="section-tag">Predicted Success Scores</div>
              <ClickableImage
                src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-output.png"
                alt="GB output"
                caption="Higher predicted success for visually dynamic screenshots, lower for dull or confusing imagery."
              />
            </div>
          </div>

          <div className="fade-up mb-8">
            <div className="section-tag">Feature Analysis</div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-heatmap.png" alt="Correlation heatmap" caption="<strong>Correlation heatmap.</strong> Most features are independent. Contrast and brightness share moderate correlation." />
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-saturation.png" alt="Saturation vs success" caption="<strong>Saturation vs. success.</strong> More saturated images predict lower review ratios — garish visuals signal lower quality." />
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-contrast.png" alt="Contrast vs success" caption="<strong>Contrast vs. success.</strong> Sweet spot between 50–80. Too low = flat, too high = harsh." />
              <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-hue.png" alt="Hue vs success" caption="<strong>Hue vs. success.</strong> Color choice alone doesn't predict success. Slight edge for greens and yellows." />
            </div>
            <ClickableImage src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/clip/gb-brightness.png" alt="Brightness vs success" caption="<strong>Brightness vs. success.</strong> No clear correlation. Brightness is a free variable for developers." />
          </div>

          <div className="info-card border-l-2 border-l-amber-400/50 fade-up">
            <div className="text-xl mb-2">🎨</div>
            <h4 className="font-heading text-hi text-[0.92rem] font-bold mb-1">Practical takeaways for art direction</h4>
            <p className="text-body text-[0.83rem] leading-relaxed">Target contrast between 50–80 in marketing screenshots. Pull back on saturation. Clean, controlled palettes outperform maximalist ones. These are data-backed guidelines, not aesthetic opinion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
