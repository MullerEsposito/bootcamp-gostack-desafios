var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = waitWrapper;

var _waitForExpect = _interopRequireDefault(require("wait-for-expect"));

var _config = require("./config");

function wait() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 4500 : _ref$timeout,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 50 : _ref$interval;

  return (0, _waitForExpect.default)(callback, timeout, interval);
}

function waitWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _config.getConfig)().asyncWrapper(function () {
    return wait.apply(void 0, args);
  });
}