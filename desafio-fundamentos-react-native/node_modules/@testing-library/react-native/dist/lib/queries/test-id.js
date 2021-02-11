var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByTestId = exports.findAllByTestId = exports.getAllByTestId = exports.getByTestId = exports.queryAllByTestId = exports.queryByTestId = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _allUtils = require("./all-utils");

var queryAllByTestId = _allUtils.queryAllByProp.bind(null, 'testID');

exports.queryAllByTestId = queryAllByTestId;

var getMultipleError = function getMultipleError(c, id) {
  return "Found multiple elements with the testID of: " + id;
};

var getMissingError = function getMissingError(c, id) {
  return "Unable to find an element with the testID of: " + id;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByTestId, getMultipleError, getMissingError),
    _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
    queryByTestId = _buildQueries2[0],
    getAllByTestId = _buildQueries2[1],
    getByTestId = _buildQueries2[2],
    findAllByTestId = _buildQueries2[3],
    findByTestId = _buildQueries2[4];

exports.findByTestId = findByTestId;
exports.findAllByTestId = findAllByTestId;
exports.getByTestId = getByTestId;
exports.getAllByTestId = getAllByTestId;
exports.queryByTestId = queryByTestId;