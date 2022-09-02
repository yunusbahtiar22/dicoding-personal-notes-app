import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteInput = ({ onAddHandler }) => {
  const maxLength = 50;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value.slice(0, maxLength));
  };

  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const addNote = (e) => {
    e.preventDefault();
    onAddHandler({
      id: uuidv4(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={addNote}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxLength - title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required=""
          value={title}
          onChange={onTitleChange}
          maxLength={50}></input>
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required=""
          value={body}
          onChange={onBodyChange}></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteInput;
