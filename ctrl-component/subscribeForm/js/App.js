'use strict';

import SubscribeForm from "./SubscribeForm.js"

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <SubscribeForm/>
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
