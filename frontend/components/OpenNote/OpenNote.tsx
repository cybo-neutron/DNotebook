import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EditNote from "./EditNote";
import PreviewNote from "./PreviewNote";

const OpenNote = (props) => {
  function closeModal() {
    console.log("Closing modal");
    props.setNoteModalOpen(false);
  }
  const { edittedNote, setEdittedNote } = props;
  const { _id, tag, title, description } = edittedNote;
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[2] bg-slate-600">
      <XMarkIcon
        className="h-5 cursor-pointer absolute right-2 font-bold"
        onClick={closeModal}
      />

      <div className="grid grid-cols-2">
        {/* Edit Note Component*/}
        <EditNote edittedNote={edittedNote} setEdittedNote={setEdittedNote} />
        {/* Preview Note Component */}
        <PreviewNote edittedNote={edittedNote} />
      </div>
    </div>
  );
};

export default OpenNote;
