var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByLabelText = exports.findAllByLabelText = exports.getAllByLabelText = exports.getByLabelText = exports.queryAllByLabelText = exports.queryByLabelText = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _allUtils = require("./all-utils");

var queryAllByLabelText = _allUtils.queryAllByProp.bind(null, 'accessibilityLabel');

exports.queryAllByLabelText = queryAllByLabelText;

var getMultipleError = function getMultipleError(c, label) {
  return "Found multiple elements with the accessibilityLabel of: " + label;
};

var getMissingError = function getMissingError(c, label) {
  return "Unable to find an element with the accessibilityLabel of: " + label;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByLabelText, getMultipleError, getMissingError),
    _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
    queryByLabelText = _buildQueries2[0],
    getAllByLabelText = _buildQueries2[1],
    getByLabelText = _buildQueries2[2],
    findAllByLabelText = _buildQueries2[3],
    findByLabelText = _buildQueries2[4];

exports.findByLabelText = findByLabelText;
exports.findAllByLabelText = findAllByLabelText;
exports.getByLabelText = getByLabelText;
exports.getAllByLabelText = getAllByLabelText;
exports.queryByLabelText = queryByLabelText;