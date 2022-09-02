import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDeleteHandler, onArchiveHandler }) => {
  const activeNotes = notes.filter((note) => !note?.archived);
  return (
    <div className="notes-list">
      {activeNotes.map((note) => (
        <NoteCard
          note={note}
          onDeleteHandler={onDeleteHandler}
          onArchiveHandler={onArchiveHandler}
          key={note?.id}
        />
      ))}
    </div>
  );
};

export default NoteList;
