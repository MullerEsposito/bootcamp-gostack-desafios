var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByHintText = exports.findAllByHintText = exports.getAllByHintText = exports.getByHintText = exports.queryAllByHintText = exports.queryByHintText = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _allUtils = require("./all-utils");

var queryAllByHintText = _allUtils.queryAllByProp.bind(null, 'accessibilityHint');

exports.queryAllByHintText = queryAllByHintText;

var getMultipleError = function getMultipleError(c, hint) {
  return "Found multiple elements with the accessibilityHint of: " + hint;
};

var getMissingError = function getMissingError(c, hint) {
  return "Unable to find an element with the accessibilityHint of: " + hint;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByHintText, getMultipleError, getMissingError),
    _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
    queryByHintText = _buildQueries2[0],
    getAllByHintText = _buildQueries2[1],
    getByHintText = _buildQueries2[2],
    findAllByHintText = _buildQueries2[3],
    findByHintText = _buildQueries2[4];

exports.findByHintText = findByHintText;
exports.findAllByHintText = findAllByHintText;
exports.getByHintText = getByHintText;
exports.getAllByHintText = getAllByHintText;
exports.queryByHintText = queryByHintText;