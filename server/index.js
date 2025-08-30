// Server setup
const express = require("express");
const app = express();

// Loading page contents
const home = require("./page_contents/home.json");

const PORT = 8080;
app.listen(PORT, () => {
	console.log("server listening on port", PORT)
});

// Routes
app.get("/", (req, res) => {
	res.send("Hello from our server!")
});

app.get("/home", (req,res) => {
	console.log('Connection to "/home"');
	res.send(home);
});
