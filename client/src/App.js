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
import Portfolio from "./components/portfolio.js";

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
	// Portfolio contents
	const [portfolioContents, setPortfolioContents] = useState({
                "title": "title",
                "entries": [
                        {"title": "1", "text": "one one one one one one one one one one one one", "image": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAmklEQVR4nGNgGOyAc/5KJlxyjIv+/TPEJan9798HWRgH3YhQBoZHj3HpfP/vVxQuOYF//54ieGjGNjEwXMalkeHbv3+eeCTfseAy1oCVYeofXBp3/f8lgUtO/su/azhtnPLvXwJOycv//uGU0//5bx1OySP//hngkuN5+u8tG4oIkj/VJBmO/8Il6cvAMBunlSIvX3DjlKQmAACHtTHZmy2LVAAAAABJRU5ErkJggg==", "imageAlt": "mnist-one", "linkText": "test link to external site", "linkTo": "https://www.youtube.com/watch?v=WM8bTdBs-cw", "index": 0},
                        {"title": "2", "text": "two two two two two two two two two two two two", "image": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA8ElEQVR4nGNgoD9ghDGmGDHsePhiJzY17HP+/fv3/9+fE25YJGv/QcFtE0zJ6f/W1BaJSB/49e8cM4akXiVEbMe/f9k43Wf7498LOZyyzf/+2cE5TGiSmxgYdHFKMjAw+DLjknz1hkGFDcZhgdICUgx/bjEwMIiJMPR/R9PgeePfvx+V+mgOgoJf//79+/fvx+qEn/9+mqNL3v/37+kOSABehYgY+cMlE3/92ySh8Pjfv3//fj3d/fTp06dfvyG0Ot759+/o139w8GCxIVJ8+nUrsDL8Ot96g4Ehie3s6Q9vGJAkGRgM9BgO38cMkyEDAJC/dbTfCO84AAAAAElFTkSuQmCC", "imageAlt": "mnist-two", "linkText": "test link to internal site (unimplemented)", "linkTo": "/", "index": 1},
                        {"title": "3", "text": "three three three three three three three three three three three three", "image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAcABwBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APn+u78MfCHxd4ptoLu1tIrWynUtHc3cmxWGOCAAWwexxU/i34N+J/B+iPq95JYXVrGwEptJHYxg8BiGVeM4HGetee0V7L4a+GHxG1zRdMD+IHsNGdRJFGb128tCMgrGvHOemR17Vr/F3V08I+A7HwBDdX13dyBJZru4BxJFuY43E8ncBxyABivA66bwF4STxr4oi0iTUYrBWQuZJBktggbVGRljnp7Gu2t/gl4pguIv7a1az07S4v8AWTtd52Rg5O0dM8n2rG+LviLRtc1vTLbQ7ma7tdLslsvtEnPmFSeQT97jHPevPKcjvG6vGzK6nKspwQfUVa1DV9S1eUS6lqN3eyKMBrmZpCB9WJqnRX//2Q==", "imageAlt": "mnist-three", "linkText": "invalid test link", "linkTo": "three", "index": 2},
                        {"title": "4", "text": "four four four four four four four four four four four four", "image": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAzElEQVR4nGNgGPQg5F8qjMmEIRn1XwinRvnvp2QxdTIyMjAwMDDksd17jCnpeN6CgYGBQZfhAhbzLP+WMzAwyPz8IAkXQuh8ycDAwMAQyHr1ORZJYQYGBgYGKYYDDFgkAxgZGBikMxnnISQZYQz2J0KXjwvpqV00+YfpnsS/f//++/v3bxiSGAuMYfp97rN3b1cz7MDiEQgI+bcGmYsatlH/T+PUyPD2jwVOOaOP23Br3P3vZyZOO///v7qGARd4/EkBt7FvbuOWoyIAAPBxN9oBRuu9AAAAAElFTkSuQmCC", "imageAlt": "mnist-four", "linkText": "test link to external site", "linkTo": "https://four.com/", "index": 3}
                ]
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
				<Portfolio portfolioContents={portfolioContents}/>
			</main>
		</div>
	);
}

export default App;
