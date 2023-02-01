const Star = (props) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 210 200"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
      }}
    >
      <polygon
        points="100,10 40,198 190,78 10,78 160,198"
        style={{ fill: props.fav ? "yellow" : "gray" }}
      />
    </svg>
  );
};

export default Star;
