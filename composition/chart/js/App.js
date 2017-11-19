import Legend from "./Legend.jsx"
import Charts from "./Charts.jsx"

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const series = ['France', 'Italy', 'England', 'Sweden', 'Germany'];
const labels = ['cats', 'dogs', 'horses', 'ducks', 'cows'];
const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: this.props.series,
			labels: this.props.labels,
			colors: this.props.colors
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		return (
			<section>
        <Charts
          data={data}
          lableArray={labels}
          max={max}
          colors={colors}
          height='250'
          heightFunc={(item) => item / (max) * 100 + '%'}
        />

        <Charts
          chartsSerieStyle='stacked'
          data={data}
          lableArray={labels}
          max={max}
          colors={colors}
          height='250'
          heightFunc={(item, sum) => item / sum * 100 + '%'}
        />

        <Charts
          chartsSerieStyle='layered'
          data={data}
          lableArray={labels}
          max={max}
          colors={colors}
          height='250'
          heightFunc={(item) => item / (max) * 100 + '%'}
          rightFunc={(item, sortedSerie, serie) => ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'}
        />


        <Charts
          chartStyle='horizontal'
          data={data}
          lableArray={series}
          max={max}
          colors={colors}
          height='auto'
          widthFunc={(item) => item / (max) * 100 + '%' }
        />

        <Legend labels={labels} colors={colors}/>

			</section>
		);
	}
}


ReactDOM.render(<App series={series} labels={labels} colors={colors}/>, document.getElementById('root'));