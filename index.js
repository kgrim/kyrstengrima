const express = require("express");
const app = express();

const server = require("http").Server(app);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, () => console.log("listening"));
