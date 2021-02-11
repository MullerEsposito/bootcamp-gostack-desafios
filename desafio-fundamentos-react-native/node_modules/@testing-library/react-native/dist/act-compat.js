var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncAct = asyncAct;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var testUtils = _interopRequireWildcard(require("react-test-renderer"));

var reactAct = testUtils.act;
var actSupported = reactAct !== undefined;

function actPolyfill(cb) {
  cb();
}

var act = reactAct || actPolyfill;
var youHaveBeenWarned = false;
var isAsyncActSupported = null;

function asyncAct(cb) {
  if (actSupported === true) {
    if (isAsyncActSupported === null) {
      return new Promise(function (resolve, reject) {
        var originalConsoleError = console.error;

        console.error = function error() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (args[0].indexOf('Warning: Do not await the result of calling TestRenderer.act') === 0) {
            isAsyncActSupported = false;
          } else if (args[0].indexOf('Warning: The callback passed to TestRenderer.act(...) function must not return anything') === 0) {} else {
            originalConsoleError.call(console, args);
          }
        };

        var cbReturn, result;

        try {
          result = reactAct(function () {
            cbReturn = cb();
            return cbReturn;
          });
        } catch (err) {
          console.error = originalConsoleError;
          reject(err);
          return;
        }

        result.then(function () {
          console.error = originalConsoleError;
          isAsyncActSupported = true;
          resolve();
        }, function (err) {
          console.error = originalConsoleError;
          isAsyncActSupported = true;
          reject(err);
        });

        if (isAsyncActSupported === false) {
          console.error = originalConsoleError;

          if (!youHaveBeenWarned) {
            console.error("It looks like you're using a version of react-test-renderer that supports the \"act\" function, but not an awaitable version of \"act\" which you will need. Please upgrade to at least react-test-renderer@16.9.0 to remove this warning.");
            youHaveBeenWarned = true;
          }

          cbReturn.then(function () {
            Promise.resolve().then(function () {
              act(function () {});
              resolve();
            });
          }, reject);
        }
      });
    } else if (isAsyncActSupported === false) {
      var _result;

      act(function () {
        _result = cb();
      });
      return _result.then(function () {
        return Promise.resolve().then(function () {
          act(function () {});
        });
      });
    }

    return act(cb);
  }

  var result;
  act(function () {
    result = cb();
  });
  return result.then(function () {
    return Promise.resolve().then(function () {
      act(function () {});
    });
  });
}

var _default = act;
exports.default = _default;