const router = require("express").Router();
const { createUser, userProfile, showUserForm } = require("../Controllers/AuthController");

// Home Page
router.get("/", showUserForm);

router.post("/", createUser);

// User Profile
router.get("/:id", userProfile);

module.exports = router;
