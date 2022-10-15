import React, { useContext } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import NoteContext from "../context/notes/NoteContext";

export default function Note({
  title,
  description,
  tag,
  _id,
  setNoteModalOpen,
  setEdittedNote,
}) {
  const notes = useContext(NoteContext);
  const handleDelete = (e) => {
    e.stopPropagation();
    notes.deleteNote(_id);
  };

  const handlePreview = () => {
    setEdittedNote({ _id, title, tag, description });
    setNoteModalOpen(true);
  };

  return (
    <div
      className="flex flex-col bg-slate-400 p-2 rounded-sm shadow-xl cursor-pointer"
      onClick={handlePreview}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm bg-slate-600 w-fit px-2 text-slate-200 rounded-xl">
        #{tag}
      </p>
      <p className="flex-grow">{description}</p>
      {/* //TODO : Add tooltip to icons(Delete icon and Edit icon) */}
      <div className="flex gap-3">
        <TrashIcon
          className="h-5 text-slate-700 cursor-pointer mt-2"
          onClick={handleDelete}
        />

        <PencilSquareIcon
          className="h-5 text-slate-700 cursor-pointer mt-2"
          onClick={() => {
            console.log("Hello");
          }}
        />
      </div>
    </div>
  );
}
