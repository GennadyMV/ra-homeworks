const SearchBox = (props) => {
  let searchValue;
  const id = "filterByValue";
  return (
    <input
      id={id}
      type="text"
      placeholder="Поиск по названию или автору"
      value={props.value}
      ref={field => searchValue = field}
      onChange={() => props.filterBooks(searchValue.value)}
      />
  );
};

export default SearchBox;