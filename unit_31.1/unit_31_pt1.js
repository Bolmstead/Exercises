/** following function processes the input from the form, 
 * handles the response, and returns JSON. */

async function luckyNum() {

    // #1
    const favNumRes = await axios.get(`http://numbersapi.com/3?json`);
    const favNumFact = favNumRes['data']['text'];
    $("#pt1Num1").text(favNumFact);


    // #2
    const batchRes = await axios.get(`http://numbersapi.com/1..4`);
    const facts = Object.values(batchRes.data);
    for ( const f of facts){
        $("#pt1Num2").append(f);
    }
    

    // #3
    Promise.all(
        Array.from({ length: 4 }, () => {
          return $.getJSON(`http://numbersapi.com/3?json`);
        })
      ).then(facts => {
        facts.forEach(data => $("#pt1Num3").append(`<p>${data.text}</p>`));
      });
}


luckyNum()
