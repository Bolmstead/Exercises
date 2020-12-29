/** Connect Four
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)*/

const WIDTH = 7;
const HEIGHT = 6;
let currPlayer = 1; // active player: 1 or 2
let board = []; 
let gameOver = false; // if true, game is over
let whosUp = document.querySelector("#whosUp") // h1 to show whose turn it is
  // DONE TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
const htmlBoard = document.querySelector("#board");
// array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])*/

function makeBoard() {
  // DONE TODO: set "board" to empty HEIGHT x WIDTH matrix array
	for (let i = 0; i < HEIGHT; i++) {
		board[i] = [];
		for (let j = 0; j < WIDTH; j++) {
			board[i][j] = null;
		}
	}
	return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  // DONE TODO: add comment for this code: 
  // Section of function creates 
  // a top row where a player clicks to drop their piece in selected column.
  // Adds a click event listener and gives it an "id"
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: add comment for this code: Section creates rows and cells by creating
  // tr's and td's. Each row and cell is iterated and provided with its own unique id (y,x)
  // each cell is appended to its row then each row appended to the board.
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // DONE TODO: write the real version of this, rather than always returning 0
  // Given a column, x, return the lowest empty y (or null if filled)
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  // DONE TODO: make a div and insert into correct table cell
  // assigns the piece class and either "pl1" or "pl2" depending on currPlayer
  let piece = document.createElement("div");
  piece.classList.add("piece");
  piece.setAttribute("class", `pl${currPlayer}`);

  let spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

/** endGame: announce game end */
function endGame(msg) {
  // Done TODO: pop up alert message
  whosUp.innerHTML = msg;
  // add blinking text
  whosUp.classList.add("blink");
  gameOver = true;
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  if (gameOver) return;
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  board[y][x] = currPlayer;
  // DONE!! TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // DONE TODO: check if all cells in board are filled; if so call endGame
  // if the total number of elements with .pl1 and .pl2 classes is equal to the 
  // total spots on board, game results in a tie.
  if ((document.querySelectorAll('.pl1').length + document.querySelectorAll('.pl2').length) === (HEIGHT * WIDTH)){
  // remove pl1 and pl2 classes to show neutral colored "tie game" text
    if(whosUp.classList.contains("pl1Title")){whosUp.classList.remove("pl1Title")};
    if(whosUp.classList.contains("pl2Title")){whosUp.classList.remove("pl2Title")};
    return endGame(`Tie Game! No one won :(`);
  }

  // DONE TODO: switch currPlayer 1 <-> 2
  if (currPlayer === 1) {currPlayer = 2}
  else (currPlayer = 1);

  // run whosUpFunc() to display players turn with every handleClick event
  whosUpFunc();
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // DONE TODO: read and understand this code. Add comments to help you.
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // defines variables of winning horizontal, vertical, and diagaonal 4-in-a-rows 
      // no matter where placed on board.
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      // if a winning combination is found, return true
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

// below function displays text showing whose turn it is
function whosUpFunc(){
  // display h1 to show player's turn
  whosUp.innerText = `Player ${currPlayer}'s turn`
  // change color of text to current player's game piece color
  // if player 1's turn, add pl1Title class and remove pl2Title class
  if (currPlayer === 1) {
    whosUp.classList.add("pl1Title");
    whosUp.classList.remove("pl2Title");
  }
  // if player 2's turn, add pl2Title class and remove pl1Title class
  if (currPlayer === 2) {
    whosUp.classList.add("pl2Title");
    whosUp.classList.remove("pl1Title");
  }
};

// add click event to button which resets game by reloading page
resetBtn = document.querySelector("#button");
resetBtn.addEventListener("click", function resetGame() {
  location.reload()
});

// execute functions
makeBoard();
makeHtmlBoard();


document.addEventListener("click", function(e){console.dir(e.target);console.log(currPlayer)});
