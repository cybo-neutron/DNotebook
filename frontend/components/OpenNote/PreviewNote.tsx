import React from "react";
import ReactMarkdown from "react-markdown";

function PreviewNote(props) {
  const { _id, title, tag, description } = props.edittedNote;
  return (
    <div className="space-y-0">
      <p className="font-bold text-[1.5rem]"> {title} </p>
      <p className="bg-slate-500 w-fit rounded-lg px-1"> #{tag} </p>
      <ReactMarkdown children={description} />
    </div>
  );
}

export default PreviewNote;
