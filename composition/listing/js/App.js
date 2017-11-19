'use strict';

import ItemPainting from "./ItemPainting.jsx"

const App = ({items}) => (
  <main>
    { items.map(item => <ItemPainting item={item} />) }
  </main>
);

const items = [{
  title: 'Wool Hat',
  description: 'Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.',
  price: 19,
  type: 'unisex',
  pic: './i/sample71.jpg'
}, {
  title: 'Denim Shirt',
  description: 'I don\'t need to compromise on my principles, because they don\'t have the slightest bearing on what happens to me anyway.',
  price: 33,
  type: 'male',
  pic: './i/sample47.jpg'
}, {
  title: 'Wax Jacket',
  description: 'You know that is the real problem with nature, something\'s always stinging you or oozing mucous all over you. Let\'s go and watch TV.',
  price: 71,
  type: 'female',
  pic: './i/sample52.jpg'
}];

ReactDOM.render(
  <App items={items} />,
  document.querySelector('.listing')
);
