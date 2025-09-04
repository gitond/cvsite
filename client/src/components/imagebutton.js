import "./imagebutton.css";

export default function ImageButton({ buttonData }){
	return (
		<div className="imgBtn" onClick={buttonData.action}>
			<img src={buttonData.src} alt={buttonData.alt} className="btnIcon" />
		</div>
	);
}
