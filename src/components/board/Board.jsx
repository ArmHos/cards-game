import BoardList from "../board-list/BoardList.jsx";
import ScoreTable from "../score-table/ScoreTable.jsx";

const Board = () => {
  return (
    <div className="board">
      <ScoreTable />
      <BoardList />
    </div>
  );
};

export default Board;
