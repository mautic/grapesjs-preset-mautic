function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import ButtonApplyCommand from './buttonApply.command';
import ButtonsService from './buttons.service';
import ContentService from '../content.service';
export default class ButtonApply {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);
    if (!editor) {
      throw new Error('no editor');
    }
    this.editor = editor;
  }

  /**
   * Add the save button before the close button
   */
  addButton() {
    const emailTypeSegment = 'list';
    const mode = ContentService.getMode(this.editor);
    let title = Mautic.translate('grapesjsbuilder.panelsViewsButtonsApplyTitle');
    let disable = false;
    let command = ButtonApply.getCommand();
    if (mode === ContentService.modeEmailHtml || mode === ContentService.modeEmailMjml) {
      const emailType = ButtonsService.getElementValue('emailform_emailType');

      // if it is a segment email, check if segment field is filled
      if (emailType === emailTypeSegment) {
        const emailFormList = ButtonsService.getElementValue('emailform_lists');
        if (emailFormList.length === 0) {
          title = Mautic.translate('grapesjsbuilder.panelsViewsButtonsApplyTitleError');
          disable = true;
          command = '';
        }
      }
    }
    this.editor.Panels.addButton('views', [{
      id: 'views-apply',
      className: `fa fa-check`,
      active: false,
      disable,
      attributes: {
        id: 'btn-views-apply',
        title
      },
      command,
      context: 'views-apply'
    }]);
  }
  addCommand() {
    this.editor.Commands.add(ButtonApplyCommand.name, {
      run: ButtonApply.getCallback()
    });
  }

  /**
   * Get the apply command name based on the editor mode
   *
   * @returns String
   */
  static getCommand() {
    return ButtonApplyCommand.name;
  }

  /**
   * Get the actual Command/Function to be executed on closing of the editor
   *
   * @returns Function
   */
  static getCallback() {
    return ButtonApplyCommand.applyForm;
  }
}