var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueriesForElement = getQueriesForElement;

var defaultQueries = _interopRequireWildcard(require("./queries"));

function getQueriesForElement(element) {
  var queries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultQueries;
  return Object.keys(queries).reduce(function (helpers, key) {
    var fn = queries[key];
    helpers[key] = fn.bind(null, element);
    return helpers;
  }, {});
}