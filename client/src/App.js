// Libraries
import { useState, useEffect } from "react";
import axios from "axios";

// Styles
import './App.css';

// React Components
import MyNavBar from "./components/mynavbar.js";
import PictureCard from "./components/picturecard.js";
import TextWithTitle from "./components/textwithtitle.js";
import ImageButtonGrid from "./components/imagebuttongrid.js";

// Resources
import blogSvg from "./custom_icons/blog_clean.svg";
import cvSvg from "./custom_icons/cv_clean.svg";
import gitSvg from "./custom_icons/github-mark/github-mark-white.svg";
import linkedInSvg from "./custom_icons/linkedin.svg";



// App
function App() {
	const BACKEND_PORT = 8080;

	// Stuff that should be defined in frontend (page specific controls etc)
	const navBarButtons = [
		{id: 0, text: "Home", action(){console.log("Home");},},
		{id: 1, text: "Projects", action(){console.log("Projects");},},
		{id: 2, text: "Blog", action(){console.log("Blog");},},
		{id: 3, text: "Contact Me", action(){console.log("Contact Me");},}
	];

	const contactButtons = [
		[
			{src: cvSvg, alt: "CV", action(){
				axios.get("http://localhost:" + BACKEND_PORT + "/cv").then((data) => {
					//console.log(data.data);
					window.open("data:application/pdf;base64," + data.data);
				});
			}},
			{src: linkedInSvg, alt: "LI", action(){window.open("https://www.linkedin.com/in/botond-ortutay/", '_blank').focus();}}
		],[
			{src: gitSvg, alt: "Git", action(){window.open("https://github.com/gitond", '_blank').focus();}},
			{src: blogSvg, alt: "BL", action(){console.log("BL");}}
		]
	];

	// Page content default values
	// Picture card contents
	const [pCContents, setPCContents] = useState({
		"title": "title",
		"textHighlighted": "textHighlighted",
		"text": "text",
		"image": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
	});
	// Introduction contents
	const [introContents, setIntroContents] = useState({
		"title": "title",
		"text": "text"
	});


	// Fetching data from backend + page content updates; Only runs on first render
	useEffect (() => {
		axios.get("http://localhost:" + BACKEND_PORT + "/home").then((data) => {
			//console.log(data.data);
			setPCContents(data.data.picturecard);
			setIntroContents(data.data.intro);
		});
	}, []);

	// React app assembled from components
	return (
		<div className="App">
			<header className="App-header">
				<MyNavBar navBarButtons={navBarButtons}/>
			</header>
			<main className="App-body">
				<PictureCard pCContents={pCContents}/>
				<div className="inlineContainer">
					<TextWithTitle tWTContents={introContents}/>
					<ImageButtonGrid columns={contactButtons}/>
				</div>
			</main>
		</div>
	);
}

export default App;
