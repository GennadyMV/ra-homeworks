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
/*!*******************************!*\
  !*** ./events/auth/js/App.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Modal = __webpack_require__(/*! ./Modal.js */ 1);\n\nvar _AuthForm = __webpack_require__(/*! ./AuthForm */ 2);\n\nvar _AuthForm2 = _interopRequireDefault(_AuthForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      isUnauthorized: true,\n      user: {}\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"auth\",\n    value: function auth(user) {\n      this.setState({ isUnauthorized: false, user: user });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"App\" },\n        React.createElement(\n          _Modal.Modal,\n          { isHidden: !this.state.isUnauthorized },\n          React.createElement(_AuthForm2.default, { onAuth: this.auth.bind(this) })\n        ),\n        React.createElement(\n          _Modal.ModalResult,\n          { isHidden: this.state.isUnauthorized },\n          React.createElement(\n            \"div\",\n            { className: \"ModalForm\" },\n            React.createElement(\n              \"div\",\n              { className: \"Input\" },\n              React.createElement(\n                \"output\",\n                { \"data-name\": true },\n                this.state.user.name\n              ),\n              React.createElement(\"label\", null)\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"Input\" },\n              React.createElement(\n                \"output\",\n                { \"data-email\": true },\n                this.state.user.email\n              ),\n              React.createElement(\"label\", null)\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"Input\" },\n              React.createElement(\n                \"output\",\n                { \"data-password\": true },\n                this.state.user.password\n              ),\n              React.createElement(\"label\", null)\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ldmVudHMvYXV0aC9qcy9BcHAuanM/YjFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7TW9kYWwsIE1vZGFsUmVzdWx0fSBmcm9tIFwiLi9Nb2RhbC5qc1wiXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIi4vQXV0aEZvcm1cIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICB1c2VyOiB7fVxuICAgIH1cbiAgfVxuICBhdXRoKHVzZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc1VuYXV0aG9yaXplZDogZmFsc2UsIHVzZXJ9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxNb2RhbCBpc0hpZGRlbj17IXRoaXMuc3RhdGUuaXNVbmF1dGhvcml6ZWR9PlxuICAgICAgICAgIDxBdXRoRm9ybSBvbkF1dGg9e3RoaXMuYXV0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgICA8TW9kYWxSZXN1bHQgaXNIaWRkZW49e3RoaXMuc3RhdGUuaXNVbmF1dGhvcml6ZWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0XCI+XG4gICAgICAgICAgICAgIDxvdXRwdXQgZGF0YS1uYW1lPnt0aGlzLnN0YXRlLnVzZXIubmFtZX08L291dHB1dD5cbiAgICAgICAgICAgICAgPGxhYmVsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRcIj5cbiAgICAgICAgICAgICAgPG91dHB1dCBkYXRhLWVtYWlsPnt0aGlzLnN0YXRlLnVzZXIuZW1haWx9PC9vdXRwdXQ+XG4gICAgICAgICAgICAgIDxsYWJlbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0XCI+XG4gICAgICAgICAgICAgIDxvdXRwdXQgZGF0YS1wYXNzd29yZD57dGhpcy5zdGF0ZS51c2VyLnBhc3N3b3JkfTwvb3V0cHV0PlxuICAgICAgICAgICAgICA8bGFiZWwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsUmVzdWx0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZXZlbnRzL2F1dGgvanMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFUQTtBQURBO0FBSkE7QUFzQkE7Ozs7QUFuQ0E7QUFDQTtBQXFDQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./events/auth/js/Modal.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Modal = function Modal(props) {\n  if (props.isHidden) {\n    return null;\n  }\n  return React.createElement(\n    \"div\",\n    { className: \"Modal\" },\n    props.children\n  );\n};\n\nvar ModalResult = function ModalResult(props) {\n  if (props.isHidden) {\n    return null;\n  }\n  return React.createElement(\n    \"div\",\n    { className: \"Modal ModalResult\" },\n    props.children\n  );\n};\n\nexports.Modal = Modal;\nexports.ModalResult = ModalResult;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ldmVudHMvYXV0aC9qcy9Nb2RhbC5qcz9mMzE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTW9kYWwgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pc0hpZGRlbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNb2RhbFwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTW9kYWxSZXN1bHQgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pc0hpZGRlbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNb2RhbCBNb2RhbFJlc3VsdFwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHtNb2RhbCwgTW9kYWxSZXN1bHR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBldmVudHMvYXV0aC9qcy9Nb2RhbC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./events/auth/js/AuthForm.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar isFunction = function isFunction(input) {\n  return typeof input === 'function';\n};\n\nfunction AuthForm(_ref) {\n  var onAuth = _ref.onAuth;\n\n\n  var form = void 0;\n\n  function onSubmit(event) {\n    event.preventDefault();\n    if (isFunction(onAuth)) {\n      onAuth({ name: form.name.value, email: form.email.value, password: form.password.value });\n    }\n  }\n\n  function getEmail(event) {\n    var char = event.key;\n    if (char.match('[a-zA-Z0-9@._-]') === null) {\n      event.preventDefault();\n    }\n  }\n\n  function getPassword(event) {\n    var char = event.key;\n    if (char.match('[a-zA-Z0-9_]') === null) {\n      event.preventDefault();\n    }\n  }\n\n  return React.createElement(\n    'form',\n    { className: 'ModalForm', action: '/404/auth/', method: 'POST', onSubmit: onSubmit, ref: function ref(element) {\n        return form = element;\n      } },\n    React.createElement(\n      'div',\n      { className: 'Input' },\n      React.createElement('input', { required: true, id: 'name', type: 'text', placeholder: '\\u0418\\u043C\\u044F' }),\n      React.createElement('label', null)\n    ),\n    React.createElement(\n      'div',\n      { className: 'Input' },\n      React.createElement('input', { type: 'email', id: 'email', placeholder: '\\u042D\\u043B\\u0435\\u043A\\u0442\\u0440\\u043E\\u043D\\u043D\\u0430\\u044F \\u043F\\u043E\\u0447\\u0442\\u0430', onKeyDown: getEmail }),\n      React.createElement('label', null)\n    ),\n    React.createElement(\n      'div',\n      { className: 'Input' },\n      React.createElement('input', { required: true, id: 'password', type: 'password', placeholder: '\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C', onKeyDown: getPassword }),\n      React.createElement('label', null)\n    ),\n    React.createElement(\n      'button',\n      { type: 'submit' },\n      React.createElement(\n        'span',\n        null,\n        '\\u0412\\u043E\\u0439\\u0442\\u0438'\n      ),\n      React.createElement('i', { className: 'fa fa-fw fa-chevron-right' })\n    )\n  );\n}\n\nexports.default = AuthForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ldmVudHMvYXV0aC9qcy9BdXRoRm9ybS5qcz8zMjkxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlucHV0ID0+IHR5cGVvZiBpbnB1dCA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gQXV0aEZvcm0oe29uQXV0aH0pIHtcblxuICBsZXQgZm9ybTtcblxuICBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzRnVuY3Rpb24ob25BdXRoKSkge1xuICAgICAgb25BdXRoKHtuYW1lOiBmb3JtLm5hbWUudmFsdWUsIGVtYWlsOiBmb3JtLmVtYWlsLnZhbHVlLCBwYXNzd29yZDogZm9ybS5wYXNzd29yZC52YWx1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVtYWlsKGV2ZW50KSB7XG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcbiAgICBpZiAoY2hhci5tYXRjaCgnW2EtekEtWjAtOUAuXy1dJykgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFzc3dvcmQoZXZlbnQpIHtcbiAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xuICAgIGlmIChjaGFyLm1hdGNoKCdbYS16QS1aMC05X10nKSA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIk1vZGFsRm9ybVwiIGFjdGlvbj1cIi80MDQvYXV0aC9cIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e29uU3VibWl0fSByZWY9e2VsZW1lbnQgPT4gZm9ybSA9IGVsZW1lbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnB1dFwiPlxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCY0LzRj1wiIC8+XG4gICAgICAgICAgPGxhYmVsLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnB1dFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwXCIgb25LZXlEb3duPXtnZXRFbWFpbH0gLz5cbiAgICAgICAgICA8bGFiZWwvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0XCI+XG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiBvbktleURvd249e2dldFBhc3N3b3JkfSAvPlxuICAgICAgICAgIDxsYWJlbC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICA8c3Bhbj7QktC+0LnRgtC4PC9zcGFuPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1jaGV2cm9uLXJpZ2h0XCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGV2ZW50cy9hdXRoL2pzL0F1dGhGb3JtLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);