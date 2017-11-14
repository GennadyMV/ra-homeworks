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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************!*\
  !*** ./state/layouts/js/Button.jsx ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Button = function Button(props) {\n  var label = props.label;\n\n  return React.createElement(\n    \"button\",\n    { className: \"btn\" },\n    label,\n    React.createElement(\"span\", { className: \"bg\" })\n  );\n};\n\nexports.default = Button;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0J1dHRvbi5qc3g/ZmY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgIHtsYWJlbH1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnXCIvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdGF0ZS9sYXlvdXRzL2pzL0J1dHRvbi5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./state/layouts/js/App.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _IconSwitch = __webpack_require__(/*! ./IconSwitch.jsx */ 2);\n\nvar _IconSwitch2 = _interopRequireDefault(_IconSwitch);\n\nvar _CardsView = __webpack_require__(/*! ./CardsView.jsx */ 4);\n\nvar _CardsView2 = _interopRequireDefault(_CardsView);\n\nvar _ListView = __webpack_require__(/*! ./ListView.jsx */ 5);\n\nvar _ListView2 = _interopRequireDefault(_ListView);\n\nvar _ShopCard = __webpack_require__(/*! ./ShopCard.jsx */ 6);\n\nvar _ShopCard2 = _interopRequireDefault(_ShopCard);\n\nvar _ShopItem = __webpack_require__(/*! ./ShopItem.jsx */ 7);\n\nvar _ShopItem2 = _interopRequireDefault(_ShopItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar VIEW_LIST = \"view_list\";\nvar VIEW_MODULE = \"view_module\";\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = { selectedLayout: VIEW_MODULE };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"handleIconSwitch\",\n    value: function handleIconSwitch() {\n      var selectedMode = this.state.selectedLayout === VIEW_MODULE ? VIEW_LIST : VIEW_MODULE;\n      console.log(\"\\u0441\\u043C\\u0435\\u043D\\u0438\\u043B\\u0441\\u044F \\u0442\\u0438\\u043F \\u0432\\u044B\\u0432\\u043E\\u0434\\u0430 \" + selectedMode);\n      this.setState({\n        selectedLayout: selectedMode\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"div\",\n          { className: \"toolbar\" },\n          React.createElement(_IconSwitch2.default, {\n            icon: this.state.selectedLayout,\n            onSwitch: this.handleIconSwitch.bind(this) })\n        ),\n        this.renderLayout()\n      );\n    }\n  }, {\n    key: \"renderLayout\",\n    value: function renderLayout() {\n      if (VIEW_MODULE === this.state.selectedLayout) {\n        return React.createElement(_CardsView2.default, {\n          layout: this.props.layout,\n          cards: this.getShopItems(this.props.products, true) });\n      }\n      return React.createElement(_ListView2.default, { items: this.getShopItems(this.props.products, false) });\n    }\n  }, {\n    key: \"getShopItems\",\n    value: function getShopItems(products, cardView) {\n      return products.map(function (product) {\n        var cardProps = {\n          title: product.name,\n          caption: product.color,\n          img: product.img,\n          price: \"$\" + product.price\n        };\n        if (cardView) {\n          return React.createElement(_ShopCard2.default, cardProps);\n        }\n        return React.createElement(_ShopItem2.default, cardProps);\n      });\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nvar products = [{\n  name: \"Nike Metcon 2\",\n  price: \"130\",\n  color: \"red\",\n  img: \"./i/1.jpg\"\n}, {\n  name: \"Nike Metcon 2\",\n  price: \"130\",\n  color: \"green\",\n  img: \"./i/2.jpg\"\n}, {\n  name: \"Nike Metcon 2\",\n  price: \"130\",\n  color: \"blue\",\n  img: \"./i/3.jpg\"\n}, {\n  name: \"Nike Metcon 2\",\n  price: \"130\",\n  color: \"black\",\n  img: \"./i/4.jpg\"\n}, {\n  name: \"Nike free run\",\n  price: \"170\",\n  color: \"black\",\n  img: \"./i/7.jpg\"\n}, {\n  name: \"Nike Metcon 3\",\n  price: \"150\",\n  color: \"green\",\n  img: \"./i/5.jpg\"\n}];\n\nvar cardsLayout = {\n  xs: 12,\n  sm: 8,\n  md: 6,\n  lg: 4\n};\n\nReactDOM.render(React.createElement(App, { layout: cardsLayout, products: products }), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0FwcC5qcz8xN2M0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVklFV19MSVNUID0gXCJ2aWV3X2xpc3RcIjtcbmNvbnN0IFZJRVdfTU9EVUxFID0gXCJ2aWV3X21vZHVsZVwiO1xuXG5pbXBvcnQgSWNvblN3aXRjaCBmcm9tIFwiLi9JY29uU3dpdGNoLmpzeFwiXG5pbXBvcnQgQ2FyZHNWaWV3IGZyb20gXCIuL0NhcmRzVmlldy5qc3hcIlxuaW1wb3J0IExpc3RWaWV3IGZyb20gXCIuL0xpc3RWaWV3LmpzeFwiXG5pbXBvcnQgU2hvcENhcmQgZnJvbSBcIi4vU2hvcENhcmQuanN4XCJcbmltcG9ydCBTaG9wSXRlbSBmcm9tIFwiLi9TaG9wSXRlbS5qc3hcIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3NlbGVjdGVkTGF5b3V0OiBWSUVXX01PRFVMRX07XG4gIH1cblxuICBoYW5kbGVJY29uU3dpdGNoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkTW9kZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRMYXlvdXQgPT09IFZJRVdfTU9EVUxFID8gVklFV19MSVNUIDogVklFV19NT0RVTEU7XG4gICAgY29uc29sZS5sb2coYNGB0LzQtdC90LjQu9GB0Y8g0YLQuNC/INCy0YvQstC+0LTQsCAke3NlbGVjdGVkTW9kZX1gKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkTGF5b3V0OiBzZWxlY3RlZE1vZGVcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhclwiPlxuICAgICAgICAgIDxJY29uU3dpdGNoXG4gICAgICAgICAgICBpY29uPXt0aGlzLnN0YXRlLnNlbGVjdGVkTGF5b3V0fVxuICAgICAgICAgICAgb25Td2l0Y2g9e3RoaXMuaGFuZGxlSWNvblN3aXRjaC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyTGF5b3V0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGF5b3V0KCkge1xuICAgIGlmIChWSUVXX01PRFVMRSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZExheW91dCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmRzVmlld1xuICAgICAgICAgIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG4gICAgICAgICAgY2FyZHM9e3RoaXMuZ2V0U2hvcEl0ZW1zKHRoaXMucHJvcHMucHJvZHVjdHMsIHRydWUpfSAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICg8TGlzdFZpZXcgaXRlbXM9e3RoaXMuZ2V0U2hvcEl0ZW1zKHRoaXMucHJvcHMucHJvZHVjdHMsIGZhbHNlKX0gLz4pO1xuICB9XG5cbiAgZ2V0U2hvcEl0ZW1zKHByb2R1Y3RzLCBjYXJkVmlldykge1xuICAgIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICBsZXQgY2FyZFByb3BzID0ge1xuICAgICAgICB0aXRsZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBjYXB0aW9uOiBwcm9kdWN0LmNvbG9yLFxuICAgICAgICBpbWc6IHByb2R1Y3QuaW1nLFxuICAgICAgICBwcmljZTogYCQke3Byb2R1Y3QucHJpY2V9YFxuICAgICAgfTtcbiAgICAgIGlmIChjYXJkVmlldykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTaG9wQ2FyZCB7Li4uY2FyZFByb3BzfS8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKDxTaG9wSXRlbSB7Li4uY2FyZFByb3BzfS8+KVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHByb2R1Y3RzID0gW3tcbiAgbmFtZTogXCJOaWtlIE1ldGNvbiAyXCIsXG4gIHByaWNlOiBcIjEzMFwiLFxuICBjb2xvcjogXCJyZWRcIixcbiAgaW1nOiBcIi4vaS8xLmpwZ1wiXG59LCB7XG4gIG5hbWU6IFwiTmlrZSBNZXRjb24gMlwiLFxuICBwcmljZTogXCIxMzBcIixcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgaW1nOiBcIi4vaS8yLmpwZ1wiXG59LCB7XG4gIG5hbWU6IFwiTmlrZSBNZXRjb24gMlwiLFxuICBwcmljZTogXCIxMzBcIixcbiAgY29sb3I6IFwiYmx1ZVwiLFxuICBpbWc6IFwiLi9pLzMuanBnXCJcbn0sIHtcbiAgbmFtZTogXCJOaWtlIE1ldGNvbiAyXCIsXG4gIHByaWNlOiBcIjEzMFwiLFxuICBjb2xvcjogXCJibGFja1wiLFxuICBpbWc6IFwiLi9pLzQuanBnXCJcbn0sIHtcbiAgbmFtZTogXCJOaWtlIGZyZWUgcnVuXCIsXG4gIHByaWNlOiBcIjE3MFwiLFxuICBjb2xvcjogXCJibGFja1wiLFxuICBpbWc6IFwiLi9pLzcuanBnXCJcbn0sIHtcbiAgbmFtZTogXCJOaWtlIE1ldGNvbiAzXCIsXG4gIHByaWNlOiBcIjE1MFwiLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBpbWc6IFwiLi9pLzUuanBnXCJcbn1dO1xuXG5jb25zdCBjYXJkc0xheW91dCA9IHtcbiAgeHM6IDEyLFxuICBzbTogOCxcbiAgbWQ6IDYsXG4gIGxnOiA0XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgbGF5b3V0PXtjYXJkc0xheW91dH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdGF0ZS9sYXlvdXRzL2pzL0FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBSUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFPQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXJEQTtBQUNBO0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./state/layouts/js/IconSwitch.jsx ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Icon = __webpack_require__(/*! ./Icon.jsx */ 3);\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IconSwitch = function IconSwitch(props) {\n  var icon = props.icon,\n      onSwitch = props.onSwitch;\n\n  return React.createElement(\n    \"div\",\n    { className: \"switch-view\", onClick: onSwitch },\n    React.createElement(_Icon2.default, { size: 42, name: icon })\n  );\n};\n\nexports.default = IconSwitch;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0ljb25Td2l0Y2guanN4PzQxYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uLmpzeFwiXG5cbmNvbnN0IEljb25Td2l0Y2ggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtpY29uLCBvblN3aXRjaH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaC12aWV3XCIgb25DbGljaz17b25Td2l0Y2h9PlxuICAgICAgPEljb24gc2l6ZT17NDJ9IG5hbWU9e2ljb259Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25Td2l0Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0YXRlL2xheW91dHMvanMvSWNvblN3aXRjaC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** ./state/layouts/js/Icon.jsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Icon = function Icon(props) {\n  var name = props.name,\n      size = props.size;\n\n  return React.createElement(\n    \"i\",\n    { className: \"material-icons\", style: { fontSize: size } },\n    name\n  );\n};\n\nexports.default = Icon;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0ljb24uanN4Pzg5ODciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJY29uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG5hbWUsIHNpemUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9e3tmb250U2l6ZTogc2l6ZX19PlxuICAgICAge25hbWV9XG4gICAgPC9pPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RhdGUvbGF5b3V0cy9qcy9JY29uLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************************!*\
  !*** ./state/layouts/js/CardsView.jsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CardsView = function CardsView(props) {\n  var layout = props.layout,\n      cards = props.cards;\n\n\n  var getLayoutClasses = function getLayoutClasses(layout) {\n    return Object.keys(layout).map(function (key) {\n      return \"col-\" + key + \"-\" + layout[key];\n    }).join(\" \");\n  };\n\n  var layoutClasses = getLayoutClasses(layout);\n  var renderCards = function renderCards(cards) {\n    return cards.map(function (card, i) {\n      return React.createElement(\n        \"div\",\n        { className: layoutClasses, key: \"card-\" + i },\n        card\n      );\n    });\n  };\n\n  return React.createElement(\n    \"div\",\n    { className: \"row\" },\n    renderCards(cards)\n  );\n};\n\nexports.default = CardsView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0NhcmRzVmlldy5qc3g/MmJjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhcmRzVmlldyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxheW91dCwgY2FyZHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGdldExheW91dENsYXNzZXMgPSBsYXlvdXQgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsYXlvdXQpLm1hcChrZXkgPT4gYGNvbC0ke2tleX0tJHtsYXlvdXRba2V5XX1gKS5qb2luKFwiIFwiKTtcbiAgfTtcblxuICBjb25zdCBsYXlvdXRDbGFzc2VzID0gZ2V0TGF5b3V0Q2xhc3NlcyhsYXlvdXQpO1xuICBjb25zdCByZW5kZXJDYXJkcyA9IChjYXJkcykgPT4ge1xuICAgIHJldHVybiBjYXJkcy5tYXAoKGNhcmQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsYXlvdXRDbGFzc2VzfSBrZXk9e2BjYXJkLSR7aX1gfT5cbiAgICAgICAgICB7Y2FyZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtyZW5kZXJDYXJkcyhjYXJkcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0YXRlL2xheW91dHMvanMvQ2FyZHNWaWV3LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./state/layouts/js/ListView.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ListView = function ListView(props) {\n  var items = props.items;\n\n\n  var renderItems = function renderItems(items) {\n    return items.map(function (item, i) {\n      return React.createElement(\n        \"li\",\n        { className: \"list-item\", key: \"li-\" + i },\n        item\n      );\n    });\n  };\n\n  return React.createElement(\n    \"ul\",\n    { className: \"list\" },\n    renderItems(items)\n  );\n};\n\nexports.default = ListView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL0xpc3RWaWV3LmpzeD9iMjg3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTGlzdFZpZXcgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtpdGVtc30gPSBwcm9wcztcblxuICBjb25zdCByZW5kZXJJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBrZXk9e2BsaS0ke2l9YH0+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgIHtyZW5kZXJJdGVtcyhpdGVtcyl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdGF0ZS9sYXlvdXRzL2pzL0xpc3RWaWV3LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************!*\
  !*** ./state/layouts/js/ShopCard.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Button = __webpack_require__(/*! ./Button.jsx */ 0);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ShopCard = function ShopCard(props) {\n  var title = props.title,\n      caption = props.caption,\n      img = props.img,\n      price = props.price;\n\n\n  return React.createElement(\n    \"div\",\n    { className: \"shop-card\" },\n    React.createElement(\n      \"div\",\n      { className: \"title\" },\n      title\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"desc\" },\n      caption\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"slider\" },\n      React.createElement(\n        \"figure\",\n        null,\n        React.createElement(\"img\", { src: img, alt: title })\n      )\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"cta\" },\n      React.createElement(\n        \"div\",\n        { className: \"price\" },\n        price\n      ),\n      React.createElement(_Button2.default, { label: \"Add to cart\" })\n    )\n  );\n};\n\nexports.default = ShopCard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL1Nob3BDYXJkLmpzeD80YmU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b24uanN4XCJcblxuY29uc3QgU2hvcENhcmQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNhcHRpb24sIGltZywgcHJpY2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XG4gICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e3RpdGxlfS8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj57cHJpY2V9PC9kaXY+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9XCJBZGQgdG8gY2FydFwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0YXRlL2xheW91dHMvanMvU2hvcENhcmQuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBYkE7QUFtQkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./state/layouts/js/ShopItem.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Button = __webpack_require__(/*! ./Button.jsx */ 0);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ShopItem = function ShopItem(props) {\n  var title = props.title,\n      caption = props.caption,\n      img = props.img,\n      price = props.price;\n\n  return React.createElement(\n    \"div\",\n    { className: \"shop-item\" },\n    React.createElement(\n      \"div\",\n      { className: \"thumb\" },\n      React.createElement(\n        \"figure\",\n        null,\n        React.createElement(\"img\", { src: img, alt: title })\n      )\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"title\" },\n      title\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"desc\" },\n      caption\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"price\" },\n      price\n    ),\n    React.createElement(_Button2.default, { label: \"Add to cart\" })\n  );\n};\n\nexports.default = ShopItem;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9sYXlvdXRzL2pzL1Nob3BJdGVtLmpzeD81MjYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b24uanN4XCJcblxuY29uc3QgU2hvcEl0ZW0gPSBwcm9wcyA9PiB7XG4gIGxldCB7IHRpdGxlLCBjYXB0aW9uLCBpbWcsIHByaWNlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYlwiPlxuICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17dGl0bGV9Lz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj57cHJpY2V9PC9kaXY+XG4gICAgICA8QnV0dG9uIGxhYmVsPVwiQWRkIHRvIGNhcnRcIi8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wSXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RhdGUvbGF5b3V0cy9qcy9TaG9wSXRlbS5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);