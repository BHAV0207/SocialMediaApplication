const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(404)
        .json({ meassge: "user already exist , please login" });

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

    const pass = await bcrypt.compare(password , existingUser.password);
    if (!pass)
      return res.status(401).json({ message: "the password is incorrect" });

    const token = jwt.sign(
      {
        id: existingUser._id,
        isAdmin: existingUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({isAdmin : existingUser.isAdmin , token} );
  } catch (err) {
    return res.status(500).json({ message: "err" });
  }
});

const middleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin Route
router.get("/admin", middleware, (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access denied" });

  res.json({ message: "Welcome to the admin page" });
});

// User Route
router.get("/user", middleware, (req, res) => {
  if (req.user.isAdmin)
    return res.status(403).json({ message: "Access denied" });

  res.json({ message: "Welcome to the user page" });
});

module.exports = router;
