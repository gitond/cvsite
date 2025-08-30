import "./picturecard.css";

export default function PictureCard({ pCContents }) {
	return (
		<div className="pictureCard">
			<div className="myFlexbox">
				<div>
					<h1>{pCContents.title}</h1>
					<p className="textHighlighted">{pCContents.textHighlighted}</p>
					<p>{pCContents.text}</p>
				</div>
				<img
					className="portrait"
					src={`data:image/jpeg;base64,${pCContents.image}`}
				/>
			</div>
		</div>
	);
}
