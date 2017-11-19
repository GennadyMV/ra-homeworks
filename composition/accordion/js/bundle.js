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
/*!*******************************************!*\
  !*** ./composition/accordion/js/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Accordion = __webpack_require__(/*! ./Accordion.jsx */ 1);\n\nvar _Accordion2 = _interopRequireDefault(_Accordion);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar title = \"Заголовок аккордеона\";\n\nvar blocks = [{\n  title: \"Block 1\",\n  text: \"Text 1\"\n}, {\n  title: \"Block 2\",\n  text: \"Text 2\"\n}, {\n  title: \"Block 3\",\n  text: \"Text 3\"\n}];\n\nReactDOM.render(React.createElement(_Accordion2.default, { title: title, blocks: blocks }), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9hY2NvcmRpb24vanMvaW5kZXguanM/ZmI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uLmpzeFwiXG5cbmNvbnN0IHRpdGxlID0gXCLQl9Cw0LPQvtC70L7QstC+0Log0LDQutC60L7RgNC00LXQvtC90LBcIjtcblxuY29uc3QgYmxvY2tzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQmxvY2sgMVwiLFxuICAgIHRleHQ6ICBcIlRleHQgMVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCbG9jayAyXCIsXG4gICAgdGV4dDogIFwiVGV4dCAyXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJsb2NrIDNcIixcbiAgICB0ZXh0OiAgXCJUZXh0IDNcIlxuICB9XG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFjY29yZGlvbiB0aXRsZT17dGl0bGV9IGJsb2Nrcz17YmxvY2tzfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9zaXRpb24vYWNjb3JkaW9uL2pzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** ./composition/accordion/js/Accordion.jsx ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Block = __webpack_require__(/*! ./Block.jsx */ 2);\n\nvar _Block2 = _interopRequireDefault(_Block);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Accordion = function Accordion(_ref) {\n  var title = _ref.title,\n      blocks = _ref.blocks;\n\n  return React.createElement(\n    \"div\",\n    { id: \"accordian\" },\n    React.createElement(\n      \"main\",\n      { className: \"main\" },\n      React.createElement(\n        \"h2\",\n        { className: \"title\" },\n        title\n      ),\n      blocks.map(function (block) {\n        return React.createElement(_Block2.default, { content: block });\n      })\n    )\n  );\n};\n\nexports.default = Accordion;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9hY2NvcmRpb24vanMvQWNjb3JkaW9uLmpzeD85ZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9jay5qc3hcIlxuXG5jb25zdCBBY2NvcmRpb24gPSAoe3RpdGxlLCBibG9ja3N9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpYW5cIj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIHtibG9ja3MubWFwKGJsb2NrID0+ICA8QmxvY2sgY29udGVudD17YmxvY2t9Lz4pfVxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvc2l0aW9uL2FjY29yZGlvbi9qcy9BY2NvcmRpb24uanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************!*\
  !*** ./composition/accordion/js/Block.jsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar baseClass = 'section';\nvar openClass = baseClass + \" open\";\nvar closeClass = \"\" + baseClass;\n\nvar Block = function (_React$Component) {\n  _inherits(Block, _React$Component);\n\n  function Block(props) {\n    _classCallCheck(this, Block);\n\n    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));\n\n    _this.state = { hidden: true };\n    return _this;\n  }\n\n  _createClass(Block, [{\n    key: \"toggleSection\",\n    value: function toggleSection() {\n      this.setState({ hidden: !this.state.hidden });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var sectionClassName = this.state.hidden ? closeClass : openClass;\n      return React.createElement(\n        \"section\",\n        { className: sectionClassName },\n        React.createElement(\n          \"button\",\n          { onClick: this.toggleSection.bind(this) },\n          \"toggle\"\n        ),\n        React.createElement(\n          \"h3\",\n          { className: \"sectionhead\" },\n          this.props.content.title\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"articlewrap\" },\n          React.createElement(\n            \"div\",\n            { className: \"article\" },\n            this.props.content.text\n          )\n        )\n      );\n    }\n  }]);\n\n  return Block;\n}(React.Component);\n\nexports.default = Block;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9hY2NvcmRpb24vanMvQmxvY2suanN4PzFmMmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZUNsYXNzID0gJ3NlY3Rpb24nO1xuY29uc3Qgb3BlbkNsYXNzID0gYCR7YmFzZUNsYXNzfSBvcGVuYDtcbmNvbnN0IGNsb3NlQ2xhc3MgPSBgJHtiYXNlQ2xhc3N9YDtcblxuY2xhc3MgQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoaWRkZW46IHRydWUgfVxuICB9XG5cbiAgdG9nZ2xlU2VjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGlkZGVuOiAhdGhpcy5zdGF0ZS5oaWRkZW4gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VjdGlvbkNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuaGlkZGVuID8gY2xvc2VDbGFzcyA6IG9wZW5DbGFzcztcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzZWN0aW9uQ2xhc3NOYW1lfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlY3Rpb24uYmluZCh0aGlzKX0+dG9nZ2xlPC9idXR0b24+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uaGVhZFwiPnt0aGlzLnByb3BzLmNvbnRlbnQudGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xld3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udGVudC50ZXh0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb3NpdGlvbi9hY2NvcmRpb24vanMvQmxvY2suanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFIQTtBQVVBOzs7O0FBdkJBO0FBQ0E7QUF5QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);