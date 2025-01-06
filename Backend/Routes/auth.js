const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ meassge: "user already exist , please login" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    await newUser.save();

    res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: "error while registering" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "the user does not exist" });

    const pass = bcrypt.compare(existingUser.password, password);
    if (!pass) return res.status(404).json({ message: "the password is incorrect" });

    res.status(200).json(existingUser); 
  } catch (err) {
    return res.status(500).json({ message: "err" });
  }
});


module.exports = router;
