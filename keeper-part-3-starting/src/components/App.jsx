import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [keep, setKeep] = useState([]);
  function addNote(note) {
    setKeep((prevKeep) => {
      return [...prevKeep, note];
    });
  }

  function deleteNote(id) {
    setKeep((prevKeep) => {
      return prevKeep.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {keep.map((noteItems, index) => {
        return (
          <Note
            title={noteItems.title}
            content={noteItems.content}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
