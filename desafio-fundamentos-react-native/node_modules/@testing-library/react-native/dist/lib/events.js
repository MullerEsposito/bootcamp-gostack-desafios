var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireEvent = fireEvent;
exports.getEventHandlerName = getEventHandlerName;
exports.NativeTestEvent = exports.eventMap = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var viewEvents = ['accessibilityEscape', 'accessibilityTap', 'layout', 'magicTap', 'moveShouldSetResponder', 'moveShouldSetResponderCapture', 'responderGrant', 'responderMove', 'responderReject', 'responderRelease', 'responderTerminate', 'responderTerminationRequest', 'startShouldSetResponder', 'startShouldSetResponderCapture'];
var eventMap = {
  ActivityIndicator: [].concat(viewEvents),
  Button: ['layout', 'press'],
  DrawerLayoutAndroid: [].concat(viewEvents, ['drawerClose', 'drawerOpen', 'drawerSlide', 'drawerStateChanged']),
  Image: ['error', 'layout', 'load', 'loadEnd', 'loadStart', 'partialLoad', 'progress'],
  Modal: ['dismiss', 'orientationChange', 'requestClose', 'show'],
  Picker: [].concat(viewEvents, ['valueChange']),
  RefreshControl: [].concat(viewEvents, ['refresh']),
  SafeAreaView: [].concat(viewEvents),
  ScrollView: [].concat(viewEvents, ['contentSizeChange', 'momentumScrollBegin', 'momentumScrollEnd', 'scroll', 'scrollBeginDrag', 'scrollEndDrag']),
  Switch: [].concat(viewEvents, ['valueChange']),
  Text: ['layout', 'longPress', 'press'],
  TextInput: [].concat(viewEvents, ['blur', 'change', 'changeText', 'contentSizeChange', 'endEditing', 'focus', 'keyPress', 'scroll', 'selectionChange', 'submitEditing']),
  TouchableHighlight: ['blur', 'focus', 'hideUnderlay', 'layout', 'longPress', 'press', 'pressIn', 'pressOut', 'showUnderlay'],
  TouchableNativeFeedback: ['blur', 'focus', 'layout', 'longPress', 'press', 'pressIn', 'pressOut'],
  TouchableOpacity: ['blur', 'focus', 'layout', 'longPress', 'press', 'pressIn', 'pressOut'],
  TouchableWithoutFeedback: ['blur', 'focus', 'layout', 'longPress', 'press', 'pressIn', 'pressOut'],
  View: viewEvents
};
exports.eventMap = eventMap;

var NativeTestEvent = function () {
  function NativeTestEvent(typeArg) {
    (0, _classCallCheck2.default)(this, NativeTestEvent);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.args = args;
    this.typeArg = typeArg;
    this.validTargets = Object.keys(eventMap).filter(function (c) {
      return eventMap[c].includes(typeArg);
    });
  }

  (0, _createClass2.default)(NativeTestEvent, [{
    key: "target",
    set: function set(target) {
      this._target = target;
    },
    get: function get() {
      return this._target;
    }
  }]);
  return NativeTestEvent;
}();

exports.NativeTestEvent = NativeTestEvent;

function getEventHandlerName(key) {
  return "on" + key.charAt(0).toUpperCase() + key.slice(1);
}

function validateElementType(list, element) {
  return list.includes(element.type) || list.includes(element.type.displayName);
}

function isValidTarget(element, event) {
  return event.validTargets.length ? validateElementType(event.validTargets, element) : true;
}

function isDisabled(element) {
  var _element$props = element.props,
      _element$props$access = _element$props.accessibilityStates,
      accessibilityStates = _element$props$access === void 0 ? [] : _element$props$access,
      disabled = _element$props.disabled;
  return disabled || accessibilityStates.includes('disabled');
}

function findEventTarget(element, event) {
  var typeArg = event.typeArg;
  var handlerName = getEventHandlerName(typeArg);
  var eventHandler = element.props[handlerName];

  if (eventHandler && !isDisabled(element) && isValidTarget(element, event)) {
    return eventHandler;
  }

  return element.parent ? findEventTarget(element.parent, event) : null;
}

function fireEvent(element, event) {
  event.target = findEventTarget(element, event);
  if (event.target) event.target.apply(event, (0, _toConsumableArray2.default)(event.args));
  return event.target;
}

var eventList = Object.keys(eventMap).reduce(function (list, name) {
  return [].concat((0, _toConsumableArray2.default)(list), (0, _toConsumableArray2.default)(eventMap[name].filter(function (event) {
    return !list.includes(event);
  })));
}, []);
eventList.forEach(function (typeArg) {
  fireEvent[typeArg] = function (node) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fireEvent(node, (0, _construct2.default)(NativeTestEvent, [typeArg].concat(args)));
  };
});