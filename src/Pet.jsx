import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "https://robohash.org/robots.png?size=200x200";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`} </h2>
      </div>
    </a>
  );
}
