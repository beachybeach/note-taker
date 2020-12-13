const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//TODO: Need landing page "get started" button to open the note taker page. (GET request?)
//TODO: Need note taker to be able to accept new notes. (POST request?)
//TODO: Need to make it so when the write icon is clicked then an empty field appears for new note title and note body.
//TODO: When a new note is entered then the save icon appears at the top of the page.
//TODO: Need notes page to save existing notes in the left hand column after save button is clicked.
//TODO: Be able to click saved notes in left hand column and have them open to the right.

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
