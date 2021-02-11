var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByPlaceholderText = exports.findAllByPlaceholderText = exports.getAllByPlaceholderText = exports.getByPlaceholderText = exports.queryAllByPlaceholderText = exports.queryByPlaceholderText = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _allUtils = require("./all-utils");

var queryAllByPlaceholderText = _allUtils.queryAllByProp.bind(null, 'placeholder');

exports.queryAllByPlaceholderText = queryAllByPlaceholderText;

var getMultipleError = function getMultipleError(c, text) {
  return "Found multiple elements with the placeholder text of: " + text;
};

var getMissingError = function getMissingError(c, text) {
  return "Unable to find an element with the placeholder text of: " + text;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByPlaceholderText, getMultipleError, getMissingError),
    _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
    queryByPlaceholderText = _buildQueries2[0],
    getAllByPlaceholderText = _buildQueries2[1],
    getByPlaceholderText = _buildQueries2[2],
    findAllByPlaceholderText = _buildQueries2[3],
    findByPlaceholderText = _buildQueries2[4];

exports.findByPlaceholderText = findByPlaceholderText;
exports.findAllByPlaceholderText = findAllByPlaceholderText;
exports.getByPlaceholderText = getByPlaceholderText;
exports.getAllByPlaceholderText = getAllByPlaceholderText;
exports.queryByPlaceholderText = queryByPlaceholderText;