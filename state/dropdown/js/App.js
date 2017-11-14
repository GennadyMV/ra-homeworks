  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {active: props.options[0], open: false};
    }

    handleChange(option) {
      this.setState({
        active: option
      });
    }

    toggleOpen() {
      this.setState({
        open: !this.state.open
      });
    }

    render() {
      return (
        <div className="container">
          <div className={`dropdown-wrapper ${this.state.open ? "open" : ""}`} >
            <button className={"btn"} onClick={this.toggleOpen.bind(this)} >
              <span>Account Settings</span>
              <i className="material-icons">public</i>
            </button>
            <ul className="dropdown">
              {this.props.options.map((option, i) => (
                <li
                  className={option === this.state.active ? "active" : ""}
                  onClick={this.handleChange.bind(this, option)} >
                  <a href="#">{option}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }

  const options = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"];
  ReactDOM.render(
    <App options={options} />,
    document.getElementById('root')
  );
