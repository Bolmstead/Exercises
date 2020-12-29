// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
let catsAndClues = [];

// create Jeopardy Title and Start/Reset button
$("body").append(`
    <h1 id="title">JEOPARDY!</h1>
    <div id="button-div">
        <button id="button" data-startBtn="true">Start!</button>
    </div>
    <div id="game-board"> 
    </div>`)

async function getCategoryIds() {
    // save random number from one to 18000 to randomInt
    // randomInt will be used as the "offset" parameter to get a random sequence of categories
    let randomInt = Math.floor((Math.random() * 18000) + 1);
    let res = await axios.get(`http://jservice.io/api/categories?count=100&offset=${randomInt}`);
    // create a loop to iterate until the categories array contains 6 items
    for (let i=0;categories.length<6;i++){
        // pull random ID number from the 100 categories pulled from API
        let i= Math.floor((Math.random() * 100) + 1);
        let randomCatId= res.data[i].id;
        // if categories array does not include the randomCatId, add it to the categories array
        if (!categories.includes(randomCatId)){
            categories.push(randomCatId);
        }
        console.log(categories);
    }
}
/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    // retreive clues from API with the category ID parameter
    let res = await axios.get(`http://jservice.io/api/clues?category=${catId}`);
    // use .map function to return object displaying question, answer, and "showing"
    // properties for every item in the data's array
    let clueGroup = res.data.map(clue => {
        return {
          question: clue.question,
          answer: clue.answer,
          showing: null,
        };
    })
    let clueArray = [];
    for (let i=0;clueArray.length<5;i++){
        // pull random clue from the clues array and save to variable
        let i= Math.floor((Math.random() * clueGroup.length));
        let randomClue= clueGroup[i];
        // if categories array does not include the randomCatId, add it to the categories array
        if (!clueArray.includes(randomClue)){
            clueArray.push(randomClue);
        }
    };
    // define obj to show category title and list of all clues within the category
    return {title: res.data[0].category.title, clues: clueArray};
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
    // append HTML table to #game-board div. Each tile td has data property 
    // pulled from catsAndCluesfor its question, answer, and showing. 
    $("#game-board").append(
        `<table id="table">
        <thead>
            <tr id="header-row">
                <th>${catsAndClues[0].title}</th>
                <th>${catsAndClues[1].title}</th>
                <th>${catsAndClues[2].title}</th>
                <th>${catsAndClues[3].title}</th>
                <th>${catsAndClues[4].title}</th>
                <th>${catsAndClues[5].title}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-question= "${catsAndClues[0].clues[0].question}" 
                      data-answer= "${catsAndClues[0].clues[0].answer}" 
                     data-showing= "${catsAndClues[0].clues[0].showing}">?
                </td>
                <td data-question= "${catsAndClues[1].clues[0].question}" 
                      data-answer= "${catsAndClues[1].clues[0].answer}" 
                     data-showing= "${catsAndClues[1].clues[0].showing}">?
                </td>
                <td data-question= "${catsAndClues[2].clues[0].question}" 
                      data-answer= "${catsAndClues[2].clues[0].answer}" 
                     data-showing= "${catsAndClues[2].clues[0].showing}">?
                </td>
                <td data-question= "${catsAndClues[3].clues[0].question}" 
                      data-answer= "${catsAndClues[3].clues[0].answer}" 
                     data-showing= "${catsAndClues[3].clues[0].showing}">?
                </td>
                <td data-question= "${catsAndClues[4].clues[0].question}" 
                      data-answer= "${catsAndClues[4].clues[0].answer}" 
                     data-showing= "${catsAndClues[4].clues[0].showing}">?
                </td>
                <td data-question= "${catsAndClues[5].clues[0].question}" 
                      data-answer= "${catsAndClues[5].clues[0].answer}" 
                     data-showing= "${catsAndClues[5].clues[0].showing}">?
                </td>
            </tr>
            <tr>
                <td data-question= "${catsAndClues[0].clues[1].question}" 
                      data-answer= "${catsAndClues[0].clues[1].answer}" 
                     data-showing= "${catsAndClues[0].clues[1].showing}">?
                </td>
                <td data-question= "${catsAndClues[1].clues[1].question}" 
                      data-answer= "${catsAndClues[1].clues[1].answer}" 
                     data-showing= "${catsAndClues[1].clues[1].showing}">?
                </td>
                <td data-question= "${catsAndClues[2].clues[1].question}" 
                      data-answer= "${catsAndClues[2].clues[1].answer}" 
                     data-showing= "${catsAndClues[2].clues[1].showing}">?
                </td>
                <td data-question= "${catsAndClues[3].clues[1].question}" 
                      data-answer= "${catsAndClues[3].clues[1].answer}" 
                     data-showing= "${catsAndClues[3].clues[1].showing}">?
                </td>
                <td data-question= "${catsAndClues[4].clues[1].question}" 
                      data-answer= "${catsAndClues[4].clues[1].answer}" 
                     data-showing= "${catsAndClues[4].clues[1].showing}">?
                </td>
                <td data-question= "${catsAndClues[5].clues[1].question}" 
                      data-answer= "${catsAndClues[5].clues[1].answer}" 
                     data-showing= "${catsAndClues[5].clues[1].showing}">?
                </td>
            </tr>
            <tr>
                <td data-question= "${catsAndClues[0].clues[2].question}" 
                      data-answer= "${catsAndClues[0].clues[2].answer}" 
                     data-showing= "${catsAndClues[0].clues[2].showing}">?
                </td>
                <td data-question= "${catsAndClues[1].clues[2].question}" 
                      data-answer= "${catsAndClues[1].clues[2].answer}" 
                     data-showing= "${catsAndClues[1].clues[2].showing}">?
                </td>
                <td data-question= "${catsAndClues[2].clues[2].question}" 
                      data-answer= "${catsAndClues[2].clues[2].answer}" 
                     data-showing= "${catsAndClues[2].clues[2].showing}">?
                </td>
                <td data-question= "${catsAndClues[3].clues[2].question}" 
                      data-answer= "${catsAndClues[3].clues[2].answer}" 
                     data-showing= "${catsAndClues[3].clues[2].showing}">?
                </td>
                <td data-question= "${catsAndClues[4].clues[2].question}" 
                      data-answer= "${catsAndClues[4].clues[2].answer}" 
                     data-showing= "${catsAndClues[4].clues[2].showing}">?
                </td>
                <td data-question= "${catsAndClues[5].clues[2].question}" 
                      data-answer= "${catsAndClues[5].clues[2].answer}" 
                     data-showing= "${catsAndClues[5].clues[2].showing}">?
                </td>
            </tr>
            <tr>
                <td data-question= "${catsAndClues[0].clues[3].question}" 
                      data-answer= "${catsAndClues[0].clues[3].answer}" 
                     data-showing= "${catsAndClues[0].clues[3].showing}">?
                </td>
                <td data-question= "${catsAndClues[1].clues[3].question}" 
                      data-answer= "${catsAndClues[1].clues[3].answer}" 
                     data-showing= "${catsAndClues[1].clues[3].showing}">?
                </td>
                <td data-question= "${catsAndClues[2].clues[3].question}" 
                      data-answer= "${catsAndClues[2].clues[3].answer}" 
                     data-showing= "${catsAndClues[2].clues[3].showing}">?
                </td>
                <td data-question= "${catsAndClues[3].clues[3].question}" 
                      data-answer= "${catsAndClues[3].clues[3].answer}" 
                     data-showing= "${catsAndClues[3].clues[3].showing}">?
                </td>
                <td data-question= "${catsAndClues[4].clues[3].question}" 
                      data-answer= "${catsAndClues[4].clues[3].answer}" 
                     data-showing= "${catsAndClues[4].clues[3].showing}">?
                </td>
                <td data-question= "${catsAndClues[5].clues[3].question}" 
                      data-answer= "${catsAndClues[5].clues[3].answer}" 
                     data-showing= "${catsAndClues[5].clues[3].showing}">?
                </td>
            </tr>
            <tr>
                <td data-question= "${catsAndClues[0].clues[4].question}" 
                      data-answer= "${catsAndClues[0].clues[4].answer}" 
                     data-showing= "${catsAndClues[0].clues[4].showing}">?
                </td>
                <td data-question= "${catsAndClues[1].clues[4].question}" 
                      data-answer= "${catsAndClues[1].clues[4].answer}" 
                     data-showing= "${catsAndClues[1].clues[4].showing}">?
                </td>
                <td data-question= "${catsAndClues[2].clues[4].question}" 
                      data-answer= "${catsAndClues[2].clues[4].answer}" 
                     data-showing= "${catsAndClues[2].clues[4].showing}">?
                </td>
                <td data-question= "${catsAndClues[3].clues[4].question}" 
                      data-answer= "${catsAndClues[3].clues[4].answer}" 
                     data-showing= "${catsAndClues[3].clues[4].showing}">?
                </td>
                <td data-question= "${catsAndClues[4].clues[4].question}" 
                      data-answer= "${catsAndClues[4].clues[4].answer}" 
                     data-showing= "${catsAndClues[4].clues[4].showing}">?
                </td>
                <td data-question= "${catsAndClues[5].clues[4].question}" 
                      data-answer= "${catsAndClues[5].clues[4].answer}" 
                     data-showing= "${catsAndClues[5].clues[4].showing}">?
                </td>
            </tr>
            </tbody>
        </table>`);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */



