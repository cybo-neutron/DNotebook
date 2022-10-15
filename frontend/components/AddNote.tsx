import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const notes = useContext(NoteContext);

  const [newNote, setNewNote] = useState({
    title: "",
    tag: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    // console.log({ newNote });
    notes.addNote(newNote.title, newNote.tag, newNote.description);
  };

  return (
    <div className="bg-slate-400 flex flex-col p-2 gap-2 mx-2">
      <input
        type="text"
        name="title"
        placeholder="Enter title..."
        className="border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700"
        onChange={handleChange}
      />
      <input
        type="text"
        name="tag"
        placeholder="Enter Tag..."
        className="border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Enter the description."
        className="h-40 outline-none px-2"
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="bg-slate-700 text-white px-2 py-2"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
