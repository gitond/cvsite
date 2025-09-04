// Libraries
const cors = require("cors");
const express = require("express");
const fs = require('fs');

// Loading page contents
const home = require("./page_contents/home.json");
const cv = fs.readFileSync("./page_contents/cv_english_tech.base64").toString();

// Server setup
const app = express();
app.use(cors()); // Allow backend and frontend to run on different ports; Look at this again when doing deployment
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

app.get("/cv", (req,res) => {
	console.log('Connection to "/cv"');
	res.send(cv);
});

