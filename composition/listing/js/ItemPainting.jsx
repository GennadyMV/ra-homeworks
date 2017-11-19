import Item from "./Item.jsx"

const colors = {
  'unisex': "black",
  'male' : "blue",
  'female' : "orange"
};

const ItemPainting = ({item}) => {
  return <Item color={colors[item.type]} item={item}/>;
};

export default ItemPainting;



