function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import ButtonPreviewCommand from './buttonPreview.command';
import ButtonApplyCommand from './buttonApply.command';
import ButtonsService from './buttons.service';
export default class ButtonPreview {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    if (!editor) {
      throw new Error('no editor');
    }

    this.editor = editor;
  }
  /**
   * Add the preview button
   */


  addButton() {
    let title = Mautic.translate('grapesjsbuilder.buttons.buttonPreview.title');
    let disable = false;
    let command = ButtonPreview.getCommand();

    if (ButtonsService.isNewEntity()) {
      title = Mautic.translate('grapesjsbuilder.buttons.buttonPreview.titleDisabled');
      disable = true;
      command = '';
    }

    this.editor.Panels.addButton('devices-c', [{
      id: 'devices-c-preview',
      className: `fa fa-external-link`,
      active: false,
      disable,
      attributes: {
        id: 'btn-views-Preview',
        title
      },
      command,
      context: 'devices-c-preview'
    }]);
    this.editor.on(`stop:${ButtonApplyCommand.name}`, () => {
      if (this.editor.Panels.getButton('devices-c', 'devices-c-preview').get('disable') === true) {
        this.editor.Panels.getButton('devices-c', 'devices-c-preview').set('disable', false);
        this.editor.Panels.getButton('devices-c', 'devices-c-preview').set('command', ButtonPreview.getCommand());
      }
    });
  }
  /**
   * Add Preview command
   */


  addCommand() {
    this.editor.Commands.add(ButtonPreviewCommand.name, {
      run: ButtonPreview.getCallback()
    });
  }
  /**
   * Get the Preview command name based on the editor mode
   *
   * @returns String
   */


  static getCommand() {
    return ButtonPreviewCommand.name;
  }
  /**
   * Get the actual Command/Function to be executed on closing of the editor
   *
   * @returns Function
   */


  static getCallback() {
    return ButtonPreviewCommand.previewForm;
  }

}