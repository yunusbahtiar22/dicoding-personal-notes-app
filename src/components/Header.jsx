import React, { useState } from "react";

const Header = ({ onChangHandler }) => {
  const [searchText, setSearchText] = useState("");

  const search = (e) => {
    setSearchText(e.target.value);
    onChangHandler(searchText);
  };

  return (
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
  );
};

export default Header;
