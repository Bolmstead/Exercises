import React from "react";
import './App.css';
import axios from "axios";


function Card(props) {

    let propsVar = props;

    console.log("propsVar,", propsVar)


    // async function drawCard() {
    //     const res = await axios.get("https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
    //     ");
    // } 

    return (
    <div key={props.key}>
        <h1>
            {props.number}
        </h1>
    </div>
    )
}

export default Card;