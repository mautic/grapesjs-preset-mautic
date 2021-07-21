function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class PreferenceCenterListeners {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    this.editor = editor;
  }
  /**
   * On editor load: convert tokens to slots
   */


  onLoad() {
    this.editor.on('load', () => {
      this.editor.runCommand('preset-mautic:preference-center-tokens-to-slots');
    });
  }

}