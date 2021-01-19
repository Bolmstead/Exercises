import React, {useState, useEffect} from "react";
import './App.css';
import Card from './Card.js'
import { v4 as uuid } from 'uuid'
import axios from "axios";


function CardsList() {

  const initialState = []
  const cardsListKey = uuid()
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState(initialState)

  useEffect(() => { 
    async function grabDeckId(){
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      console.log("deck_id", res.data.deck_id)
      setDeck(res.data)
    }
    grabDeckId()
  }, [setDeck])

  async function addCard() {
    console.log("deck", deck)
    let res = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/`);
    console.log(res)
    // setCards(cards => [...cards, { id: uuid(), cardNum, cardSuit }])
  }

  const remove = (card) => {
    setCards(cards.filter(n => n.id !== card.id)
    );
  }

  
  return (
    <div key={cardsListKey}>
      <button onClick= {addCard}>Draw a Card!</button>
      <div>
        {cards.map((card) => <Card key={card.id} number={card.cardNum} suit={card.cardSuit} remove={remove} />)}
      </div>
    </div>
  );
  }

export default CardsList;
