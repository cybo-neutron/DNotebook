import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import Note from "./Note";

const Notes = () => {
  const notes = useContext(noteContext);

  useEffect(() => {
    notes.fetchNotes();
  }, []);

  return (
    <div className="flex gap-2 mx-2 mt-2">
      {notes.notes.map((note) => {
        return <Note {...note} key={note._id} />;
      })}
    </div>
  );
};

export default Notes;
