import "./portfolioentry.css"

export default function PortfolioEntry({ entryData }){
	return(
		<div className="entryContainer">
			<h2>{entryData.title}</h2>
			<div className="inlineContainer">
				<div className="textBox">
					<p>{entryData.text}</p>
					<div className="linkContainer" onClick={() => {
						if (entryData.linkTo.startsWith("http")) {
							window.open(entryData.linkTo, "_blank");
						} else if (entryData.linkTo.startsWith("/")) {
							alert("Unimplemented feature: Internal link");
						} else {
							alert("Clicked on invalid link!");
						}
					}}>
						<p>{entryData.linkText}</p>
					</div>
				</div>
				<img src={`data:image/jpeg;base64,${entryData.image}`} alt={entryData.imageAlt} />
			</div>
		</div>
	);
}
