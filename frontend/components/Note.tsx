import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function Note({ title, description, tag, _id }) {
  return (
    <div className="flex flex-col bg-slate-400 p-2 rounded-sm shadow-xl">
      <h3 className="font-bold">{title}</h3>
      <p className="flex-grow">{description}</p>
      {/* //TODO : Add tooltip to icons(Delete icon and Edit icon) */}
      <div className="flex gap-3">
        <TrashIcon
          className="h-5 text-slate-700 cursor-pointer mt-2"
          onClick={() => {
            console.log("Hello");
          }}
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
