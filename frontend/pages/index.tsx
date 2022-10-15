import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Link from "next/link";
import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import NoteState from "../context/notes/NoteState";
import OpenNote from "../components/OpenNote/OpenNote";
import React, { useState } from "react";

export default function Home() {
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
