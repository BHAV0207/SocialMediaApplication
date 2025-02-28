const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");


// update user details
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }); 

      res.status(200).json("account has been updated");
    } catch (err) {
      return res
        .status(403)
        .json({ message: "you can update only your account" });
    }
  } else {
    return res
      .status(403)
      .json({ message: "you can update only your account" });
  }
});


// delete a user 
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json("account has been deleted");
    } catch (err) {
      return res
        .status(403)
        .json({ message: "you can delete only your account" });
    }
  } else {
    return res
      .status(403)
      .json({ message: "you can delete only your account" });
  }
});


// getting a user detail
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // learned a new thing that if we dont want the complete info of a user then we can use ._doc function
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
    // all the fields other than password and updatedAt will be visible
  } catch (err) {
    res.status(500).json(err);
  }
});


// follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("user has been followed");
      }
      else{
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json("you already follow this account");
    }
  } else {
     res.status(403).json("you cant follow yourself")
  }
});



// unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("user has been unfollowed");
      }
      else{
        res.status(403).json("you already unfollow this user");
      }
    } catch (err) {
      res.status(500).json("you already unfollow this account");
    }
  } else {
     res.status(403).json("you cant unfollow yourself")
  }
});
module.exports = router;
