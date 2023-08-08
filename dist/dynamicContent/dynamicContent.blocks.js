function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
export default class DynamicContentBlocks {
  constructor(editor, opts = {}) {
    _defineProperty(this, "editor", void 0);
    _defineProperty(this, "opts", void 0);
    _defineProperty(this, "blockManager", void 0);
    this.editor = editor;
    this.opts = opts;
    this.blockManager = this.editor.BlockManager;
  }
  addDynamciContentBlock() {
    this.blockManager.add('dynamic-content', {
      label: Mautic.translate('grapesjsbuilder.dynamicContentBlockLabel'),
      activate: true,
      select: true,
      attributes: {
        class: 'fa fa-tag'
      },
      content: {
        type: 'dynamic-content',
        content: '{dynamiccontent="Dynamic Content"}',
        style: {
          padding: '10px'
        },
        activeOnRender: 1
      }
    });
  }
}