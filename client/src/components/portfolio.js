import "./portfolio.css";

import PortfolioEntry from "./portfolioentry.js";

export default function Portfolio({ portfolioContents }) {
        return(
                <div className="portfolio">
                        <h1>{portfolioContents.title}</h1>
			{portfolioContents.entries.map(entry => (
				<PortfolioEntry entryData={entry} />
			))}
                </div>
        );
}
