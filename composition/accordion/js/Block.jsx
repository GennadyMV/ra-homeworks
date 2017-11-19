const baseClass = 'section';
const openClass = `${baseClass} open`;
const closeClass = `${baseClass}`;

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true }
  }

  toggleSection() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const sectionClassName = this.state.hidden ? closeClass : openClass;
    return (
      <section className={sectionClassName}>
        <button onClick={this.toggleSection.bind(this)}>toggle</button>
        <h3 className="sectionhead">{this.props.content.title}</h3>
        <div className="articlewrap">
          <div className="article">
            {this.props.content.text}
          </div>
        </div>
      </section>
    );
  }
}

export default Block;