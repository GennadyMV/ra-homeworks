'use strict';

import PictureFont from "./PictureFont.js"
import FontSelector from "./FontSelector.js"
import TextRenderLine from "./TextRenderLine.js"
import AbcApi from "./AbcApi.js"

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fonts: [],
            selectedFont: null,
            text: ""
        }
    }

    componentDidMount () {
      this.setState({fonts: AbcApi.getFonts()});
    }

    selectFont(selectedFont) {
      this.setState({selectedFont});
    }

    setText(text) {
      this.setState({text});
    }

    renderLines () {
        if (!this.state.selectedFont) return null;
        return this.state.text.split("\n").map((line, i) => {
            return (
                <div className="grid" key={`line-${i}`}>
                    <PictureFont text={line} path={this.state.selectedFont.path}/>
                </div>
            )
        });
    };

    render () {
        return (
            <div className="App">
                <div className="select-font">
                    <h2 className={this.state.selectedFont ? 'hidden' : ''}>Выберите шрифт</h2>
                    <FontSelector fonts={this.state.fonts} onSelect={this.selectFont.bind(this)}
                                  selectedFont={this.state.selectedFont}/>
                </div>
                {this.state.selectedFont
                && <TextRenderLine value={this.state.text} onChange={this.setText.bind(this)}/>
                    }
                {this.state.text && (
                    <div className="render-result">
                        {this.renderLines()}
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);