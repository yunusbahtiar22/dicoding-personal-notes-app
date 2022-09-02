import React from "react";

const NoteCard = ({ note, onDeleteHandler, onArchiveHandler }) => {
  const dateFormatter = new Intl.DateTimeFormat("id", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  });

  const deleteHandler = () => {
    onDeleteHandler(note?.id);
  };

  const archiveNote = () => {
    onArchiveHandler(note?.id);
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note?.title}</h3>
        <p className="note-item__date">{dateFormatter.format(note?.date)}</p>
        <p className="note-item__body">{note?.body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={deleteHandler}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={archiveNote}>
          {note?.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
