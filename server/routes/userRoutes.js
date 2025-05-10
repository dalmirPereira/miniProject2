const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

//a POST request to check login
router.post("/login", (req, res) => {

  const user = req.body; // data is sent via body

  const checkUser = userControllers.checkUser(user);

  if (typeof checkUser !== "object") {
    return res.status(400).send(checkUser); // Send error as plain text with 400 status code
  } else {
    return res.status(200).json(checkUser); // Return valid user data in JSON format
  }
});

//a POST request to check login
router.post("/signup", (req, res) => {

  const user = req.body; // data is sent via body

  const signUpUser = userControllers.signUpUser(user);

  if (typeof signUpUser !== "object") {
    return res.status(400).send(signUpUser); // Send error as plain text with 400 status code
  } else {
    return res.status(200).json(signUpUser); // Return valid user data in JSON format
  }
});

module.exports = router;
