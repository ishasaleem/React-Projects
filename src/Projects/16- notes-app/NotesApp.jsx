import React, { useState } from 'react';
import Buttons from '../../Components/Buttons';
import NewNote from './NewNote';
import { v4 as uuidv4 } from 'uuid';

function NotesApp() {
  const [notes, setNotes] = useState([]);

  const addNewNote = () => {
    const newNote = {
      id: uuidv4(),
      text: ''
    };
    setNotes([...notes, newNote]);
  };

  const cards = [
    "card-info",
    "card-danger",
    "card-primary",
    "card-success", 
    "card-warning"
  ];

  const randomBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
  }

  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNoteText = (id, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <Buttons btnclass={"btn-info"} text={"+ New Note"} onClick={addNewNote} />
      <div className="container container-sm d-flex" style={{ gap: 25, flexWrap: 'wrap' }}>
        {notes.map((note) => (
          <NewNote
            key={note.id}
            note={note}
            cardBg={randomBg()} 
            onClick={deleteNotes}
            text={note.text}
            onTextChange={updateNoteText}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesApp;
