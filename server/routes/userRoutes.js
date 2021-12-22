const router = require("express").Router();
const {
  signUpUser,
  signInUser,
  getCurrentUser,
} = require("../controllers/userController");

const auth = require("../middleware/auth");

router.post("/signup", signUpUser);

router.post("/login", signInUser);

router.get("/current", auth, getCurrentUser);

module.exports = router;
