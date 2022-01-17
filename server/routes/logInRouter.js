const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  if (req.body.pass == process.env.PASSCODE) {
    console.log("slaze se");

    const token = jwt.sign({ id: process.env.PASSCODE });
  } else console.log("ne slaze se");
});

module.exports = router;
