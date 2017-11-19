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
/*!***************************************!*\
  !*** ./composition/listing/js/App.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ItemPainting = __webpack_require__(/*! ./ItemPainting.jsx */ 1);\n\nvar _ItemPainting2 = _interopRequireDefault(_ItemPainting);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var items = _ref.items;\n  return React.createElement(\n    'main',\n    null,\n    items.map(function (item) {\n      return React.createElement(_ItemPainting2.default, { item: item });\n    })\n  );\n};\n\nvar items = [{\n  title: 'Wool Hat',\n  description: 'Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.',\n  price: 19,\n  type: 'unisex',\n  pic: './i/sample71.jpg'\n}, {\n  title: 'Denim Shirt',\n  description: 'I don\\'t need to compromise on my principles, because they don\\'t have the slightest bearing on what happens to me anyway.',\n  price: 33,\n  type: 'male',\n  pic: './i/sample47.jpg'\n}, {\n  title: 'Wax Jacket',\n  description: 'You know that is the real problem with nature, something\\'s always stinging you or oozing mucous all over you. Let\\'s go and watch TV.',\n  price: 71,\n  type: 'female',\n  pic: './i/sample52.jpg'\n}];\n\nReactDOM.render(React.createElement(App, { items: items }), document.querySelector('.listing'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9saXN0aW5nL2pzL0FwcC5qcz8yNjlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEl0ZW1QYWludGluZyBmcm9tIFwiLi9JdGVtUGFpbnRpbmcuanN4XCJcblxuY29uc3QgQXBwID0gKHtpdGVtc30pID0+IChcbiAgPG1haW4+XG4gICAgeyBpdGVtcy5tYXAoaXRlbSA9PiA8SXRlbVBhaW50aW5nIGl0ZW09e2l0ZW19IC8+KSB9XG4gIDwvbWFpbj5cbik7XG5cbmNvbnN0IGl0ZW1zID0gW3tcbiAgdGl0bGU6ICdXb29sIEhhdCcsXG4gIGRlc2NyaXB0aW9uOiAnU29tZXRpbWVzIEkgdGhpbmsgdGhlIHN1cmVzdCBzaWduIHRoYXQgaW50ZWxsaWdlbnQgbGlmZSBleGlzdHMgZWxzZXdoZXJlIGluIHRoZSB1bml2ZXJzZSBpcyB0aGF0IG5vbmUgb2YgaXQgaGFzIHRyaWVkIHRvIGNvbnRhY3QgdXMuJyxcbiAgcHJpY2U6IDE5LFxuICB0eXBlOiAndW5pc2V4JyxcbiAgcGljOiAnLi9pL3NhbXBsZTcxLmpwZydcbn0sIHtcbiAgdGl0bGU6ICdEZW5pbSBTaGlydCcsXG4gIGRlc2NyaXB0aW9uOiAnSSBkb25cXCd0IG5lZWQgdG8gY29tcHJvbWlzZSBvbiBteSBwcmluY2lwbGVzLCBiZWNhdXNlIHRoZXkgZG9uXFwndCBoYXZlIHRoZSBzbGlnaHRlc3QgYmVhcmluZyBvbiB3aGF0IGhhcHBlbnMgdG8gbWUgYW55d2F5LicsXG4gIHByaWNlOiAzMyxcbiAgdHlwZTogJ21hbGUnLFxuICBwaWM6ICcuL2kvc2FtcGxlNDcuanBnJ1xufSwge1xuICB0aXRsZTogJ1dheCBKYWNrZXQnLFxuICBkZXNjcmlwdGlvbjogJ1lvdSBrbm93IHRoYXQgaXMgdGhlIHJlYWwgcHJvYmxlbSB3aXRoIG5hdHVyZSwgc29tZXRoaW5nXFwncyBhbHdheXMgc3RpbmdpbmcgeW91IG9yIG9vemluZyBtdWNvdXMgYWxsIG92ZXIgeW91LiBMZXRcXCdzIGdvIGFuZCB3YXRjaCBUVi4nLFxuICBwcmljZTogNzEsXG4gIHR5cGU6ICdmZW1hbGUnLFxuICBwaWM6ICcuL2kvc2FtcGxlNTIuanBnJ1xufV07XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCBpdGVtcz17aXRlbXN9IC8+LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdGluZycpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvc2l0aW9uL2xpc3RpbmcvanMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./composition/listing/js/ItemPainting.jsx ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Item = __webpack_require__(/*! ./Item.jsx */ 2);\n\nvar _Item2 = _interopRequireDefault(_Item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar colors = {\n  'unisex': \"black\",\n  'male': \"blue\",\n  'female': \"orange\"\n};\n\nvar ItemPainting = function ItemPainting(_ref) {\n  var item = _ref.item;\n\n  return React.createElement(_Item2.default, { color: colors[item.type], item: item });\n};\n\nexports.default = ItemPainting;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9saXN0aW5nL2pzL0l0ZW1QYWludGluZy5qc3g/MDJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtLmpzeFwiXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgJ3VuaXNleCc6IFwiYmxhY2tcIixcbiAgJ21hbGUnIDogXCJibHVlXCIsXG4gICdmZW1hbGUnIDogXCJvcmFuZ2VcIlxufTtcblxuY29uc3QgSXRlbVBhaW50aW5nID0gKHtpdGVtfSkgPT4ge1xuICByZXR1cm4gPEl0ZW0gY29sb3I9e2NvbG9yc1tpdGVtLnR5cGVdfSBpdGVtPXtpdGVtfS8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVBhaW50aW5nO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvc2l0aW9uL2xpc3RpbmcvanMvSXRlbVBhaW50aW5nLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./composition/listing/js/Item.jsx ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Item = function Item(_ref) {\n  var color = _ref.color,\n      item = _ref.item;\n  return React.createElement(\n    \"figure\",\n    { className: \"snip1171 \" + color },\n    React.createElement(\"img\", { src: item.pic, alt: item.title }),\n    React.createElement(\n      \"div\",\n      { className: \"price\" },\n      \"$\",\n      item.price.toFixed(2)\n    ),\n    React.createElement(\n      \"figcaption\",\n      null,\n      React.createElement(\n        \"h3\",\n        null,\n        item.title\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        item.description\n      ),\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        \"Add to Cart\"\n      )\n    )\n  );\n};\n\nexports.default = Item;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb3NpdGlvbi9saXN0aW5nL2pzL0l0ZW0uanN4P2UzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJdGVtID0gKHtjb2xvciwgaXRlbX0pID0+IChcbiAgPGZpZ3VyZSBjbGFzc05hbWU9e2BzbmlwMTE3MSAke2NvbG9yfWB9PlxuICAgIDxpbWcgc3JjPXtpdGVtLnBpY30gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj4ke2l0ZW0ucHJpY2UudG9GaXhlZCgyKX08L2Rpdj5cbiAgICA8ZmlnY2FwdGlvbj5cbiAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGEgaHJlZj1cIiNcIj5BZGQgdG8gQ2FydDwvYT5cbiAgICA8L2ZpZ2NhcHRpb24+XG4gIDwvZmlndXJlPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9zaXRpb24vbGlzdGluZy9qcy9JdGVtLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFIQTtBQURBO0FBQ0E7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);