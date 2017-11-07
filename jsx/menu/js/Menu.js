function Menu({items,opened}) {

  const shortid = require('shortid');

  const itemsForUl = items.map((item, index) => <li key={shortid.generate()}><a href={item.href}>{item.title}</a></li>);
  return (
    <div className={opened ? 'menu menu-open' : 'menu'}>
      <div className="menu-toggle"><span></span></div>
        {opened && (
        <nav>
            <ul>
              {itemsForUl}
            </ul>
          </nav>
        )}
    </div>
  );
}

export default Menu;
