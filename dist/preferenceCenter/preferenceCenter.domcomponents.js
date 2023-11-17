function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
export default class PreferenceCenterDomComponents {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);
    this.editor = editor;
  }
  addPreferenceCenterContentTypes() {
    this.addNewContentType('Segment List', 'segmentlist');
    this.addNewContentType('Category List', 'categorylist');
    this.addNewContentType('Preferred Channel', 'preferredchannel');
    this.addNewContentType('Channel Frequency', 'channelfrequency');
    this.addNewContentType('Save Preferences', 'saveprefsbutton');
    this.addNewContentType('Unsubscribe All', 'donotcontact');
    this.addNewContentType('Success Message', 'successmessage');
  }
  addNewContentType(name, type, slot) {
    const dc = this.editor.DomComponents;
    const baseModel = dc.getType('text').model;
    const model = baseModel.extend({
      defaults: {
        ...baseModel.prototype.defaults,
        name,
        tagName: 'div',
        draggable: '[data-gjs-type=cell]',
        droppable: false,
        editable: false,
        stylable: false,
        propagate: ['droppable', 'editable'],
        attributes: {
          'data-gjs-type': type,
          'data-slot': slot
        }
      }
    }, {
      isComponent(el) {
        return el.getAttribute && el.getAttribute('data-slot') === slot;
      }
    });
    dc.addType(type, {
      model
    });
  }
}