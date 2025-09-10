import "./portfolio.css";

import {default as RightEntry} from "./portfolioentryimageonright.js";
import {default as LeftEntry} from "./portfolioentryimageonleft.js";

export default function Portfolio({ portfolioContents }) {
        return(
                <div className="portfolio">
                        <h1>{portfolioContents.title}</h1>
			{portfolioContents.entries.map(entry => (
				entry.index % 2 === 0 ?
					<RightEntry entryData={entry} /> :
					<LeftEntry entryData={entry} />
			))}
                </div>
        );
}
