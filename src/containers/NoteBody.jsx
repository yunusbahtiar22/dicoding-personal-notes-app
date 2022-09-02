import React from "react";
import NoteInput from "../components/NoteInput";
import NoteCard from "../components/NoteCard";

const NoteBody = ({ notes, onAddNote, onDeleteNote, onArchiveNote }) => {
  const activeNotes = notes.filter((note) => note?.archived === false);
  const archivedNotes = notes.filter((note) => note?.archived === true);
  console.log(archivedNotes);
  return (
    <div className="note-app__body">
      <NoteInput onAddHandler={onAddNote} />
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {activeNotes &&
          activeNotes.map((note) => (
            <NoteCard
              note={note}
              onDeleteHandler={onDeleteNote}
              onArchiveHandler={onArchiveNote}
              key={note?.id}
            />
          ))}
        {!activeNotes.length && (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {archivedNotes &&
          archivedNotes.map((note) => (
            <NoteCard
              note={note}
              onDeleteHandler={onDeleteNote}
              onArchiveHandler={onArchiveNote}
              key={note?.id}
            />
          ))}
        {!archivedNotes.length && (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
};

export default NoteBody;
