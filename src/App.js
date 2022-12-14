import React, { useState } from "react";
// import Header from "./components/Header";
import NoteBody from "./containers/NoteBody";
import seed from "./seed"

const App = () => {
  const [notes, setNotes] = useState([...seed]);
  const [searchText, setSearchText] = useState("");

  const filtered = notes.filter((note) => {
    if (!searchText) {
      return true;
    } else {
      return note?.title.toLowerCase().includes(searchText.toLowerCase());
    }
  });

  const addNote = (newNote) => {
    setNotes((notes) => notes?.concat(newNote));
  };

  const deletNote = (id) => {
    setNotes(notes.filter((note) => note?.id !== id));
  };

  const archiveNote = (id) => {
    const archivedNote = notes?.find((note) => note?.id === id);
    if (archivedNote) {
      archivedNote.archived = !archivedNote.archived;
      setNotes(notes.filter((note) => note?.id !== id).concat(archivedNote));
    }
  };

  const search = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      {/* <Header onChangHandler={setSearchText} /> */}
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan..."
            onChange={search}
            value={searchText}
          />
        </div>
      </div>
      <NoteBody
        notes={filtered}
        onAddNote={addNote}
        onDeleteNote={deletNote}
        onArchiveNote={archiveNote}
      />
    </>
  );
};

export default App;
