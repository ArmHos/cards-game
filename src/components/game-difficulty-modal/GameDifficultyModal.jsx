import { useDispatch } from "react-redux";
import "./GameDifficultyModal.scss";
const GameDifficultyModal = () => {
  const dispatch = useDispatch();

  const buttonHandler = (e) => {
    const level = e.target.textContent
      .split("")
      .map((letter, i) => {
        if (i === 0) {
          letter = letter.toLowerCase();
        }
        return letter;
      })
      .join("");

    dispatch({
      type: "change_difficulty",
      payload: {
        level,
        setOpen: false,
      },
    });

  };
  return (
    <div className="game-difficulty-modal">
      <div className="box">
        <div className="box__line box__line--top"></div>
        <div className="box__line box__line--right"></div>
        <div className="box__line box__line--bottom"></div>
        <div className="box__line box__line--left"></div>
        <div className="buttons-container">
          <div className="wrapper">
            <div className="container">
              <h1>Cards</h1>
            </div>
          </div>
          <button onClick={buttonHandler}>Easy</button>
          <button onClick={buttonHandler}>Medium</button>
          <button onClick={buttonHandler}>Hard</button>
        </div>
      </div>
    </div>
  );
};

export default GameDifficultyModal;
