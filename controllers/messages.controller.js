const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "nekoneko2.png"));
}

function postMessages(req, res) {
  res.send("Hello guys , This is my first express project!!");
}

module.exports = { getMessages, postMessages };
