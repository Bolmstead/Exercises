import React, {useState, useEffect} from "react";
import './App.css';
import Card from './Card.js'
import { v4 as uuid } from 'uuid'
import axios from "axios";


function CardsList() {

  // useEffect(() => {
  //   async function shuffleDeck() {
  //     const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  //     console.log("res: ", res)}, []
  // })

  const initialState = []
  const cardsListKey = uuid()

  const [cards, setCards] = useState(initialState)
  const addCard = (number, suit) => {
    setCards(cards => [...cards, { id: uuid(), number, suit }])
  }

  const remove = (card) => {
    setCards(cards.filter(n => n.id !== card.id)
    );
  }

  // async function shuffleDeck() { 
  //   const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  //   return res}

  // let shuffledDeck = shuffleDeck()
  // console.log("shuffledDeck", shuffledDeck)

  let cardNum = 5;
  let cardSuit = "hearts";
  
  return (
    <div key={cardsListKey}>
      <form onSubmit= {addCard(cardNum, cardSuit)}>
        <button>Draw a Card!</button>
      </form>
      <div>
        {cards.map((card) => <Card id={card.id} number={card.number} suit={card.suit} remove={remove} />)}
      </div>
    </div>
  );
  }

export default CardsList;
