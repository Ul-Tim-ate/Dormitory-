import React from "react";
import "./search-panel.sass";
import loupe from "./loupe.svg";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input
        type="text"
        className="search-panel__input"
        placeholder="Поиск..."
      />
      <button>
        <img
          src={loupe}
          alt="Значок поиска студента"
          className="search-panel__img"
        />
      </button>
    </div>
  );
};

export default SearchPanel;
