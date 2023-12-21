import React, { useState } from "react";

function Search( { onHandleSearchSubmit }) {

  const [ searchVal, setSearchVal ] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onHandleSearchSubmit(searchVal)

  }

  function handleChange(e){
    setSearchVal(e.target.value)
  }
  console.log(searchVal)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
