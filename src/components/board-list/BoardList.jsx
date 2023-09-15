import { useDispatch, useSelector } from "react-redux";
import "./BoardList.scss";
import { useEffect, useRef, useState } from "react";
import sound from "../../assets/audio/Card-flip-sound-effect.mp3";
import BoardListCard from "./board-list-card/BoardListCard";

const BoardList = () => {
  const boardData = useSelector((state) => state.map);
  const imageData = useSelector((state) => state.images);
  const openAll = useSelector((state) => state.openAll);
  const width = useSelector((state) => state.width);
  const score = useSelector((state) => state.score);

  const [openCards, setOpenCards] = useState([]);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const toggle = (item, id, isOpen) => {
    dispatch({ type: "change_is_open", payload: { id: [id] } });
    if (openCards.length < 2) {
      setOpenCards((prev) => {
        return [
          ...prev,
          {
            item,
            id,
            isOpen,
          },
        ];
      });
    } else {
      setOpenCards(() => {
        return [
          {
            item,
            id,
            isOpen,
          },
        ];
      });
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch({ type: "set_all_open" });
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  useEffect(() => {
    console.log(openCards);
    if (openCards.length === 2) {
      if (openCards[0].item === openCards[1].item) {
        dispatch({ type: "increment_score" });
      } else {
        setTimeout(() => {
          dispatch({
            type: "change_is_open",
            payload: { id: [openCards[0].id, openCards[1].id] },
          });
          setOpenCards([]);
        }, 800);
      }
    }
  }, [openCards]);

  useEffect(() => {
    (function () {
      let size = boardData.length * boardData[0].length;
      const maxScore = Math.floor(size / 2);
      if (maxScore === score) {
        dispatch({
          type: "set_timer",
          payload: {
            timer: 0,
          },
        });
      }
    })();
  }, [score]);

  return (
    <div className="board-list" style={{ width: `${width}px` }}>
      {boardData.map((array) => {
        return array.map(({ item, id, isOpen }) => {
          return (
            <div key={id} className={`board-list-card-${id}`}>
              <audio src={sound} ref={audioRef}></audio>
              {(openAll || isOpen) && (
                <BoardListCard
                  id={id}
                  imageData={imageData}
                  item={item}
                  cardToggle={() => {
                    if (!isOpen) {
                      toggle(item, id, isOpen);
                    }
                  }}
                  openAll={openAll}
                  isOpen={isOpen}
                />
              )}
              {!openAll && !isOpen && (
                <BoardListCard
                  id={id}
                  imageData={imageData}
                  item={item}
                  cardToggle={() => {
                    toggle(item, id, isOpen);
                    audioRef.current.play();
                  }}
                  displayArg={true}
                  openAll={openAll}
                  isOpen={isOpen}
                />
              )}
            </div>
          );
        });
      })}
    </div>
  );
};

export default BoardList;
