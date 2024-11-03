import express from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile("http://localhost:5173/");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
