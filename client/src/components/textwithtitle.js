import "./textwithtitle.css";

export default function TextWithTitle({ tWTContents }) {
	return(
		<div className="textWithTitle">
			<h1>{tWTContents.title}</h1>
			<p className="textWithBackground">{tWTContents.text}</p>
		</div>
	);
}
