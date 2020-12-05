/** following function processes the input from the form, 
 * handles the response, and returns JSON. */

async function luckyNum() {

    // #1
    const favNumRes = await axios.get(`http://numbersapi.com/3?json`);
    const favNumFact = favNumRes['data']['text']
    $("#pt1Num1").text(favNumFact)




    // #2
    const batchRes = await axios.get(`http://numbersapi.com/1..4`);
    const facts = Object.values(batchRes.data);
    for ( const f of facts){
        $("#pt1Num2").append(f);
    }
    

    // #3

    async function fourFactsFavNum(){
        let p1Promise = $.getJSON(`http://numbersapi.com/3?json`);
        let p2Promise = $.getJSON(`http://numbersapi.com/3?json`);
        let p3Promise = $.getJSON(`http://numbersapi.com/3?json`);
        let p4Promise = $.getJSON(`http://numbersapi.com/3?json`);

        let p1 = await p1Promise;
        let p2 = await p2Promise;
        let p3 = await p3Promise;
        let p4 = await p4Promise;

        let promiseArr = [p1, p2, p3, p4];

        for (const p of promiseArr) {
            $("#pt1Num3").append(`<p>${p.text}</p>`)
        };

    }
    fourFactsFavNum();

}



luckyNum();
