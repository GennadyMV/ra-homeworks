import PictureFont from "./PictureFont.js"

const FontSelector = ({fonts, selectedFont, onSelect}) => {
  const text = "abc";
  const fontsList = fonts.map(font =>
    <div className="grid center font-item">
      <input
        key={font.name}
        type="radio"
        name="font"
        id="abc1"
        onChange={() => onSelect(font)}
        checked={font === selectedFont}/>
        <label htmlFor="abc1" className="grid-1">
          <PictureFont text={text} path={font.path}/>
        </label>
    </div>
  );

  return (
    <div className="font-picker">
      {fontsList}
    </div>
  )
};

export default FontSelector