const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const api = require("./routes/api");
const html = require("./routes/html");
const bodyParser = require("body-parser");
const fs = require("fs");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./develop/public/index.html"));
// });

//links get started button to actual notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
});

app.use(express.static("Develop/public"));
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", api);
app.use(
  express.urlencoded({
    extended: true,
  })
);
//TODO: Need to make it so when the write icon is clicked then an empty field appears for new note title and note body.
//TODO: When a new note is entered then the save icon appears at the top of the page.
//TODO: Need notes page to save existing notes in the left hand column after save button is clicked.
//TODO: Be able to click saved notes in left hand column and have them open to the right.

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
