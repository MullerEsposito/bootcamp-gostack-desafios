var _lib = require("../lib");

module.exports = {
  test: function test(value) {
    return value && value.$$typeof && (typeof Symbol === "function" ? Symbol.keyFor : "@@keyFor")(value.$$typeof) === 'ntl.element';
  },
  print: function print(value, serialize) {
    return serialize((0, _lib.toJSON)(value));
  }
};