import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../../context/notes/NoteContext";

function EditNote(props) {
  const { _id, title, tag, description } = props.edittedNote;

  const noteContext = useContext(NoteContext);

  const [changedNote, setChangedNote] = useState({
    _id,
    title,
    tag,
    description,
  });

  function handleUpdateNote() {
    // Make a call to update the note in the backend.
    noteContext.editNote(changedNote);
  }

  function handleChange(e) {
    // e.preventDefault();
    setChangedNote((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  useEffect(() => {
    props.setEdittedNote(changedNote);
  }, [changedNote]);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        name="title"
        defaultValue={title}
        placeholder="Enter Title..."
        className="border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700"
        onChange={handleChange}
      />
      <input
        type="text"
        name="tag"
        defaultValue={tag}
        placeholder="Enter Tag..."
        className="border-b-2 text-black outline-none px-2 focus:bg-slate-300 focus:border-b-slate-700"
        onChange={handleChange}
      />
      <textarea
        name="description"
        defaultValue={description}
        placeholder="Enter the description."
        className="h-40 outline-none px-2"
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="bg-slate-700 text-white px-2 py-2"
        onClick={handleUpdateNote}
      >
        Update Note
      </button>
    </div>
  );
}

export default EditNote;
