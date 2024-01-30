function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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