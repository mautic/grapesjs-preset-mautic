function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-else-return */
import ContentService from '../content.service';
import ButtonCloseCommands from './buttonClose.command';
export default class ButtonClose {
  /**
   * The close command based on the editor mode
   */

  /**
   * Add close button with save for Mautic
   */
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "command", void 0);

    if (!editor) {
      throw new Error('no editor');
    }

    this.editor = editor;
    this.command = this.getCommand();
  }

  addButton() {
    this.editor.Panels.addButton('views', [{
      id: 'close',
      className: 'fa fa-times-circle',
      attributes: {
        title: 'Close'
      },
      command: this.command
    }]);
  }

  addCommand() {
    this.editor.Commands.add(this.command, {
      run: this.getCallback()
    });
  }
  /**
   * Get the close command based on the editor mode
   */


  getCommand() {
    const mode = ContentService.getMode(this.editor);

    if (mode === ContentService.modePageHtml) {
      return 'mautic-editor-page-html-close';
    }

    if (mode === ContentService.modeEmailHtml) {
      return 'mautic-editor-email-html-close';
    }

    if (mode === ContentService.modeEmailMjml) {
      return 'mautic-editor-email-mjml-close';
    }

    throw new Error(`no valid builder mode: ${mode}`);
  }
  /**
   * get the actual Command/Function to be executed on closing of the editor
   * @returns Function
   */


  getCallback() {
    if (this.command === 'mautic-editor-page-html-close') {
      return ButtonCloseCommands.closeEditorPageHtml;
    }

    if (this.command === 'mautic-editor-email-html-close') {
      return ButtonCloseCommands.closeEditorEmailHtml;
    }

    if (this.command === 'mautic-editor-email-mjml-close') {
      return ButtonCloseCommands.closeEditorEmailMjml;
    }

    throw new Error(`no valid command: ${this.command}`);
  }

}