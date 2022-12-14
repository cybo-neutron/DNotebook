import Router from "next/router";
import { NextResponse } from "next/server";
import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";
let authToken = "";
export default function NoteState(props) {
  const host = "http://localhost:13712";
  //TODO : Replace the Authorization token with the real auth token

  useEffect(() => {
    authToken = localStorage.getItem("authToken");
    fetchNotes();
  }, []);
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  //Get all notes
  const fetchNotes = async (): Promise<any> => {
    console.log("****** Front end  : fetchNotes : authToken : ", authToken);
    if (!authToken || authToken.length === 0) {
      return Router.push("/");
    }

    const response = await fetch(`${host}/api/notes/fetchNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //TODO : delete this and all its references
  const name = "Test";

  //Add note
  const addNote = async (title, tag, description) => {
    console.log("----------Frontend: addNote------------");
    console.log({ authToken });
    const data = { tag, title, description };
    try {
      const response = await fetch(`${host}/api/notes/addNote`, {
        method: "POST",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonResponse = await response.json();
      console.log("Added note : ", jsonResponse);
      // await fetchNotes();
      setNotes((prevNotes) => [
        { title, description, tag, _id: jsonResponse._id },
        ...prevNotes,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //Delete note
  const deleteNote = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
      });
      console.log("Deleted note : ", await response.json());
      // await fetchNotes();
      //We can also use fetchNotes to update thee notes array. But in my opinion that might be an unnecessary network call.
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //Edit note
  const editNote = async (updatedNote) => {
    const { _id, title, tag, description } = updatedNote;
    try {
      console.log("NoteState editNote", updatedNote);
      const response = await fetch(`${host}/api/notes/updateNote/${_id}`, {
        method: "PATCH",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, tag, description }),
      });

      console.log("====== Updated note : ", await response.json());
      await fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NoteContext.Provider
      value={{ name, notes, fetchNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
