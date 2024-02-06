const express = require("express");

const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router");
const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `${req.method} request on ${req.baseUrl}${req.url} in ${delta} ms`
  );
});

app.use("/public", express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello guys , This is my first express project!!");
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
