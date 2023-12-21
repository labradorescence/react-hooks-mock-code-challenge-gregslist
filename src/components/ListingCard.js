import React, { useState } from "react";

function ListingCard( {listing, onHandleDelete}) {
  const { id, image, description, location } = listing 

  const [ isFavorited, setIsFavorited ] = useState(true)

  const handleClick = () => {
    setIsFavorited(!isFavorited)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`,  {
      method: "DELETE"
    })
    .then(response=>response.json())
    .then(console.log(`${description} got deleted!`))
    .catch(console.error)

    onHandleDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
