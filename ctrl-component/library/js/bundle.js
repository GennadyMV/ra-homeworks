/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************!*\
  !*** ./ctrl-component/library/js/App.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _SearchBox = __webpack_require__(/*! ./SearchBox.js */ 1);\n\nvar _SearchBox2 = _interopRequireDefault(_SearchBox);\n\nvar _Bookshelf = __webpack_require__(/*! ./Bookshelf.js */ 2);\n\nvar _Bookshelf2 = _interopRequireDefault(_Bookshelf);\n\nvar _BookApi = __webpack_require__(/*! ./BookApi.js */ 4);\n\nvar _BookApi2 = _interopRequireDefault(_BookApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            query: \"React\",\n            books: []\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            _BookApi2.default.query(this.state.query).then(function (books) {\n                _this2.setState({ books: books });\n            });\n        }\n    }, {\n        key: \"filterBooks\",\n        value: function filterBooks(query) {\n            var _this3 = this;\n\n            _BookApi2.default.query(query).then(function (books) {\n                _this3.setState({ query: query, books: books });\n            });\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                { className: \"App\" },\n                React.createElement(\n                    \"div\",\n                    { className: \"search-books\" },\n                    React.createElement(\n                        \"div\",\n                        { className: \"search-books-bar\" },\n                        React.createElement(\n                            \"div\",\n                            { className: \"search-books-input-wrapper\" },\n                            React.createElement(_SearchBox2.default, { value: this.state.query,\n                                filterBooks: this.filterBooks.bind(this) })\n                        )\n                    ),\n                    React.createElement(\n                        \"div\",\n                        { className: \"search-books-results\" },\n                        React.createElement(_Bookshelf2.default, { books: this.state.books, filterBooks: this.filterBooks.bind(this) })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL0FwcC5qcz80ODQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi9TZWFyY2hCb3guanNcIlxuaW1wb3J0IEJvb2tzaGVsZiBmcm9tIFwiLi9Cb29rc2hlbGYuanNcIlxuaW1wb3J0IEJvb2tBcGkgZnJvbSBcIi4vQm9va0FwaS5qc1wiXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5OiBcIlJlYWN0XCIsXG4gICAgICAgICAgICBib29rczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgQm9va0FwaS5xdWVyeSh0aGlzLnN0YXRlLnF1ZXJ5KS50aGVuKGJvb2tzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2tzfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCb29rcyhxdWVyeSkge1xuICAgICAgQm9va0FwaS5xdWVyeShxdWVyeSkudGhlbihib29rcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IHF1ZXJ5LCBib29rc30pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib29rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib29rcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJvb2tzLWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHZhbHVlPXt0aGlzLnN0YXRlLnF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCb29rcz17dGhpcy5maWx0ZXJCb29rcy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm9va3MtcmVzdWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tzaGVsZiBib29rcz17dGhpcy5zdGF0ZS5ib29rc30gZmlsdGVyQm9va3M9e3RoaXMuZmlsdGVyQm9va3MuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGN0cmwtY29tcG9uZW50L2xpYnJhcnkvanMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFSQTtBQURBO0FBZUE7Ozs7QUF0Q0E7QUFDQTtBQXdDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** ./ctrl-component/library/js/SearchBox.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SearchBox = function SearchBox(props) {\n  var searchValue = void 0;\n  var id = \"filterByValue\";\n  return React.createElement(\"input\", {\n    id: id,\n    type: \"text\",\n    placeholder: \"\\u041F\\u043E\\u0438\\u0441\\u043A \\u043F\\u043E \\u043D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u044E \\u0438\\u043B\\u0438 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0443\",\n    value: props.value,\n    ref: function ref(field) {\n      return searchValue = field;\n    },\n    onChange: function onChange() {\n      return props.filterBooks(searchValue.value);\n    }\n  });\n};\n\nexports.default = SearchBox;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL1NlYXJjaEJveC5qcz81MTY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlYXJjaEJveCA9IChwcm9wcykgPT4ge1xuICBsZXQgc2VhcmNoVmFsdWU7XG4gIGNvbnN0IGlkID0gXCJmaWx0ZXJCeVZhbHVlXCI7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICBpZD17aWR9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0L/QviDQvdCw0LfQstCw0L3QuNGOINC40LvQuCDQsNCy0YLQvtGA0YNcIlxuICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgcmVmPXtmaWVsZCA9PiBzZWFyY2hWYWx1ZSA9IGZpZWxkfVxuICAgICAgb25DaGFuZ2U9eygpID0+IHByb3BzLmZpbHRlckJvb2tzKHNlYXJjaFZhbHVlLnZhbHVlKX1cbiAgICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGN0cmwtY29tcG9uZW50L2xpYnJhcnkvanMvU2VhcmNoQm94LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./ctrl-component/library/js/Bookshelf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Book = __webpack_require__(/*! ./Book.js */ 3);\n\nvar _Book2 = _interopRequireDefault(_Book);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Bookshelf = function Bookshelf(_ref) {\n    var books = _ref.books,\n        filterBooks = _ref.filterBooks;\n\n    return React.createElement(\n        \"div\",\n        { className: \"bookshelf\" },\n        React.createElement(\n            \"div\",\n            { className: \"bookshelf-books\" },\n            React.createElement(\n                \"ol\",\n                { className: \"books-grid\" },\n                books.map(function (book) {\n                    return React.createElement(\n                        \"li\",\n                        { key: \"book-\" + book.id },\n                        React.createElement(_Book2.default, { book: book, filterBooks: filterBooks })\n                    );\n                })\n            )\n        )\n    );\n};\n\nexports.default = Bookshelf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL0Jvb2tzaGVsZi5qcz82ZjdmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9Cb29rLmpzXCJcblxuY29uc3QgQm9va3NoZWxmID0gKHtib29rcywgZmlsdGVyQm9va3N9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rc2hlbGZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va3NoZWxmLWJvb2tzXCI+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJvb2tzLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2tzLm1hcChib29rID0+ICg8bGkga2V5PXtgYm9vay0ke2Jvb2suaWR9YH0+PEJvb2sgYm9vaz17Ym9va30gZmlsdGVyQm9va3M9e2ZpbHRlckJvb2tzfS8+PC9saT4pKX1cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rc2hlbGZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY3RybC1jb21wb25lbnQvbGlicmFyeS9qcy9Cb29rc2hlbGYuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************!*\
  !*** ./ctrl-component/library/js/Book.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Book = function Book(_ref) {\n  var book = _ref.book,\n      filterBooks = _ref.filterBooks;\n\n  var backgroundImage = book.imageLinks && \"url(\" + book.imageLinks.thumbnail + \")\";\n  var style = {\n    width: 128,\n    height: 193,\n    backgroundImage: backgroundImage\n  };\n  return React.createElement(\n    \"div\",\n    { className: \"book\" },\n    React.createElement(\n      \"div\",\n      { className: \"book-top\" },\n      React.createElement(\"div\", { className: \"book-cover\", style: style })\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"book-title\" },\n      book.title\n    ),\n    book.authors && React.createElement(\n      \"div\",\n      { className: \"book-authors\" },\n      book.authors.map(function (author) {\n        return React.createElement(\n          \"button\",\n          {\n            key: author,\n            value: author,\n            onClick: function onClick() {\n              return filterBooks(author);\n            },\n            className: \"book-author\" },\n          author\n        );\n      })\n    )\n  );\n};\n\nexports.default = Book;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL0Jvb2suanM/ZjA0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb29rID0gKHtib29rLCBmaWx0ZXJCb29rc30pID0+IHtcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9IGJvb2suaW1hZ2VMaW5rcyAmJiBgdXJsKCR7Ym9vay5pbWFnZUxpbmtzLnRodW1ibmFpbH0pYDtcbiAgbGV0IHN0eWxlID0ge1xuICAgIHdpZHRoOiAxMjgsXG4gICAgaGVpZ2h0OiAxOTMsXG4gICAgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kSW1hZ2VcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWNvdmVyXCIgc3R5bGU9e3N0eWxlfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay10aXRsZVwiPntib29rLnRpdGxlfTwvZGl2PlxuICAgICAgICB7Ym9vay5hdXRob3JzICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWF1dGhvcnNcIj5cbiAgICAgICAgICAgIHtib29rLmF1dGhvcnMubWFwKGF1dGhvciA9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXthdXRob3J9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWx0ZXJCb29rcyhhdXRob3IpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2stYXV0aG9yXCI+e2F1dGhvcn1cbiAgICAgICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY3RybC1jb21wb25lbnQvbGlicmFyeS9qcy9Cb29rLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQURBO0FBTkE7QUFtQkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************************************!*\
  !*** ./ctrl-component/library/js/BookApi.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar api = \"https://www.googleapis.com/books/v1\";\nvar headers = {\n    'Accept': 'application/json'\n};\n\nvar BookApi = function () {\n    function BookApi() {\n        _classCallCheck(this, BookApi);\n    }\n\n    _createClass(BookApi, null, [{\n        key: 'query',\n\n\n        /**\n         * Performs a book search and maps the result to an array of book info + id.\n         * Reference https://developers.google.com/books/docs/v1/reference/volumes/list\n         * @param query\n         * @returns {Promise.<TResult>}\n         */\n        value: function query(_query) {\n            return fetch(api + '/volumes?q=' + _query, { headers: headers }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                return data.items ? data.items.map(function (item) {\n                    var book = item.volumeInfo;\n                    book.id = item.id;\n                    return book;\n                }) : [];\n            });\n        }\n    }]);\n\n    return BookApi;\n}();\n\nexports.default = BookApi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL0Jvb2tBcGkuanM/ZmFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxXCI7XG5jb25zdCBoZWFkZXJzID0ge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbn07XG5cbmNsYXNzIEJvb2tBcGkge1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBib29rIHNlYXJjaCBhbmQgbWFwcyB0aGUgcmVzdWx0IHRvIGFuIGFycmF5IG9mIGJvb2sgaW5mbyArIGlkLlxuICAgICAqIFJlZmVyZW5jZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9ib29rcy9kb2NzL3YxL3JlZmVyZW5jZS92b2x1bWVzL2xpc3RcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48VFJlc3VsdD59XG4gICAgICovXG4gICAgc3RhdGljIHF1ZXJ5IChxdWVyeSkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpfS92b2x1bWVzP3E9JHtxdWVyeX1gLCB7aGVhZGVyc30pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib29rID0gaXRlbS52b2x1bWVJbmZvO1xuICAgICAgICAgICAgICAgICAgICBib29rLmlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICAgICAgfSkgOiBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0FwaVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjdHJsLWNvbXBvbmVudC9saWJyYXJ5L2pzL0Jvb2tBcGkuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);