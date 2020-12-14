const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), "utf8")
  );
  res.json(notes);
  res.status(200).end();
});

router.post("/notes", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), "utf8")
  );
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
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), "utf8")
  );
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
