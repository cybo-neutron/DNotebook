import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Link from "next/link";
import NoteContext from "../context/notes/NoteContext";
import { useContext, useEffect } from "react";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import NoteState from "../context/notes/NoteState";
import OpenNote from "../components/OpenNote/OpenNote";
import React, { useState } from "react";
import LoginRegister from "../components/LoginRegister/LoginRegister";
import Main from "../components/Main";

export default function Home() {
  //TODO :  Changed the initial value of logged in to verify using the jwt token.

  const [loggedIn, setLoggedIn] = useState(false);

  // function checkIfLoggedIn() {
  //   //TODO : Check for authToken in cookie
  //   const authToken = localStorage.getItem("authToken");
  //   console.log({ authToken });
  //   if (authToken) {
  //     setLoggedIn(true);
  //   }
  // }

  // useEffect(() => {
  //   checkIfLoggedIn();
  // }, []);

  function toggleLoggedIn() {
    if (loggedIn) {
      //delete the authToken
      localStorage.removeItem("authToken");
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  return (
    <>
      {loggedIn ? (
        <Main toggleLoggedIn={toggleLoggedIn} />
      ) : (
        <LoginRegister toggleLoggedIn={toggleLoggedIn} />
      )}

      {/* <NoteState>
        <NavBar />
        <AddNote />
        <h2 className="bg-slate-500 mt-3 text-2xl font-bold">All notes</h2>
        <Notes />
      </NoteState> */}
    </>
  );
}
