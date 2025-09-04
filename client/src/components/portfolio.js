import "./portfolio.css";

export default function Portfolio({ portfolioContents }) {
        return(
                <div className="portfolio">
                        <h1>{portfolioContents.title}</h1>
			{portfolioContents.entries.map(entry => (
				<p className="entry">{entry.text}</p>
			))}
                </div>
        );
}
