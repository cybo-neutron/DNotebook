import React from "react";
import NoteState from "../context/notes/NoteState";
import AddNote from "./AddNote";
import NavBar from "./NavBar";
import Notes from "./Notes";

function Main(props) {
  return (
    <>
      <NoteState>
        <NavBar toggleLoggedIn={props.toggleLoggedIn} />
        <AddNote />
        <h2 className="bg-slate-500 mt-3 text-2xl font-bold">All notes</h2>
        <Notes />
      </NoteState>
    </>
  );
}

export default Main;
