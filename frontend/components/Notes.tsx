import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Note from "./Note";
import OpenNote from "./OpenNote/OpenNote";

const Notes = () => {
  const notes = useContext(NoteContext);

  useEffect(() => {
    // notes.fetchNotes();
  }, []);

  //State to handle the visibility of the modal (preview and edit)
  const [noteModalOpen, setNoteModalOpen] = useState(false);

  const [edittedNote, setEdittedNote] = useState({
    _id: "",
    tag: "",
    title: "",
    description: "",
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-2 mt-2">
      {notes.notes.map((note) => {
        return (
          <Note
            {...note}
            key={note._id}
            setNoteModalOpen={setNoteModalOpen}
            setEdittedNote={setEdittedNote}
          />
        );
      })}

      {noteModalOpen ? (
        <OpenNote
          setNoteModalOpen={setNoteModalOpen}
          edittedNote={edittedNote}
          setEdittedNote={setEdittedNote}
        />
      ) : null}
    </div>
  );
};

export default Notes;
