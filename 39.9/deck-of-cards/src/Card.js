import React from "react";
import './App.css';
import axios from "axios";


async function Card(props) {

    let propsVar = props;

    console.log("propsVar,", propsVar)


    // async function drawCard() {
    //     const res = await axios.get("https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
    //     ");
    // } 

    return (
    <div className="card">
        <h1>
            hey
        </h1>
    </div>
    )
}

export default Card;