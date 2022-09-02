import React from "react";
import NoteInput from "../components/NoteInput";
import NoteCard from "../components/NoteCard";

const NoteBody = ({
  notes,
  search,
  onAddNote,
  onDeleteNote,
  onArchiveNote,
}) => {
  const activeNotes = notes.filter(note => !note?.archived)
  const inActiveNotes = notes.filter(note => note?.archived)
  return (
    <div className="note-app__body">
      <NoteInput onAddHandler={onAddNote} />
      <h2>Catatan Aktif</h2>
      {activeNotes && (
        <div className="notes-list">
          {activeNotes
            .map((note) => (
              <NoteCard
                note={note}
                onDeleteHandler={onDeleteNote}
                onArchiveHandler={onArchiveNote}
                key={note?.id}
              />
            ))}
        </div>
      )}
      {!activeNotes.length && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
      <h2>Arsip</h2>
      {inActiveNotes && (
        <div className="notes-list">
          {inActiveNotes
            .map((note) => (
              <NoteCard
                note={note}
                onDeleteHandler={onDeleteNote}
                onArchiveHandler={onArchiveNote}
                key={note?.id}
              />
            ))}
        </div>
      )}
      {!inActiveNotes.length && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
};

export default NoteBody;
