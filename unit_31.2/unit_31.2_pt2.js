/** following function processes the input from the form, 
 * handles the response, and returns JSON. */

async function cardDeck() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // #1
    async function deckOne() {
        const res = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
        const card = await axios.get(`${baseURL}/${res.data.deck_id}/draw/?count=1`);
        console.log("#1:", card.data.cards[0].value,"of", card.data.cards[0].suit);
    }
    deckOne();

    // #2
    async function deckTwo() {
        const res = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
        const cardOne = await axios.get(`${baseURL}/${res.data.deck_id}/draw/?count=1`);
        const cardTwo = await axios.get(`${baseURL}/${res.data.deck_id}/draw/?count=1`);
        console.log("#2:",cardOne.data.cards[0].value,"of", cardOne.data.cards[0].suit);
        console.log("#2:",cardTwo.data.cards[0].value,"of", cardTwo.data.cards[0].suit);
    }
    deckTwo();


    // #3
    
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
  
    async function deckThree() {
        $btn.on('click', async function() {
            const res = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
            const draw = await axios.get(`${baseURL}/${res.data.deck_id}/draw/`);
            console.log("draw",draw);
            let cardSrc = draw.data.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            console.log("#3: Deck ID", res.data.deck_id);

            $cardArea.append(
                $('<img>', {
                  src: cardSrc,
                  css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                  }
                })
              );
              if (data.remaining === 0) $btn.remove();
          $btn.show();
    });}
  

    deckThree();
}

cardDeck()
