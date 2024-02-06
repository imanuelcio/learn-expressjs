const path = require("path");

function getMessages(req, res) {
  // res.sendFile(path.join(__dirname, "..", "public", "images", "nekoneko2.png"));
  res.render("messages", {
    title: "Messages title",
    friend: "RAUULLLLL ",
  });
}

function postMessages(req, res) {
  res.send("Hello guys , This is my first express project!!");
}

module.exports = { getMessages, postMessages };
