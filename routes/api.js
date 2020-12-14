const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
  const notes = require("../Develop/db/db.json");
  res.json(notes);
  res.status(200).end();
});

router.post("/notes", (req, res) => {
  const notes = require("../Develop/db/db.json");
  req.body.id = notes.length.toString();
  const note = req.body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../develop/db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  const notes = require("../Develop/db/db.json");
  const notesAfterDeletion = notes.filter(({ id }) => {
    return req.params.id !== id;
  });
  fs.writeFileSync(
    path.join(__dirname, "../develop/db/db.json"),
    JSON.stringify(notesAfterDeletion, null, 2)
  );
  res.status(200).end();
});

module.exports = router;
