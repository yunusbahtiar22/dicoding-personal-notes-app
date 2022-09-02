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
  // const filteredNotes = notes.filter((note) => {
  //   if (!search) return true;
  //   else return note?.title?.toLowerCase().includes(search.toLowerCase());
  // });
  return (
    <div className="note-app__body">
      <NoteInput onAddHandler={onAddNote} />
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes
          .filter((note) => {
            if (!search) return true;
            else
              return note?.title?.toLowerCase().includes(search.toLowerCase());
          })
          .filter((note) => !note?.archived)
          .map((note) => (
            <NoteCard
              note={note}
              onDeleteHandler={onDeleteNote}
              onArchiveHandler={onArchiveNote}
              key={note?.id}
            />
          ))}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {notes
          .filter((note) => {
            if (!search) return true;
            else
              return note?.title?.toLowerCase().includes(search.toLowerCase());
          })
          .filter((note) => note?.archived)
          .map((note) => (
            <NoteCard
              note={note}
              onDeleteHandler={onDeleteNote}
              onArchiveHandler={onArchiveNote}
              key={note?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default NoteBody;
