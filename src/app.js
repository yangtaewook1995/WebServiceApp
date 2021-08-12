const express = require("express");

const app = express();

// server open port : 3000
app.listen(3000, function() {
    console.log("start! server on port 3000");
});

app.get('/', function(req,res) {
    res.send("<h1>Test</h1>");
});

app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
});

app.use(express.static('src/public'));
