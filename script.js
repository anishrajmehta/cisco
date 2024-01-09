let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    if (checkWin()) {
      setTimeout(() => {
        alert(currentPlayer + " wins!");
        resetGame();
      }, 100);
    } else if ([...cells].every(cell => cell.textContent !== "")) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
  currentPlayer = "X";
}