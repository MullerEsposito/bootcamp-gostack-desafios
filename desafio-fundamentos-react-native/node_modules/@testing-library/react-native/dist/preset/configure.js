var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _actCompat = require("../act-compat");

var _events = require("../lib/events");

var _lib = require("../lib");

global.NativeTestEvent = _events.NativeTestEvent;
(0, _lib.configure)({
  asyncWrapper: function asyncWrapper(cb) {
    var result;
    return _regenerator.default.async(function asyncWrapper$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _regenerator.default.awrap((0, _actCompat.asyncAct)(function _callee() {
              return _regenerator.default.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _regenerator.default.awrap(cb());

                    case 2:
                      result = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 2:
            return _context2.abrupt("return", result);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  coreComponents: ['react-native/Libraries/Components/ActivityIndicator/ActivityIndicator', 'react-native/Libraries/Components/Button', 'react-native/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid', 'react-native/Libraries/Image/Image', 'react-native/Libraries/Modal/Modal', 'react-native/Libraries/Components/Picker/Picker', 'react-native/Libraries/Components/RefreshControl/RefreshControl', 'react-native/Libraries/Components/SafeAreaView/SafeAreaView', 'react-native/Libraries/Components/ScrollView/ScrollView', 'react-native/Libraries/Components/Switch/Switch', 'react-native/Libraries/Text/Text', 'react-native/Libraries/Components/TextInput/TextInput', 'react-native/Libraries/Components/Touchable/TouchableHighlight', 'react-native/Libraries/Components/Touchable/TouchableNativeFeedback', 'react-native/Libraries/Components/Touchable/TouchableOpacity', 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback', 'react-native/Libraries/Components/View/View'],
  displayValueComponents: ['TextInput', 'Picker', 'Switch'],
  textComponents: ['Button', 'Text', 'TextInput'],
  titleComponents: ['Button', 'RefreshControl']
});