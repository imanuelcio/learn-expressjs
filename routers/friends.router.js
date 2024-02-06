const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(`ip Addres ${req.ip}`);
  next();
});

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriendsById);

module.exports = friendsRouter;
