var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

module.exports = function cleanupAsync() {
  var _require, asyncAct, _require2, cleanup;

  return _regenerator.default.async(function cleanupAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _require = require('./act-compat'), asyncAct = _require.asyncAct;
          _require2 = require('./index'), cleanup = _require2.cleanup;
          _context2.next = 4;
          return _regenerator.default.awrap(asyncAct(function _callee() {
            return _regenerator.default.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 4:
          cleanup();

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};