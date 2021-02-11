Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockNativeMethods = void 0;
var mockNativeMethods = {
  measure: jest.fn(),
  measureInWindow: jest.fn(),
  measureLayout: jest.fn(),
  setNativeProps: jest.fn(),
  focus: jest.fn(),
  blur: jest.fn()
};
exports.mockNativeMethods = mockNativeMethods;