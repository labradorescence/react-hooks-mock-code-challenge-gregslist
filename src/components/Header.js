import React from "react";
import Search from "./Search";

function Header( {onHandleSearchVal}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearchVal={onHandleSearchVal}/>
    </header>
  );
}

export default Header;
