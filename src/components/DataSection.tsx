interface DataSectionProps {
  onImageClick: (src: string, alt: string) => void;
}

const DataSection = ({ onImageClick }: DataSectionProps) => {
  const ClickableImage = ({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) => (
    <div>
      <div className={`img-wrap will-reveal ${className}`} onClick={() => onImageClick(src, alt)}>
        <img src={src} alt={alt} />
      </div>
      {caption && <p className="img-caption">{caption}</p>}
    </div>
  );

  return (
    <section id="data" className="py-24">
      <div className="section-container">
        <div className="fade-up">
          <div className="section-tag">Data Collection & Exploration</div>
          <h2 className="font-heading text-hi font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Building the dataset
          </h2>
          <p className="text-body text-[1rem] max-w-[560px] leading-relaxed mb-12">
            All data came directly from Steam's public API. No third-party datasets, no scraping workarounds.
          </p>
        </div>

        {/* API Endpoints */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="fade-left">
            <h3 className="font-heading text-hi text-[1.25rem] font-bold mb-3">Three endpoints, millions of records</h3>
            <p className="text-body text-[0.92rem] leading-relaxed mb-3">
              The pipeline fetches all app IDs, then loops through each to pull full metadata and paginated reviews. All JSON responses get cleaned into CSV files with a consistent schema.
            </p>
          </div>
          <div className="fade-right">
            <div className="code-block">
              <div style={{ color: '#475569' }}>// Three API endpoints powering the dataset</div><br />
              <div><span style={{ color: '#6ee7b7' }}>GET</span> api.steampowered.com/ISteamApps/GetAppList/v2/</div>
              <div style={{ color: '#475569' }}>  All Steam app IDs</div><br />
              <div><span style={{ color: '#6ee7b7' }}>GET</span> store.steampowered.com/api/appdetails?appids=&lt;ID&gt;</div>
              <div style={{ color: '#475569' }}>  Full metadata for a single app</div><br />
              <div><span style={{ color: '#6ee7b7' }}>GET</span> store.steampowered.com/appreviews/&lt;ID&gt;?json=1</div>
              <div style={{ color: '#475569' }}>  Paginated reviews per app</div>
            </div>
          </div>
        </div>

        {/* Raw API + CSV side by side — compact */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="fade-left">
            <div className="section-tag">Raw API Response</div>
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/json-screenshot.png"
              alt="JSON API response"
              caption="Example JSON from App Details endpoint. Click to zoom."
              className="max-h-[240px] overflow-hidden"
            />
          </div>
          <div className="fade-right">
            <div className="section-tag">CSV Format</div>
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/info-file.png"
              alt="CSV data format"
              caption="Structured CSV format. Broken descriptions set to empty string."
              className="max-h-[240px] overflow-hidden"
            />
          </div>
        </div>

        {/* Database Schema — full width */}
        <div className="fade-up mb-16">
          <div className="section-tag">Database Schema</div>
          <ClickableImage
            src="https://www.audiovascular.com/assets/data-mining-assets/data-mining-database-schema.png"
            alt="Database schema"
            caption="Relational schema organizing apps, reviews, publishers, developers, and media into linked tables."
          />
        </div>

        {/* Dataset Size */}
        <div className="fade-up mb-16">
          <div className="section-tag">Dataset Size</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
            {[
              { num: "23,780", label: "Total apps with details" },
              { num: "4,189,520", label: "App reviews (text)" },
              { num: "266,688", label: "App images (URLs)" },
              { num: "25,584", label: "App trailers (URLs)" },
              { num: "14,687", label: "Unique developers" },
              { num: "12,866", label: "Unique publishers" },
            ].map((item) => (
              <div key={item.label} className="stat-box">
                <div className="font-heading text-[1.5rem] font-bold text-hi leading-none mb-1">{item.num}</div>
                <div className="text-[0.7rem] font-medium text-muted-custom">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Cleaning */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="fade-left">
            <div className="section-tag">Data Cleaning</div>
            <h3 className="font-heading text-hi text-[1.25rem] font-bold mb-3">Getting reviews into shape</h3>
            <p className="text-body text-[0.92rem] leading-relaxed">
              Reviews and descriptions were transformed into transaction format — each row a document, each column a word token. This structure is required input for Association Rule Mining.
            </p>
          </div>
          <div className="fade-right">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/review-transaction-format.png"
              alt="Transaction format data"
              caption="Reviews converted to transaction (basket) format for Apriori mining."
            />
          </div>
        </div>

        {/* Exploratory Visualizations */}
        <div className="fade-up mb-8">
          <div className="section-tag">Exploratory Visualizations</div>
          <h2 className="font-heading text-hi font-bold mb-8" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            What the data shows before modeling
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="fade-left">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Bottom%20developers/Bottom%20devs.png"
              alt="Most negatively reviewed developers"
              caption="Top 10 most negatively reviewed developers. Rare Ltd and DICE lead in negatives, but carry comparable positive counts."
            />
          </div>
          <div className="fade-right">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Bottom%20Publishers/Bottom%20pubs.png"
              alt="Most negatively reviewed publishers"
              caption="Top 10 most negatively reviewed publishers. EA leads in negatives but nearly matches in positives."
            />
          </div>
        </div>

        <div className="fade-up mb-10">
          <ClickableImage
            src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Bubbleplot/Bubbleplot%20-%20price%20vs%20review%20sentiment.png"
            alt="Price vs review sentiment"
            caption="Price vs. review sentiment. Larger bubbles = more positive. Higher-priced games trend toward better sentiment."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="fade-left">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Piechart/Piechart%20-%20App%20type%20vs%20Number%20of%20games.png"
              alt="App type distribution"
              caption="Games dominate the catalog, followed by DLC and music apps."
            />
          </div>
          <div className="fade-right">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Scatterplot/Scatterplot%20-%20Price%20vs%20Reviews.png"
              alt="Price vs total reviews"
              caption="Price vs. total reviews. Red = net negative, green = net positive. No clear trend between price and review volume."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="fade-left">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Top%2010%20Devs/TOP%2010%20DEVs.png"
              alt="Top 10 developers"
              caption="Top 10 developers by positive reviews. Capcom leads in volume; BioWare holds highest positive ratio."
            />
          </div>
          <div className="fade-right">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/tableau%20graphs/Top%2010%20Publishers/Top%2010%20PUBs.png"
              alt="Top 10 publishers"
              caption="Top 10 publishers. EA leads in volume; Arc System Works captures highest positive share."
            />
          </div>
        </div>

        <div className="fade-up mb-10">
          <ClickableImage
            src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/Python%20graphs/Top%205%20genre/Top%205%20genre.jpeg"
            alt="Top 5 genres"
            caption="Top 5 genres by positive review count. Action leads comfortably. Genre choice carries real signal."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="fade-left">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/histogram-review-lengths.png"
              alt="Review length distribution"
              caption="Review length distribution. The long tail of detailed reviews is where the richest ARM signal lives."
            />
          </div>
          <div className="fade-right">
            <ClickableImage
              src="https://www.audiovascular.com/assets/data-mining-assets/visualisations/numwords-vs-gameplay-time.png"
              alt="Playtime vs review length"
              caption="Longer reviews come from players with less playtime. Highly invested players tend to say less."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
