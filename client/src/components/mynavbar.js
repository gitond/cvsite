import "./mynavbar.css";

export default function MyNavBar({ navBarButtons }) {
	return (
		<div className="navbar-container">
			{navBarButtons.map(navBarButton => (
				<button
					key={navBarButton.id}
					className="navbar-button"
					onClick={navBarButton.action}
				>
					{navBarButton.text}
				</button>
			))}
		</div>
	);
}
