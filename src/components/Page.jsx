import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function Page() {

  const [ listings, setListings] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
        .then(response=> response.json())
        .then(data => setListings(data))
  }, [])

  const handleDelete = (deletedListingId) => {
    const listingArrWOdeletedListing = listings.filter(listing => {
        return listing.id !== deletedListingId
    })
    setListings(listingArrWOdeletedListing)
  }

  const listingsToDisplay = listings.filter(eachListing => {
    return eachListing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleSearchSubmit = (searchVal) => {
    setSearchTerm(searchVal)
  }

  console.log(listings)
  return (
    <div className="app">
      <Header onHandleSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listingsToDisplay} onHandleDelete={handleDelete}/>
    </div>
  );
}

export default Page;
