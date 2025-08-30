import "./imagebuttongrid.css";

import ImageButton from "./imagebutton.js";

export default function ImageButtonGrid({ columns }) {
	return(
		<div className="columnContainer">
			{columns.map(column => (
				<div className="column">
					{column.map(item => (
						<ImageButton buttonData={item}/>
					))}
				</div>
			))}
		</div>
	);
}
