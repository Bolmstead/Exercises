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

  
  let cardNum = 5;
  let cardSuit = "hearts";

  const [cards, setCards] = useState(initialState)
  const addCard = () => {
    setCards(cards => [...cards, { id: uuid(), cardNum, cardSuit }])
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

  
  return (
    <div key={cardsListKey}>
      <button onClick= {addCard}>Draw a Card!</button>
      <div>
        {cards.map((card) => <Card id={card.id} number={card.cardNum} suit={card.cardSuit} remove={remove} />)}
      </div>
    </div>
  );
  }

export default CardsList;
