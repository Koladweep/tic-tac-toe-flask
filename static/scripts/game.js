let boardElement = document.getElementById("board");
let tossButton = document.getElementById("tossButton");
let displaymessagesElement = document.getElementById("displaymessages");
let resetElement = document.getElementById("reset");
let currentPlayer = "";
let playerSymbol = "✖"; // will try these in future🌞😎🔆🔅🌝🌜🌛🌛🥮🌙🌕☀️🌞🌤️
let computerSymbol = "⭕";//🌝
let gameStarted = false;

boardElement.style.pointerEvents = "auto";
tossButton.addEventListener("click", performToss);

let difficulty = "easy";

let difficultyElements = document.querySelectorAll("input[name='difficulty']");
for (let element of difficultyElements) {
  element.addEventListener("change", function (event) {
    difficulty = event.target.value;
  });
}

function performToss() {
  gameStarted = true;
  for (let element of difficultyElements) {
    element.disabled = true; // <-- disable the difficulty elements
  }
  let tossResult = Math.random() < 0.5 ? "heads" : "tails";
  currentPlayer = tossResult === "heads" ? playerSymbol : computerSymbol;
  displaymessagesElement.textContent = `${tossResult.toUpperCase()}! ${currentPlayer === playerSymbol ? "You" : "I"} go first 🙂.`;
  tossButton.style.display = "none";
  
  if (currentPlayer === computerSymbol) {
    setTimeout(computerMove, 500);
  }
}

boardElement.addEventListener("click", playerMove);

function playerMove(event) {
  if (gameStarted != true) { 
    displaymessagesElement.textContent = `🙂 Not fair! Toss first.`;
	displayMessage("Toss First!",'red',2000);
    return;
  }
	displaymessagesElement.textContent="🙂"
  let cell = event.target;
  if (cell.tagName === "TD" && cell.getAttribute("data-cell") === "") {
    cell.setAttribute("data-cell", currentPlayer);
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      displaymessagesElement.textContent = `( ˶ˆ⤙ˆ˵ ) You win🙂!`;
	  displayMessage('😀 Gouranga! You Win!!l!!','gold',3000);

      disableBoard();
      resetElement.style.display = "inline-block";
    } else if (checkTie()) {
      displaymessagesElement.textContent = `It's a tie! .🎀`;
	  displayMessage("It's a tie!🎀",'magenta',4000);
      disableBoard();
	  let tie=""
      resetElement.style.display = "inline-block";
    } else {
      currentPlayer = currentPlayer === playerSymbol ? computerSymbol : playerSymbol;
      if (currentPlayer === computerSymbol) {
        setTimeout(computerMove, 500);
      }
    }
  }
}
function computerMove() {
  let cells = Array.from(boardElement.querySelectorAll("td"));
  let availableCells = cells.filter((cell) => cell.getAttribute("data-cell") === "");
  let chosenCell;

  if (difficulty === "tough") {
    // Check if the computer can win
    for (let cell of availableCells) {
      cell.setAttribute("data-cell", currentPlayer);
      if (checkWin(currentPlayer)) {
        chosenCell = cell;
        break;
      } else {
        cell.setAttribute("data-cell", "");
      }
    }

    // Check if the player can win
    if (!chosenCell) {
      for (let cell of availableCells) {
        cell.setAttribute("data-cell", playerSymbol);
        if (checkWin(playerSymbol)) {
          chosenCell = cell;
          break;
        } else {
          cell.setAttribute("data-cell", "");
        }
      }
    }
  }

  if (difficulty === "medium") {
    // Choose the center if available
    if (!chosenCell) {
      let centerCell = cells[4];
      if (centerCell.getAttribute("data-cell") === "") {
        chosenCell = centerCell;
      }
    }

    // Choose a corner if available
    if (!chosenCell) {
      let cornerCells = [cells[0], cells[2], cells[6], cells[8]];
      let availableCornerCells = cornerCells.filter(
        (cell) => cell.getAttribute("data-cell") === ""
      );
      if (availableCornerCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableCornerCells.length);
        chosenCell = availableCornerCells[randomIndex];
      }
    }
  }

  // Choose a random available cell ... difficulty a
  if (!chosenCell) {
    let randomIndex = Math.floor(Math.random() * availableCells.length);
    chosenCell = availableCells[randomIndex];
  }

  if (chosenCell) {
    chosenCell.setAttribute("data-cell", currentPlayer);
    chosenCell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      displaymessagesElement.textContent = `I win!🙂`;
	  displayMessage('I win!🙂','gold',4000);
      disableBoard();
      resetElement.style.display = "inline-block";
    } else if (checkTie()) {
      displaymessagesElement.textContent = "It's a tie!🎀";
	  displayMessage("It's a tie! 🎀",'magenta',4000);
      disableBoard();
      resetElement.style.display = "inline-block";
    } else {
      currentPlayer = currentPlayer === playerSymbol ? computerSymbol : playerSymbol;
      if (currentPlayer === computerSymbol) {
        setTimeout(computerMove, 500);
      }
    }
  }
}

