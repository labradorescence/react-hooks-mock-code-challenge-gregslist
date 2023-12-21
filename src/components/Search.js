import React, { useState } from "react";

function Search({ onHandleSearchVal}) {

  const [ userInput, setUserInput ] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    onHandleSearchVal(userInput)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
