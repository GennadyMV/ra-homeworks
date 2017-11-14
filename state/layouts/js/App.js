'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

import IconSwitch from "./IconSwitch.jsx"
import CardsView from "./CardsView.jsx"
import ListView from "./ListView.jsx"
import ShopCard from "./ShopCard.jsx"
import ShopItem from "./ShopItem.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedLayout: VIEW_MODULE};
  }

  handleIconSwitch() {
    const selectedMode = this.state.selectedLayout === VIEW_MODULE ? VIEW_LIST : VIEW_MODULE;
    console.log(`сменился тип вывода ${selectedMode}`);
    this.setState({
      selectedLayout: selectedMode
    });
  };

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.selectedLayout}
            onSwitch={this.handleIconSwitch.bind(this)} />
        </div>
        {this.renderLayout()}
      </div>
    );
  }

  renderLayout() {
    if (VIEW_MODULE === this.state.selectedLayout) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, true)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, false)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "./i/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "./i/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "./i/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "./i/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "./i/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "./i/5.jpg"
}];

const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4
};

ReactDOM.render(
  <App layout={cardsLayout} products={products} />,
  document.getElementById('root')
);
