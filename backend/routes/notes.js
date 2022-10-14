const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");

//Route 1 : /api/notes/addNote Create a new note and save it in the database
router.post("/addNote", fetchUser, async (req, res) => {
  console.log("**** Addnote Recieved body : ", req.body);

  const { title, description, tag } = req.body;
  let note = new Note({ title, description, tag, user: req.user.id });

  try {
    const addedNote = await note.save();
    res.json(addedNote);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
});

//Route 2 : /api/notes/fetchNotes (Fetch all notes for the current user)
router.get("/fetchNotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.send(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 3 : /api/notes/updateNote/:id (Update the particular note)
router.patch("/updateNote/:id", fetchUser, async (req, res) => {
  const id = req.params.id;
  console.log({ id });

  const { title, description, tag } = req.body;
  console.log({ title, description, tag });
  const newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { $set: newNote });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 4 : /api/notes/deleteNote/:id (Delete particular note)
router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
  const id = req.params.id;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    res.status(200).json(deletedNote);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
