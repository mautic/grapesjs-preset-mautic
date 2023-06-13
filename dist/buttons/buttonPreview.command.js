function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import ButtonsService from './buttons.service';
import ContentService from '../content.service';
export default class ButtonPreviewCommand {
  /**
   * The command name
   */

  /**
   * Email preview command
   *
   * @param editor
   */
  static previewForm(editor) {
    const form = ButtonsService.getForm();
    const instanceId = ButtonsService.getInstanceId(form);
    ButtonPreviewCommand.openPreview(editor, instanceId);
  }

  /**
   * Open  the email preview
   *
   * @param editor
   * @param emailId
   */
  static openPreview(editor, emailId) {
    const mode = ContentService.getMode(editor);
    const url = `${window.location.origin}${mauticBaseUrl}${mode.split('-')[0]}/preview/${emailId}`;
    window.open(url, '_blank');
  }
}
_defineProperty(ButtonPreviewCommand, "name", 'preset-mautic:preview-form');