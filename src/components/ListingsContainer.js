import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings , url, onDeleteListing}) {

  const listingC = listings.map((listing) => {
    return   <ListingCard listing={listing} key ={listing.id} onDeleteListing={onDeleteListing} url={url}/>
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
