import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector((state) => state.score);

  return (
    <div className="score">
      <span>Score</span>
      <b>{score}</b>
    </div>
  );
};

export default Score;
