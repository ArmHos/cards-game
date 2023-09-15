import "./ScoreTable.scss";
import Timer from "./timer/Timer";
import Score from "./score/Score";

const ScoreTable = () => {
  return (
    <header>
      <div className="score-table">
        <Score />
        <Timer />
      </div>
    </header>
  );
};

export default ScoreTable;
