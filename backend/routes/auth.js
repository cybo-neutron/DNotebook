const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult, check } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

//Route 1 : /api/auth/createUser :  Creates new user and stores in db.
router.post(
  "/createUser",
  [
    check("name")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long"),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    //Check for all validation and return error with status 400 if any thing wrong.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log({ hashedPassword });

    //Check for email if it already exists in the database.
    const checkEmail = await User.findOne({ email: req.body.email });
    console.log({ checkEmail });
    if (checkEmail) {
      return res
        .status(400)
        .json({ error: "An account with this email already exists" });
    }

    //Create a new user and try to save in the database.
    const data = {
      name: req.body.name,
      password: hashedPassword, //using the hashed password
      email: req.body.email,
    };
    const user = new User(data);
    try {
      const save = await user.save();

      const data = {
        user: {
          id: user._id,
        },
      };
      const authToken = jwt.sign({ data }, process.env.JWT_SECRET);

      res.json({ authToken });
    } catch (err) {
      console.log("err");
      res.status(400).json({ error: "Please fill the data correctly", ...err });
    }
  }
);

//Route2 : /api/auth/login : Login user with email and password
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email: email });

  //Check if the email is present in the database
  if (!findUser) {
    console.log("User not found");
    return res.status(400).json({ error: "Username or password is wrong" });
  }

  //Compare the entered password with the hashed password stored in DB.
  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (!passwordMatch) {
    console.log("Password does not match");
    return res.status(400).json({ error: "Username or password is wrong" });
  }

  const data = {
    user: {
      id: findUser._id,
    },
  };
  const authToken = jwt.sign(data, process.env.JWT_SECRET);

  res.json({ authToken });
});

//Route 3 : /api/auth/getUser :

router.post("/getUser", fetchUser, async (req, res) => {
  console.log(req.user);

  try {
    const user = await User.findOne({ _id: req.user.id });
    res.send(user);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
