function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Logger from '../logger';
export default class PreferenceCenterService {
  /**
   * Dynamic content tabs on the base html item store (hidden)
   * Each "tab" corresponds to a preference center block on the canvas.
   * References by the tab.title (e.g. Preference Center)
   */

  /**
   * Components currently on the canvas/editor
   */
  constructor(editor) {
    _defineProperty(this, "dcStoreItems", []);

    _defineProperty(this, "dcComponents", []);

    _defineProperty(this, "editor", void 0);

    this.logger = new Logger(editor);
    this.editor = editor;
  }
  /**
   * Get the name of the preference center element.
   * Used as identifier
   * E.g. Preference Center from: {preferencecenter="Preference Center"}
   * @param {GrapesJS Component} component
   * @returns string | null
   */


  getTokenName(component) {
    const regex = RegExp(/\{preferencecenter="(.*)"\}/, 'g');
    const content = component.get('content');
    const regexEx = regex.exec(content);

    if (!regexEx || !regexEx[1]) {
      this.logger.debug('No preference center tokens to get', {
        content
      });
      return null;
    }

    return regexEx[1];
  }
  /**
   * Convert a text token to the default variant
   * Wire up the ids
   *
   * @param {GrapesJS Component} component
   */


  transformDcTokenToSlot(component) {
    this.getDcStoreItems();
    this.getDcComponents();
    let dcName = this.getTokenName(component);

    if (!dcName) {
      this.logger.debug('No preference center tokens name', {
        component,
        dcName
      });
      return false;
    } // if it is a new component (dropped to the canvas)
    // give it a new id (and create a corresponding item in the html store)


    if (dcName === 'Preference Center') {
      dcName += ` ${this.dcComponents.length}`;
    } // get the item/tab matching the preference center on the canvas


    const dcItem = this.dcStoreItems.find(item => item.name === dcName); // If preference center item exists -> fill
    // Hint: the first preference center item (tab) is created from php: #emailform_preferenceCenter_0

    if (dcItem) {
      this.updateComponent(component, dcItem);
    } else {
      this.initNewComponent(component, dcName);
    }

    return true;
  }

  updateComponent(component, dcItem) {
    this.logger.debug('Using existing preference center item', {
      dcItem
    }); // Update the component on the canvas with new values from the html store

    component.addAttributes({
      'data-param-dec-id': dcItem.id
    });
    component.set('content', dcItem.content);
    return component; // let dynConContent = '';
    // if (dcItem.id) {
    //   const dynConContainer = mQuery(dcTarget.htmlId).find(dcTarget.content);
    //   // is there content in the current editor?
    //   if (dynConContainer.hasClass('editor')) {
    //     dynConContent = dynConContainer.froalaEditor('html.get');
    //   } else {
    //     dynConContent = dynConContainer.html();
    //   }
    // }
  }
  /**
   * If preference center item in html store doesn't exist -> create
   * @todo replace mQuery('#preferenceCenterTabs') with class property
   *
   * @param {GrapesJS Component} component
   * @param {string}
   */


  initNewComponent(component, dcName) {
    const dcTarget = Mautic.createNewPreferenceCenterItem(mQuery); // get ID from newly generated store item: e.g. #emailform_preferenceCenter_1

    component.addAttributes({
      'data-param-dec-id': parseInt(dcTarget.replace(/[^0-9]/g, ''), 10)
    }); // Replace token on canvas with user facing name: dcName

    component.set('content', dcName);
    this.logger.debug('Created a new preference center item', {
      dcName,
      component
    });
    return component;
  }
  /**
   * Extract the preference center index and the html id from a string:
   * e.g. href from dcTarget
   *
   * @param {string} identifier e.g. http://localhost:1234/#emailform_preferenceCenter_1
   */


  static getDcTarget(identifier) {
    const regex = RegExp(/(#emailform_preferenceCenter_)(\d*)/, 'g');
    const result = regex.exec(identifier);

    if (!result || result.length !== 3) {
      throw new Error(`No PreferenceCenter target found: ${identifier}`);
    }

    return {
      htmlId: `${result[1]}${result[2]}`,
      // #emailform_preferenceCenter_1
      decId: parseInt(result[2], 10),
      // 1
      content: `${result[1]}${result[2]}_content` // #emailform_preferenceCenter_1_content

    };
  } // /**
  //  * Extract the preference center id from an id string:
  //  *
  //  * @param {string} identifier e.g. emailform_preferenceCenter_1
  //  * @return integer
  //  */
  // static getDynContentId(identifier) {
  //   const regex = RegExp(/(emailform_preferenceCenter_)(\d*)/, 'g');
  //   const result = regex.exec(identifier);
  //   console.warn({ result });
  //   if (!result || !result[2]) {
  //     throw new Error(`No PreferenceCenter target found: ${identifier}`);
  //   }
  //   return parseInt(result[2], 10)
  // }

  /**
   * Get the default preference center name (tokenName)
   * @param {string} id id of the input field
   * @returns string of the field
   */


  static getDcName(target) {
    return `Preference Center ${target.decId + 1}`;
  }
  /**
   * Get the default content
   * @param {string} id id of the textarea
   * @returns string with the html in the textarea
   */


  static getDcContent(target) {
    return mQuery(target.id).val() || PreferenceCenterService.getDcName(target);
  }
  /**
   * Get all Preference Center items from the HTML store
   * @returns array of objects with title and href
   */


  getDcStoreItems() {
    this.dcStoreItems = []; // #preferenceCenterContainer

    mQuery('.preference-center').each((index, value) => {
      const dcTarget = PreferenceCenterService.getDcTarget(`#${value.id}`);
      this.dcStoreItems.push({
        identifier: value.id,
        // emailform_preferenceCenter_0
        id: dcTarget.decId,
        // 0
        name: PreferenceCenterService.getDcName(dcTarget),
        // Preference Center 1
        content: PreferenceCenterService.getDcContent(dcTarget) // Default Preference Center

      });
    }); // one is always set from php

    if (!this.dcStoreItems[0]) {
      throw Error('No preference center store item found!');
    }
  }
  /**
   * Get all the preference center components currently
   * on the canvas (in the editor).
   * @return {GrapesJS Component} array
   */


  getDcComponents() {
    if (!this.editor) {
      throw new Error('no Editor');
    }

    this.dcComponents = [];
    const wrapper = this.editor.getWrapper();
    const dcCompoments = wrapper.find('[data-gjs-type="preference-center"]');
    dcCompoments.forEach(comp => {
      if (!comp.is('preference-center')) {
        throw new Error('no preference-center component');
      }

      this.dcComponents.push(comp);
    });
    return this.dcComponents;
  }

}