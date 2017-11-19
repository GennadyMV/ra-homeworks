const ChartItem = ({mainStyle, style, itemIndex, item}) => {
  let className = "Charts--item ";
  if (mainStyle) {
    className += mainStyle;
  }
  return (
    <div className={className} style={ style } key={ itemIndex }>
      <b style={{ color: style.backgroundColor }}>{ item }</b>
    </div>
  );
};

export default ChartItem;
