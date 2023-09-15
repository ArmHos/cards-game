import "./App.scss";
import { useSelector } from "react-redux";
import Board from "./components/board/Board";
import GameDifficultyModal from "./components/game-difficulty-modal/GameDifficultyModal";

function App() {
  const timer = useSelector((state) => state.timer);
  const score = useSelector((state) => state.score);
  const maxScore = useSelector((state) => {
    return Math.floor((state.map.length * state.map[0].length) / 2);
  });

  const difficultyModalIsOpen = useSelector(
    (state) => state.open_difficulty_modal
  );

  return (
    <div className="App">
      {!difficultyModalIsOpen && <Board />}
      <div className="modal" style={{ display: timer === 0 ? "flex" : "none" }}>
        <div className="modal-content">
          <div className="modal-content-title">
            <span>
              {score === maxScore
                ? `You win your score is ${score}`
                : `Your score is ${score}`}
            </span>
          </div>
          <button
            onClick={(e) => {
              window.location.reload();
              e.target.style.transform = "translate(12px, 10px)";
              setTimeout(() => {
                e.target.style.transform = "translate(0,0)";
              });
            }}
          >
            Play Again
          </button>
        </div>
      </div>
      {difficultyModalIsOpen && <GameDifficultyModal />}
    </div>
  );
}

export default App;
