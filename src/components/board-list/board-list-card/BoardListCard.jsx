const BoardListCard = ({
  id,
  imageData,
  item,
  cardToggle,
  displayArg,
  openAll,
  isOpen,
}) => {
  const style1 = {
    backgroundImage: `url(${imageData[item]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const style2 = {
    backgroundImage: `url(${imageData[imageData.length - 1]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: openAll || isOpen ? `none` : `block`,
  };

  return (
    <div
      key={id}
      className="board-list-card"
      style={displayArg ? style2 : style1}
      onClick={cardToggle}
    ></div>
  );
};

export default BoardListCard;
