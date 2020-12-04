/** following function processes the input from the form, 
 * handles the response, and returns JSON. */

async function cardDeck() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // #1

    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(p1=> {console.log("shuffled deck id: ", p1.data.deck_id);
            return axios.get(`https://deckofcardsapi.com/api/deck/${p1.data.deck_id}/draw/?count=1`)
        })
        .then(p2=> console.log(p2.data.cards[0].value, " of ",p2.data.cards[0].suit))
    


    // #2

    let firstCard = null;
    $.getJSON(`${baseURL}/new/draw/`)
      .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${baseURL}/${deckId}/draw/`);
      })
      .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
          console.log(
            `${card.value} of ${card.suit}`
          );
        });
      });

    

    // #3
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
  
    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
      deckId = data.deck_id;
      $btn.show();
    });
  
    $btn.on('click', function() {
      $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (data.remaining === 0) $btn.remove();
      });
    });

}

cardDeck()
