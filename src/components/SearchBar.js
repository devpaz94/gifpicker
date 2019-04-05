import React from "react";

const SearchBar = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <p>
        <input
          type="text"
          placeholder="Serach GIF..."
          onChange={props.inputHandler}
          name="searchInput"
        />
      </p>
    </form>
  );
};

export default SearchBar;
