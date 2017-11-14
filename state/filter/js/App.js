'use strict'

import Portfolio from "./Portfolio.jsx"
import Toolbar from "./Toolbar.jsx"

const FILTER_ALL = "All";

const filters = [FILTER_ALL, "Websites", "Flayers", "Business Cards"];
const projects = [{
  img: "./i/mon.jpg",
  category: "Business Cards"
}, {
  img: "./i/200.jpg",
  category: "Websites"
}, {
  img: "./i/emi_haze.jpg",
  category: "Websites"
}, {
  img: "./i/codystretch.jpg",
  category: "Websites"
}, {
  img: "./i/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "./i/place200x290.png",
  category: "Websites"
}, {
  img: "./i/200.jpg",
  category: "Websites"
}, {
  img: "./i/transmission.jpg",
  category: "Business Cards"
}, {
  img: "./i/place200x290_1.png",
  category: "Websites"
}, {
  img: "./i/place200x290_2.png",
  category: "Flayers"
}, {
  img: "./i/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "./i/dia.jpg",
  category: "Business Cards"
}, {
  img: "./i/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "./i/emi_haze.jpg",
  category: "Websites"
}, {
  img: "./i/transmission.jpg",
  category: "Business Cards"
}, {
  img: "./i/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "./i/place200x290_3.png",
  category: "Flayers"
}];

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selectedFilter: FILTER_ALL};
    }

    handleFilterSelection(filter) {
      console.log(filter);
      this.setState({
        selectedFilter: filter
      });
    }

    getFilteredProjects() {
      return this.state.selectedFilter === FILTER_ALL ?
        this.props.projects :
        this.props.projects.filter(prj => prj.category === this.state.selectedFilter);
    }

    render() {
      return (
        <div>
          <Toolbar
            filters={this.props.filters}
            selected={this.state.selectedFilter}
            onSelectFilter={this.handleFilterSelection.bind(this)} />
          <Portfolio projects={this.getFilteredProjects()} />
        </div>
      );
    }
  }


  ReactDOM.render(
    <App filters={filters} projects={projects} />,
    document.getElementById('root')
  );
