"use client";
import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const isTie = board.every((cell) => cell !== null) && !winner;

  const handleClick = (index) => {
    if (board[index] || winner || isTie) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tic Tac Toe</h1>
      <div style={styles.board}>
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              ...styles.cell,
              background:
                cell === "X" ? "#4caf50" : cell === "O" ? "#f44336" : "#fff",
            }}
          >
            {cell}
          </div>
        ))}
      </div>
      <div style={styles.info}>
        {winner ? (
          <h2 style={styles.result}>Winner: {winner}</h2>
        ) : isTie ? (
          <h2 style={styles.result}>It's a Tie!</h2>
        ) : (
          <h2 style={styles.nextPlayer}>Next Player: {isXNext ? "X" : "O"}</h2>
        )}
      </div>
      <button onClick={resetGame} style={styles.resetButton}>
        Restart Game
      </button>
      <div style={styles.footer}>
        <p>
          Created with ❤️ by{" "}
          <a
            href="https://telegram.dog/CoderAryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoderAryan
          </a>
        </p>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 120px)",
    gridTemplateRows: "repeat(3, 120px)",
    gap: "10px",
  },
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
  info: {
    marginTop: "20px",
    textAlign: "center",
  },
  nextPlayer: {
    fontSize: "24px",
    color: "#555",
  },
  result: {
    fontSize: "28px",
    color: "#1e88e5",
  },
  resetButton: {
    marginTop: "30px",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    background: "#1e88e5",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "14px",
    color: "#888",
  },
};
