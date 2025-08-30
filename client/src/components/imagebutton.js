import "./imagebutton.css";

export default function ImageButton({ buttonData }){
	return (
		<div className="imgBtn">
			<img src={buttonData.src} alt={buttonData.alt} className="btnIcon" />
		</div>
	);
}
