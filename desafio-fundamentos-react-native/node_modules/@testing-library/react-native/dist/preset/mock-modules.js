var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lib = require("../lib");

var _mockComponent = require("./mock-component");

var _mockNativeMethods = require("./mock-native-methods");

(0, _lib.getConfig)('coreComponents').forEach(function (component) {
  try {
    jest.unmock(component);
  } catch (e) {}
});
jest.unmock('react-native/Libraries/Renderer/shims/ReactNative');
(0, _lib.getConfig)('coreComponents').forEach(function (component) {
  try {
    jest.doMock(component, function () {
      return (0, _mockComponent.mockComponent)(component);
    });
  } catch (e) {}
});
jest.doMock('react-native/Libraries/Components/Picker/Picker', function () {
  var React = jest.requireActual('react');
  var Picker = (0, _mockComponent.mockComponent)('react-native/Libraries/Components/Picker/Picker');

  Picker.Item = function (_ref) {
    var children = _ref.children,
        props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
    return React.createElement('Picker.Item', props, children);
  };

  return Picker;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper').doMock('react-native/Libraries/Renderer/shims/ReactNative', function () {
  var ReactNative = jest.requireActual('react-native/Libraries/Renderer/shims/ReactNative');
  var NativeMethodsMixin = ReactNative.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.NativeMethodsMixin;
  (0, _extends2.default)(NativeMethodsMixin, _mockNativeMethods.mockNativeMethods);
  (0, _extends2.default)(ReactNative.NativeComponent.prototype, _mockNativeMethods.mockNativeMethods);
  return ReactNative;
});