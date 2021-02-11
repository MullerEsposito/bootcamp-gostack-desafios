Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeText = getNodeText;

function getNodeText(node) {
  if (node.type === 'Button') {
    return node.getProp('title');
  } else {
    return Array.from(node.children).join('');
  }
}