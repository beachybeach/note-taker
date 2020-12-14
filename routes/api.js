const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
  console.log("Getting Notes");
  const notes = require("../Develop/db/db.json");
  res.json(notes);
  res.status(200).end();
});

router.post("/notes", (req, res) => {
  const notes = require("../Develop/db/db.json");
  const note = req.body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../develop/db/db.json"),
    JSON.stringify(notes)
  );
  res.json(notes);
});

// router.delete("/notes/:id", (req, res) => {
//   console.log(req.body);
//   res.status(200).end();
// });

module.exports = router;
