const TextRenderLine = ({value, onChange}) => {
  let text;
	return (
		<div className="type-text">
      <textarea
        name="text"
        id="font-text"
        cols="30"
        rows="2"
        placeholder="Введите текст для футболки"
        ref={value => text = value}
        value={value}
        onChange={() => onChange(text.value)}
      />
		</div>
	);
};

export default TextRenderLine