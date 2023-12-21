import React, { useState } from "react";

function ListingCard( { url, listing, onDeleteListing }) {
  const { id, description, image, location } = listing
  const [ liked, setLiked ] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleDelete = () => {
      fetch(`${url}/${id}`, {
        method:"DELETE"
      })
      .then(response => response.json())
      .then(console.log("deleted"))
      onDeleteListing(id)
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
