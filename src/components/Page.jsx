import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const url = "http://localhost:6001/listings"

function Page() {

    const [ listings, setListings ] = useState([])
    const [ searchVal, setSearchVal ] = useState("")

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data =>  setListings(data))
    }, [])

    const deleteListing = (deletedListingId) => {
        const listingsWODel = listings.filter(listing => {
            return listing.id !== deletedListingId
        })
        setListings(listingsWODel)
    }

    const searchedListing = listings.filter(eachListing => {
       return eachListing.description.toLowerCase().includes(searchVal.toLowerCase())
    })

    const onHandleSearchVal = (userInput) => {
        setSearchVal(userInput)
    }
 
  return (
    <div className="app">
      <Header onHandleSearchVal={onHandleSearchVal}/>
      <ListingsContainer listings={searchedListing} url={url} onDeleteListing={deleteListing}/>
    </div>
  )
}

export default Page
