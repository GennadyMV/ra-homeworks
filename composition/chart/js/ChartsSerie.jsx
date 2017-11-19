import ChartItem from "./ChartItem.jsx"

const ChartsSerie = ({mainStyle, max, colors, lableArray, serie, serieIndex, height,
                       heightFunc, widthFunc, rightFunc, sum, sortedSerie}) => {
  let className = "Charts--serie ";
  if (mainStyle) {
    className += mainStyle;
  }

  return (
    <div className={className} key={ serieIndex }	style={{ height: height}}>
      <label>{ lableArray[serieIndex] }</label>
      { serie.map((item, itemIndex) => {
          const style = {
            backgroundColor: colors[itemIndex],
            opacity: (item/max + .05),
            zIndex: item
          };
          let newStyle = Object.assign({}, style);

          if (widthFunc) {
            newStyle = Object.assign(newStyle, {width: widthFunc(item)});
          }
          if (rightFunc) {
            newStyle = Object.assign(newStyle, {right: rightFunc(item, sortedSerie, serie)});
          }

          if (heightFunc) {
            newStyle = Object.assign(newStyle, {height: heightFunc(item, sum)});
          }
          return (<ChartItem mainStyle={mainStyle} style={newStyle} itemIndex={itemIndex} item={item}/>);
        }
      )}
    </div>
  );

};
export default ChartsSerie;