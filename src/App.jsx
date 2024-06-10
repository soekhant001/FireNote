import React, { useEffect, useRef, useState } from "react";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NavBar from "./components/NavBar";
import LoadingEffect from "./components/LoadingEffect";
import Intro from "./components/Intro";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // get notes when app is start
  useEffect(() => {
    getNotes();
  }, []);

  // getNotes
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-k-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) {
        throw new Error("Can't Show  The Notes");
      }
      const notes = await response.json();

      const modifiedNote = [];

      for (const key in notes) {
        modifiedNote.push({
          id: key,
          noteText: notes[key],
        });
      }
      setNotes(modifiedNote);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <main className="m-10">
      <NavBar getNotes={getNotes} notes={notes} />

      {loading && !error && <LoadingEffect />}
      {error && !loading && (
        <p className="text-2xl text-red-800 py-5 font-bold text-center">
          {error}
        </p>
      )}
      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes} />
          ))}
        </>
      )}
      {notes.length === 0 && <Intro />}

      {/* {loading && <Intro className="hidden" />} */}
    </main>
  );
};

export default App;
