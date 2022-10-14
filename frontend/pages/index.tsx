import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Link from "next/link";
import noteContext from "../context/notes/NoteContext";
import { useContext } from "react";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import NoteState from "../context/notes/NoteState";
export default function Home() {
  let x = useContext(noteContext);

  return (
    <>
      <NoteState>
        <NavBar />
        <AddNote />

        <h2 className="bg-slate-500 mt-3 text-2xl font-bold">All notes</h2>
        <Notes />
      </NoteState>
    </>
  );
}
