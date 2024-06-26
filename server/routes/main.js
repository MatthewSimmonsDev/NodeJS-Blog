const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  const locals = {
    title: "NodeJS-Blog",
    description: "This is a simple blog using Node.js, express and MongoDB",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
