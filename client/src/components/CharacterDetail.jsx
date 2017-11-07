import React from "react";

const CharacterDetail = (props) => {
  if(!props.character) return null;
  return (
    <div>
      <p>Name: {props.character.name}</p>
      <p>Actor: {props.character.actor}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Patronus: {props.character.patronus}</p>
      <img src={props.character.image}></img>
    </div>
  )
}

export default CharacterDetail;
