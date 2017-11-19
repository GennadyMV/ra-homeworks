import Block from "./Block.jsx"

const Accordion = ({title, blocks}) => {
    return (
      <div id="accordian">
        <main className="main">
          <h2 className="title">{title}</h2>
          {blocks.map(block =>  <Block content={block}/>)}
        </main>
      </div>
    );
};

export default Accordion