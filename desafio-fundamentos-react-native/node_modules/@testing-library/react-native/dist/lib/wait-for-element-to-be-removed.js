Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElementToBeRemoved = waitForElementToBeRemovedWrapper;

var _config = require("./config");

var _helpers = require("./helpers");

function waitForElementToBeRemoved(callback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 50 : _ref$interval,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 4500 : _ref$timeout;

  return new Promise(function (resolve, reject) {
    if (typeof callback !== 'function') {
      reject(new Error('waitForElementToBeRemoved requires a callback as the first parameter'));
      return;
    }

    var timer = setTimeout(onTimeout, timeout);
    var observer;
    var result = callback();

    if (!result || Array.isArray(result) && !result.length) {
      onDone(new Error('The callback function which was passed did not return an element or non-empty array of elements. waitForElementToBeRemoved requires that the element(s) exist before waiting for removal.'));
    }

    observer = setTimeout(onMutation);

    function onDone(error, result) {
      var setImmediate = (0, _helpers.getSetImmediate)();
      clearTimeout(timer);
      setImmediate(function () {
        return clearTimeout(observer);
      });

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }

    function onMutation() {
      try {
        var _result = callback();

        if (!_result || Array.isArray(_result) && !_result.length) {
          onDone(null, true);
        } else {
          observer = setTimeout(onMutation, interval);
        }
      } catch (error) {
        onDone(null, true);
      }
    }

    function onTimeout() {
      onDone(new Error('Timed out in waitForElementToBeRemoved.'), null);
    }
  });
}

function waitForElementToBeRemovedWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _config.getConfig)().asyncWrapper(function () {
    return waitForElementToBeRemoved.apply(void 0, args);
  });
}