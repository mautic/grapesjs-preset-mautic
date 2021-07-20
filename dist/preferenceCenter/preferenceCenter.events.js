function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PreferenceCenterCommands from './preferenceCenter.commands';
import PreferenceCenterService from './preferenceCenter.service';
export default class PreferenceCenterEvents {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "dcService", void 0);

    this.editor = editor;
    this.dcService = new PreferenceCenterService(this.editor);
    this.dccmd = new PreferenceCenterCommands(this.editor);
  }

  onComponentRemove() {
    this.editor.on('component:remove', component => {
      // Delete preference-center on Mautic side
      if (component.get('type') === 'preference-center') {
        this.editor.runCommand('preset-mautic:preference-center-delete-store-item', {
          component
        });
      }
    });
  } // @todo remove? not used
  //   const modalContent = mQuery('#preference-center-popup');
  //   // On modal close -> move editor within Mautic
  //   if (modalContent) {
  //     const preferenceCenterContainer = mQuery('#preferenceCenterContainer');
  //     const content = mQuery(modalContent).contents().first();
  //     preferenceCenterContainer.append(content.detach());
  //   }
  // }


}