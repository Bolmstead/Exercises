import React from 'react';
import './PokeCard.css';


function PokeCard(props) {
  const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  let imgsrc = `${POKE_API}${props.id}.png`

    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{props.name}</h3>
        <div className="Pokecard-image-holder">
          <img className="Pokecard-image" src={imgsrc} />
        </div>
        <span className="Pokecard-data">Type: {props.type}</span><br></br>
        <span className="Pokecard-data">EXP: {props.exp}</span>
      </div>
    );
  }

export default PokeCard;