function Menu({items,opened}) {

  if (opened === true) {
    const itemsForUl = items.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>);
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
              {itemsForUl}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  );
}
