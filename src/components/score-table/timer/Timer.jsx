import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  useEffect(() => {
    if (timer !== 0) {
      const id = setInterval(() => {
        dispatch({
          type: "set_timer",
        });
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, []);
  let { minutes, seconds } = parseSeconds(timer);

  return (
    <div className="timer">
      <span>Time</span>
      <h2>
        {minutes}:{seconds.toString().length === 2 ? seconds : `0${seconds}`}
      </h2>
    </div>
  );
};

function parseSeconds(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec - minutes * 60;

  return {
    minutes,
    seconds,
  };
}

export default Timer;
