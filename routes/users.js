var express = require("express");
const moment = require("moment");
var router = express.Router();
const { User } = require("../models/User");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function(req, res, next) {
  var insertingUser = new User({
    ...req.body,
    created_at: moment().unix(),
    updated_at: moment().unix()
  });

  // ドキュメントの保存
  insertingUser.save(function(err) {
    if (err) console.log(err);

    res.redirect("/signin");
  });
});

module.exports = router;
