function getPrice(itm) {
  switch(itm.currency_code) {
    case 'USD':
      return '$' + itm.price;
    case 'EUR':
      return '€' + itm.price;
    default:
      return itm.price + ' ' + itm.currency_code;
  }
}


function getlevelClass(quantity) {
  const baseClass = 'item-quantity ';
  if (quantity <= 10) {
    return baseClass + 'level-low';
  }
  if (quantity <= 20) {
    return baseClass + 'level-medium';
  }
  return baseClass + 'level-high';
}


function Listing({items}) {

  if (items === null || items.length === 0) {
    return null;
  }

  const itemsList = items.map(it =>
    <div className="item" key={it.listing_id}>
      <div className="item-image">
        <a href={it.url}>
          <img src={it.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{it.title.length > 50 ? it.title.substring(0, 50) + "…": it.title}</p>
        <p className="item-price">{getPrice(it)}</p>
        <p className={getlevelClass(it.quantity)}>{it.quantity} left</p>
      </div>
    </div>
  );

  return (
    <div className="item-list">
      {itemsList}
    </div>
  );
}

Listing.defaultProps = {
  items: []
};

export default Listing;