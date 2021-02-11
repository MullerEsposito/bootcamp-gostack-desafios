var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockComponent = mockComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _mockNativeMethods = require("./mock-native-methods");

function mockComponent(component) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : component;
  var RealComponent = jest.requireActual(path);
  var displayName = RealComponent.displayName || RealComponent.name || (RealComponent.render ? RealComponent.render.displayName || RealComponent.render.name : 'Unknown');
  var SuperClass = typeof RealComponent === 'function' ? RealComponent : _react.default.Component;

  var Component = function (_SuperClass) {
    (0, _inherits2.default)(Component, _SuperClass);

    function Component() {
      (0, _classCallCheck2.default)(this, Component);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
    }

    (0, _createClass2.default)(Component, [{
      key: "render",
      value: function render() {
        var _this = this;

        var props = (0, _extends2.default)({}, RealComponent.defaultProps);

        if (this.props) {
          Object.keys(this.props).forEach(function (prop) {
            if (_this.props[prop] !== undefined) {
              props[prop] = _this.props[prop];
            }
          });
        }

        return _react.default.createElement(displayName, props, this.props.children);
      }
    }]);
    return Component;
  }(SuperClass);

  Component.displayName = displayName;
  Object.keys(RealComponent).forEach(function (classStatic) {
    Component[classStatic] = RealComponent[classStatic];
  });
  (0, _extends2.default)(Component.prototype, _mockNativeMethods.mockNativeMethods);
  return Component;
}