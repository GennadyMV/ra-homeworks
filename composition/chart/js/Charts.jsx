import ChartsSerie from "./ChartsSerie.jsx"

function compareNumbers(a, b) {
  return a - b;
}

const Charts = ({chartsSerieStyle, chartStyle, data, lableArray, max, colors, height, heightFunc, widthFunc, rightFunc}) => {
  let chartClassName = "Charts ";
  if (chartStyle) {
    chartClassName += chartStyle;
  }
  return (
    <div className={chartClassName}>
      { data.map((serie, serieIndex) => {
        const sum = serie.reduce((carry, current) => carry + current, 0);
        const sortedSerie = serie.slice(0);
        sortedSerie.sort(compareNumbers);

        return (
          <ChartsSerie
            mainStyle={chartsSerieStyle}
            max={max}
            colors={colors}
            lableArray={lableArray}
            serie={serie}
            serieIndex={serieIndex}
            height={height}
            heightFunc={heightFunc}
            widthFunc={widthFunc}
            sum={sum}
            rightFunc={rightFunc}
            sortedSerie={sortedSerie}
          />);
      }) }
    </div>
  );

};

export default Charts;