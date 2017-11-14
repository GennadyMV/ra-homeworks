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
/*!**********************************!*\
  !*** ./state/dropdown/js/App.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = { active: props.options[0], open: false };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"handleChange\",\n    value: function handleChange(option) {\n      this.setState({\n        active: option\n      });\n    }\n  }, {\n    key: \"toggleOpen\",\n    value: function toggleOpen() {\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        \"div\",\n        { className: \"container\" },\n        React.createElement(\n          \"div\",\n          { className: \"dropdown-wrapper \" + (this.state.open ? \"open\" : \"\") },\n          React.createElement(\n            \"button\",\n            { className: \"btn\", onClick: this.toggleOpen.bind(this) },\n            React.createElement(\n              \"span\",\n              null,\n              \"Account Settings\"\n            ),\n            React.createElement(\n              \"i\",\n              { className: \"material-icons\" },\n              \"public\"\n            )\n          ),\n          React.createElement(\n            \"ul\",\n            { className: \"dropdown\" },\n            this.props.options.map(function (option, i) {\n              return React.createElement(\n                \"li\",\n                {\n                  className: option === _this2.state.active ? \"active\" : \"\",\n                  onClick: _this2.handleChange.bind(_this2, option) },\n                React.createElement(\n                  \"a\",\n                  { href: \"#\" },\n                  option\n                )\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nvar options = [\"Profile Information\", \"Change Password\", \"Become PRO\", \"Help\", \"Log Out\"];\nReactDOM.render(React.createElement(App, { options: options }), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0ZS9kcm9wZG93bi9qcy9BcHAuanM/NzRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlOiBwcm9wcy5vcHRpb25zWzBdLCBvcGVuOiBmYWxzZX07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKG9wdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogb3B0aW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46ICF0aGlzLnN0YXRlLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bkcm9wZG93bi13cmFwcGVyICR7dGhpcy5zdGF0ZS5vcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9ID5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0blwifSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICA8c3Bhbj5BY2NvdW50IFNldHRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnB1YmxpYzwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3B0aW9uID09PSB0aGlzLnN0YXRlLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCBvcHRpb24pfSA+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntvcHRpb259PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXCJQcm9maWxlIEluZm9ybWF0aW9uXCIsIFwiQ2hhbmdlIFBhc3N3b3JkXCIsIFwiQmVjb21lIFBST1wiLCBcIkhlbHBcIiwgXCJMb2cgT3V0XCJdO1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcCBvcHRpb25zPXtvcHRpb25zfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4gICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RhdGUvZHJvcGRvd24vanMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBREE7QUFMQTtBQURBO0FBa0JBOzs7O0FBdENBO0FBQ0E7QUF3Q0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);