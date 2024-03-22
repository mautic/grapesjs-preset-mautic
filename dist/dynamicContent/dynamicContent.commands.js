function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Logger from '../logger';
import MjmlService from '../mjml/mjml.service';
import DynamicContentService from './dynamicContent.service';
export default class DynamicContentCommands {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "dcPopup", void 0);

    _defineProperty(this, "dcService", void 0);

    _defineProperty(this, "logger", void 0);

    this.dcService = new DynamicContentService(editor);
    this.logger = new Logger(editor);
  } // eslint-disable-next-line class-methods-use-this


  stopDynamicContentPopup() {
    // Destroy Dynamic Content editors and write the contents to the textarea
    var logger = this.logger;

    if (ckEditors != undefined && ckEditors.size > 0) {
      ckEditors.forEach(function (value, key, map) {
        const name = key.id;

        if (name.includes('dynamicContent')) {
          logger.debug(`Destroying Dynamic Content editor: ${name}`);
          map.get(key).destroy();
          ckEditors.delete(key);
        }
      });
    }

    this.dcService.updateDcStoreItem();
  }
  /**
   * Update and wire all dynamic content components on the canvas to
   * human readable texts/slots/components.
   * E.g. if they are initialized from a {token}
   */


  updateComponentsFromDcStore() {
    const components = this.dcService.getDcComponents();
    components.forEach(comp => {
      if (!this.dcService.updateComponentFromDcStore(comp)) {
        this.logger.warning('DC: DynamicContent component not updated', {
          comp
        });
      }
    });
  }
  /**
   * Convert dynamic content components to tokens
   * Dynamic Content => {dynamicContent}
   *
   * @param editor
   * @returns integer nr of dynamic content slots found
   */
  // eslint-disable-next-line class-methods-use-this


  convertDynamicContentComponentsToTokens(editor) {
    // get all dynamic content elements loaded in the editor
    const dynamicContents = editor.DomComponents.getWrapper().find('[data-slot="dynamicContent"]');
    this.logger.debug(`DC: ${dynamicContents.length} components found`, {
      dynamicContents
    });
    dynamicContents.forEach(dynamicContent => {
      const attributes = dynamicContent.getAttributes();
      const decId = attributes['data-param-dec-id'];

      if (!decId) {
        this.logger.debug('DC: Expected a Dynamic Content component', {
          dynamicContent
        });
        throw new Error('No Dynamic Content component');
      }

      const dynConId = DynamicContentCommands.getDcStoreId(attributes['data-param-dec-id']);
      const dynConTarget = mQuery(dynConId);
      const dynConName = dynConTarget.find(`${dynConId}_tokenName`).val();
      const dynConToken = `{dynamiccontent="${dynConName}"}`; // Clear id because it's reloaded by Mautic and this prevent slot to be destroyed by GrapesJs destroy event on close.
      // dynamicContent.addAttributes({ 'data-param-dec-id': '' });

      this.logger.debug("DC: Replaced component's content with its token", {
        dynamicContent,
        dynConToken
      });
      dynamicContent.components('');
      dynamicContent.set('content', dynConToken);
    });
    return dynamicContents.length;
  }
  /**
   * Build and display the Dynamic Content editor popup/modal window.
   * Hint: the passed in editor is the main grapesjs editor.
   *
   * @param {Model} component The current grapesjs component
   */
  // eslint-disable-next-line class-methods-use-this


  showDynamicContentPopup(editor, sender, options) {
    this.dcPopup = DynamicContentCommands.buildDynamicContentPopup();
    this.addDynamicContentEditor(editor, options);
    const title = Mautic.translate('grapesjsbuilder.dynamicContentBlockLabel');
    const modal = editor.Modal;
    modal.setTitle(title);
    editor.Modal.setContent(this.dcPopup);
    modal.open(); // Set up dynamic content editors if present

    Mautic.setDynamicContentEditors(Mautic.getBuilderContainer()); // When a new Dynamic Content filter (tab) is added, we want to turn the editor into CKEditor.

    Mautic.dynamicContentAddNewFilterListener(textarea => {
      Mautic.ConvertFieldToCkeditor(textarea, {});
    }); // When a new Dynamic Content item (slot) is added, we want to turn the editor into CKEditor.

    Mautic.dynamicContentAddNewItemListener(textarea => {
      Mautic.ConvertFieldToCkeditor(textarea, {});
    });
    modal.onceClose(() => editor.stopCommand('preset-mautic:dynamic-content-open'));
  }
  /**
   * Build the basic popup/modal frame to hold the dynamic content editor
   * @returns HTMLDivElement
   */


  static buildDynamicContentPopup() {
    const codePopup = document.createElement('div'); // codePopup.setAttribute('id', 'codePopup');

    codePopup.setAttribute('id', 'dynamic-content-popup');
    return codePopup;
  }
  /**
   * Load Dynamic Content editor and append to the codePopup Modal
   */


  addDynamicContentEditor(editor, options) {
    const {
      target
    } = options;
    const dcComponent = target || editor.getSelected();

    if (!dcComponent) {
      throw new Error('No DC Components found');
    }

    const attributes = dcComponent.getAttributes(); // const popupContent = dcPopup.querySelector('#dynamic-content-popup');
    // do we need both?
    // console.warn({ dcPopup });
    // console.warn({ popupContent });
    // get the dynamic content editor

    const dcEditor = mQuery(DynamicContentCommands.getDcStoreId(attributes['data-param-dec-id']));

    if (dcEditor.length <= 0) {
      throw new Error(`No Dynamic Content editor found for decId: '${attributes['data-param-dec-id']}'`);
    } // Show if hidden


    dcEditor.removeClass('fade'); // Hide delete default button

    dcEditor.find('.tab-pane:first').find('.remove-item').hide(); // Clean existing editor

    mQuery(this.dcPopup).empty(); // Insert inside popup

    mQuery(this.dcPopup).append(dcEditor.detach());
  }

  linkComponentToStoreItem(edtr, sender, options) {
    // Add a new DC HTML store item, if it doesnt exist.
    // Hint: the first dynamic content item (tab) is created from php: #emailform_dynamicContent_0
    this.dcService.linkComponentToStoreItem(options.component);
  }
  /**
   * Delete DynamicContent on Mautic side
   *
   * @param component
   */
  // eslint-disable-next-line class-methods-use-this


  deleteDynamicContentStoreItem(editor, sender, options) {
    const {
      component
    } = options;
    const attributes = component.getAttributes();

    if (!attributes['data-param-dec-id']) {
      this.logger.warning('no dec-id found. Can not delete', attributes);
    }

    const dcStoreId = DynamicContentCommands.getDcStoreId(attributes['data-param-dec-id']);
    const dcStoreItem = mQuery(dcStoreId);

    if (!dcStoreItem) {
      this.logger.warning('No DynamicContent store item found', {
        dcStoreId
      });
    } // remove the store item


    dcStoreItem.find('a.remove-item:first').click(); // remove store navigation item

    const dynCon = mQuery('.dynamicContentFilterContainer').find(`a[href='${dcStoreId}']`);

    if (!dynCon || !dynCon.parent()) {
      this.logger.warning('No DynamicContent store item to delete found', {
        dcStoreId
      });
    }

    dynCon.parent().remove();
    this.logger.debug('DC: DynamicContent store item removed', {
      dcStoreId
    });
  }
  /**
   * Get the DynamicContent identifier of the html store item
   * based on the token nr (decId)
   * e.g. emailform_dynamicContent_0
   * @param {integer} decId
   * @returns string
   */


  static getDcStoreId(decId) {
    const id = decId - 1;

    if (id < 0) {
      throw new Error('no dynamic content ID');
    }

    return `#emailform_dynamicContent_${id}`;
  }

}