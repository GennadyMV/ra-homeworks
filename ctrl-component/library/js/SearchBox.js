const SearchBox = (props) => {
  const id = "filterByValue";
  return (
    <input
      id={id}
      type="text"
      placeholder="Поиск по названию или автору"
      value={props.value}
      onChange={({target}) => props.filterBooks(target.value)}
      />
  );
};

export default SearchBox;