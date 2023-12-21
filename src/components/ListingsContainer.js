import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, onHandleDelete }) {

  const listingC = listings.map(eachListing => {
    return <ListingCard listing={eachListing} key={eachListing.id} onHandleDelete={onHandleDelete}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingC}
      </ul>
    </main>
  );
}

export default ListingsContainer;
