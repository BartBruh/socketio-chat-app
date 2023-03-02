const port = process.env.PORT || 3001;

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    })
})

server.listen(port, () => {
    console.log("Server is running on port " + port);
})