const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
  // grab db.json file and send back in res
  res.status(200).end();
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

// router.delete("/notes/:id", (req, res) => {
//   console.log(req.body);
//   res.status(200).end();
// });

module.exports = router;
