const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

router.get("/:id", (req, res) => {
  // req.body
  res.json({ msg: "hello" });
});

router.post("/", (req, res) => {
  res.json({ msg: "posty hello" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "posty hello" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "posty hello" });
});

module.exports = router;
