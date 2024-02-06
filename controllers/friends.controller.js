const model = require("../models/friends.model");

function postFriend(req, res) {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({
      status: 400,
      message: "Name or Age is required",
    });
  } else {
    const newFriend = {
      id: model.length,
      name: req.body.name,
      age: req.body.age,
    };
    model.push(newFriend);
    return res.status(201).json({
      status: 201,
      message: "Success create new friend",
    });
  }
}

function getFriends(req, res) {
  return res.status(200).json({
    status: 200,
    message: "Success get all friends",
    data: model,
  });
}

function getFriendsById(req, res) {
  const id = req.params.id;
  const friend = model[id];
  if (friend) {
    res.status(200).json({
      status: 200,
      message: "Success get friend",
      data: friend,
    });
  } else {
    res.status(404).json({
      status: 404,
      data: {
        message: "Friend not found",
      },
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriendsById,
};
