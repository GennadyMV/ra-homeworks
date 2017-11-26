'use strict';

import SearchBox from "./SearchBox.js"
import Bookshelf from "./Bookshelf.js"
import BookApi from "./BookApi.js"

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: "React",
            books: []
        }
    }

    componentDidMount () {
        BookApi.query(this.state.query).then(books => {
            this.setState({books})
        })
    }

    filterBooks(query) {
      BookApi.query(query).then(books => {
          this.setState({query: query, books})
      });
    }

    render () {
        return (
            <div className="App">
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            <SearchBox value={this.state.query}
                                filterBooks={this.filterBooks.bind(this)}/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        <Bookshelf books={this.state.books} filterBooks={this.filterBooks.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
