# Tic-Tac-Toe
A game made in the process of learning simple AI and web development the fun way, with the assistance of A.I. tools- chatGPT Bing and Mozilla Developers' Network. It is based on the rules of the traditional game of same name. 

1.**Overview**
------------

Tic-Tac-Toe is a simple Player Vs A.I. game where both take turns placing their symbol (Player is ❌ and AI is ⭕) on a 3x3 grid. The player who succeeds in placing three of their symbols in a row, column, or diagonal wins the game.

2.****Implementation****
------------------

The game is implemented using HTML, CSS, and JavaScript. The HTML code defines the structure of the page, including the game board, buttons for resetting the game and changing difficulty levels, and elements for displaying messages to the player. The CSS code defines the styles for these elements, such as their size, position, and color. The JavaScript code defines the game's logic and behavior, such as how to handle player moves, check for a win or draw, and reset the game.

3.**Features**
------------

One of the key features of this game is its AI opponent, which uses different heuristics and algorithms to determine its moves depending on the selected difficulty level.

*  At the "easy" level, the AI chooses a random available cell.
*  At the "medium" level, it tries to choose the center or a corner cell if available(This increases the probability of winning.
*  At the "tough" level, it uses a simplified version of the minimax algorithm to simulate all possible moves and outcomes and choose a move that maximizes its chances of winning while minimizing its chances of losing by **even trying to block the Player from winning.😃**
*  The game cannot start without a toss and you cannot backout once it begins 😈🔱.


4.**Behavior**
------------

The game's behavior is controlled by several variables and functions defined in the JavaScript code. When the user clicks on a cell in the game board or on one of the buttons (e.g., reset or toss), an event listener function is called that updates the game state and HTML elements accordingly. For example, when a player clicks on an empty cell in the game board, the \`playerMove\` function is called. This function updates the content of the clicked cell to show the current player's symbol (always "X") and checks if the current player has won or if there is a tie. If neither of these conditions is met, it switches to the other player (the computer) and calls the \`computerMove\` function. **The \`computerMove\` function uses different heuristics to determine its move depending on the selected difficulty level (as described above). Once it has chosen a move, it updates the corresponding cell in the game board with its symbol (always "O") and checks if it has won or if there is a tie. Overall, the game's behavior is determined by a combination of user interactions (e.g., clicking on cells or buttons) and internal logic (e.g., checking for wins or ties) implemented in JavaScript.**

5.**Credits:**
------------

First and foremost expressions of gratitude will always due to my forbearing parents, my preceptors my teachers, and the supreme personality of Godhead, whom I owe this life to. It is only with the life forcegave I gained from them, am I able to engage in any activity. The values I recieved from them inspire me to do good. Any shortcoming in me is my fault and any good to be seen is their mercy.
        
 ***Tailored with the help of-***

1. **ChatGPT 3.5:** The friendly developer copilot and the interactive developer book that will finally make you feel, "I'ts time I read documentation." It exposes you to multiple existing technical approaches to solve a problem.

2. **Bing:** All the javascript and logic was developed by using the Microsoft Bing Chatbot that is built on ChatGPT-4. It helped Ankle and stil is a very helpful javascript learning tool for me by giving code to my thoughts, then helping Mr debug and tailor it to fit my use case.Ithelped Mr get started with javascript.

3. **Mozilla developers network:**
Helped me with the HTML, CSS, colors(learning) and project ideation(I'm now learning to do this before getting into the tech). MDN Got me started with web development

4. **Github Copilot:** Helped me fix the messy documentation.html file by formatting the code and locating the glitches in nested lists.

5. Last but not the least: A very friendly VSCode extention- **HTML Preview v0.2.5 by George Oliveira.** It really can save time. I wish I had used this earlier while working on project. It could have saved so much time and so much unnecessary forking for features.

 **This documentation was rendered in Markdown with the help of *(https://codebeautify.org/).***
