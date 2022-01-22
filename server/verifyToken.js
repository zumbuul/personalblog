const jwt = require("jsonwebtoken");
const express = require("express");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.send("Authorisation denied");

  try {
    const verifyed = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verifyed;
    // console.log(verifyed);
    // res.send(req.user);
    next();
  } catch (err) {
    res.send(err);
  }
};