function checkWin(player) {
  let cells = Array.from(boardElement.querySelectorAll("td"));
  let rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return rows.some((row) =>
    row.every((i) => cells[i].getAttribute("data-cell") === player)
  );
}

function checkTie() {
  let cells = Array.from(boardElement.querySelectorAll("td"));
  return cells.every((cell) => cell.getAttribute("data-cell") !== "");
}

function disableBoard() {
  boardElement.style.pointerEvents = "none";
}

function resetGame() {
let cells = Array.from(boardElement.querySelectorAll("td"));
cells.forEach((cell) => {
cell.setAttribute("data-cell", "");
cell.textContent = "";
});
displaymessagesElement.textContent = "😀";
currentPlayer = "";
gameStarted = false;
tossButton.style.display = "inline-block";
displaymessagesElement.textContent = "🙂";
resetElement.style.display = "none";
boardElement.style.pointerEvents = "auto";
for (let element of difficultyElements) { // <-- enable the difficulty elements
element.disabled = false;
}
}

//script for jump back to Games page button
function addRandomDelay(callback, upper, lower) {//not in use at the moment 
    // Generate a random delay between upper and lower seconds
    var delay = Math.random() * (upper - lower)*1000 + lower*1000;
    // Use setTimeout to call the callback function after the delay
    setTimeout(callback, delay);
}
function loadFont(fontName, fontUrl) {
  // Create a new style element
  let style = document.createElement('style');
  style.innerHTML = `@import url('${fontUrl}');`;

  // Append the style element to the head of the document
  document.head.appendChild(style);

  // Wait for the font to be loaded
  document.fonts.load(`16px '${fontName}'`).then(() => {
    console.log(`Font '${fontName}' loaded from '${fontUrl}'.`);
  });
}

function displayMessage(message, color, duration) {
  // Load the 'A Goblin Appears!' font from Google Fonts
  loadFont('A Goblin Appears!', "https://fonts.googleapis.com/css2?family=A+Goblin+Appears%21&display=swap");

  // Create a new element to hold the message
  let messageElement = document.createElement('div');
  messageElement.innerHTML = message;
  messageElement.style.position = 'fixed';
  messageElement.style.top = '50%';
  messageElement.style.left = '50%';
  messageElement.style.transform = 'translate(-50%, -90%)';
  messageElement.style.fontSize = '3em';
  messageElement.style.fontFamily = "'Press Start 2P', cursive,wrap";



  // Set the color of the text
  if (color) {
    // Use the color entered by the user
    messageElement.style.color = color;
  } else {
    // Check if the browser is in dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Dark mode is active
      // Adapt the color of the text to be visible in dark mode
      messageElement.style.color = 'white';
    } else {
      // Light mode is active
      // Adapt the color of the text to be visible in light mode
      messageElement.style.color = 'black';
    }
  }
  
  // Append the element to the body
  document.body.appendChild(messageElement);
  
  // Animate the text
  let animationDuration = duration; // input
  let start = null;
  
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    
    // Change the opacity of the text based on the progress of the animation
    messageElement.style.opacity = 1 - progress / animationDuration;
    
    if (progress < animationDuration) {
      window.requestAnimationFrame(step);
    } else {
      // Remove the element from the body when the animation is complete
      document.body.removeChild(messageElement);
      messageElement = null;
    }
  }
  
  window.requestAnimationFrame(step);
}