function clickEvent(e) {
    let tile = e.target;
    let question = tile.dataset.question;
    let answer = tile.dataset.answer;
    let showing = tile.dataset.showing;
    // if showing is equal to string "null", change text of tile to question and 
    // add "question" string to showing property
    if (showing == "null"){
        tile.innerHTML = question;
        tile.setAttribute("data-showing", "question")
    }
    // if showing is equal to string "question", change text of tile to answer and 
    // add "answer" string to showing property
    else if (tile.dataset.showing =="question") {
        tile.innerHTML = answer;
        tile.setAttribute("data-showing", "answer")
    }
    // if showing answer, nothing happen
    else {return
    }
}


/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    // appends loading spinner div to #game-board and changes button text to Loading...
    $("#game-board").append(`<div class="spinner"></div>`);
    document.querySelector("#button").innerHTML = "Loading...";
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    // removes loading spinner and changes button text to Reset Game
    document.querySelector(".spinner").remove();
    document.querySelector("#button").innerHTML = "Reset Game";
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    //Reset the categories and catsAndClues arrays and innerHTML of #game-Board 
    //Shows loading spinner
    document.querySelector("#game-board").innerHTML = "";
    showLoadingView();
    categories = [];
    catsAndClues = [];

    // run get category ID's and get clues for all categories
    await getCategoryIds();
    for (let i=0;catsAndClues.length<6;i++){
        let tempVar = await getCategory(categories[i]);
        catsAndClues[i] = tempVar;
    }
    // remove loading spinner
    hideLoadingView();
    // create gameboard
    fillTable();
    //assign clickEvent function to each td to show question then answer
    $("td").on("click", clickEvent);

}
//add click function to start button to run SetupAndStart
document.querySelector("#button").addEventListener("click", setupAndStart)


