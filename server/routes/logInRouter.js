const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verify = require("../verifyToken");

let token = null;

router.post("/", async (req, res) => {
  if (req.body.pass == process.env.PASSCODE) {
    console.log("slaze se");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(process.env.PASSCODE, salt);

    // console.log(hashPassword);
    token = await jwt.sign({ id: hashPassword }, process.env.TOKEN_SECRET);

    try {
      res.json({ token: token, auth: true });
      // res.json(token);
    } catch (err) {
      console.log(err);
    }
  } else {
    token = null;
    console.log("ne slaze se");
    console.log(token);
    res.json({ auth: false });
  }
});

router.get("/", async (req, res) => {
  res.send({ token: token });
});

router.get("/logout", (req, res) => {
  token = null;
});

module.exports = router;
