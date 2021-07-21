function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Logger from '../logger';
import PreferenceCenterService from './preferenceCenter.service';
export default class PreferenceCenterCommands {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "dcPopup", void 0);

    _defineProperty(this, "dcService", void 0);

    _defineProperty(this, "logger", void 0);

    this.dcService = new PreferenceCenterService(editor);
    this.logger = new Logger(editor);
  }

  launchPreferenceCenterPopup(editor, sender, options) {
    // Transform DC slots to token
    // editor.runCommand('preset-mautic:preference-center-slots-to-tokens');
    this.showPreferenceCenterEditor(editor, options);
  } // eslint-disable-next-line class-methods-use-this


  stopPreferenceCenterPopup(editor) {
    editor.runCommand('preset-mautic:preference-center-tokens-to-slots');
  }
  /**
   * Convert all preference center tokens on the canvas to
   * human readable texts/slots/component.
   * {preferencecenter} => Preference Center
   */


  convertPreferenceCenterTokensToSlots() {
    const components = this.dcService.getDcComponents();
    components.forEach(comp => {
      this.dcService.transformDcTokenToSlot(comp);
    });
  }
  /**
   * Convert preference center slots to tokens
   * Preference Center => {preferenceCenter}
   *
   * @param editor
   * @returns integer nr of preference center slots found
   */
  // eslint-disable-next-line class-methods-use-this


  convertPreferenceCenterSlotsToTokens(editor) {
    // get all preference center elements loaded in the editor
    const preferenceCenters = editor.DomComponents.getWrapper().find('[data-slot="preferenceCenter"]');
    preferenceCenters.forEach(preferenceCenter => {
      const attributes = preferenceCenter.getAttributes();
      const decId = attributes['data-param-dec-id']; // If it's not a token -> convert to token

      if (decId >= 0) {
        const dynConId = PreferenceCenterCommands.getDcStoreId(attributes['data-param-dec-id']);
        const dynConTarget = mQuery(dynConId);
        const dynConName = dynConTarget.find(`${dynConId}_tokenName`).val();
        const dynConToken = `{preferencecenter="${dynConName}"}`; // Clear id because it's reloaded by Mautic and this prevent slot to be destroyed by GrapesJs destroy event on close.
        // preferenceCenter.addAttributes({ 'data-param-dec-id': '' });

        preferenceCenter.set('content', dynConToken);
      }
    });
    return preferenceCenters.length;
  }
  /**
   * Build and display the Preference Center editor popup/modal window.
   * @param {Model} component The current grapesjs component
   */
  // eslint-disable-next-line class-methods-use-this


  showPreferenceCenterEditor(editor, options) {
    this.dcPopup = PreferenceCenterCommands.buildPreferenceCenterPopup();
    this.addPreferenceCenterEditor(editor, options);
    const title = Mautic.translate('grapesjsbuilder.preferenceCenterBlockLabel');
    const modal = editor.Modal;
    modal.setTitle(title);
    editor.Modal.setContent(this.dcPopup);
    modal.open();
    modal.onceClose(() => editor.stopCommand('preset-mautic:preference-center-open'));
  }
  /**
   * Build the basic popup/modal frame to hold the preference center editor
   * @returns HTMLDivElement
   */


  static buildPreferenceCenterPopup() {
    const content = document.createElement('div');
    content.setAttribute('id', 'preference-center-popup');
    const codePopup = document.createElement('div');
    codePopup.appendChild(content);
    return codePopup;
  }
  /**
   * Load Preference Center editor and append to the codePopup Modal
   */


  addPreferenceCenterEditor(editor, options) {
    const {
      target
    } = options;
    const dcComponent = target || editor.getSelected();

    if (!dcComponent) {
      throw new Error('No dc components found');
    }

    const attributes = dcComponent.getAttributes(); // const popupContent = dcPopup.querySelector('#preference-center-popup');
    // do we need both?
    // console.warn({ dcPopup });
    // console.warn({ popupContent });
    // get the preference center editor

    const focusForm = mQuery(PreferenceCenterCommands.getDcStoreId(attributes['data-param-dec-id']));

    if (focusForm.length <= 0) {
      throw new Error(`No preferenceCenter email form found for '${attributes['data-param-dec-id']}'`);
    } // Show if hidden


    focusForm.removeClass('fade'); // Hide delete default button

    focusForm.find('.tab-pane:first').find('.remove-item').hide(); // Insert inside popup

    mQuery(this.dcPopup).empty().append(focusForm.detach());
  }
  /**
   * Delete PreferenceCenter on Mautic side
   *
   * @param component
   */
  // eslint-disable-next-line class-methods-use-this


  deletePreferenceCenterStoreItem(editor, sender, options) {
    const {
      component
    } = options;
    const attributes = component.getAttributes();

    if (!attributes['data-param-dec-id']) {
      this.logger.warning('no dec-id found. Can not delete', attributes);
    }

    const dcStoreId = PreferenceCenterCommands.getDcStoreId(attributes['data-param-dec-id']);
    const dcStoreItem = mQuery(dcStoreId);

    if (!dcStoreItem) {
      this.logger.warning('No PreferenceCenter store item found', {
        dcStoreId
      });
    } // remove the store item


    dcStoreItem.find('a.remove-item:first').click(); // remove store navigation item

    const dynCon = mQuery('.preferenceCenterFilterContainer').find(`a[href='${dcStoreId}']`);

    if (!dynCon || !dynCon.parent()) {
      this.logger.warning('No PreferenceCenter store item to delete found', {
        dcStoreId
      });
    }

    dynCon.parent().remove();
    this.logger.debug('PreferenceCenter store item removed', {
      dcStoreId
    });
  }
  /**
   * Get the PreferenceCenter identifier of the html store item
   * e.g. emailform_preferenceCenter_0
   * @param {integer} id
   * @returns string
   */


  static getDcStoreId(id) {
    if (id < 0) {
      throw new Error('no preference center ID');
    }

    return `#emailform_preferenceCenter_${id}`;
  }

}