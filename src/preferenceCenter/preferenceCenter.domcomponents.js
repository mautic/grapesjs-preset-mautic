export default class PreferenceCenterDomComponents {
  editor;

  constructor(editor) {
    this.editor = editor;
  }

  addPreferenceCenterContentTypes() {
    this.addNewContentType('Segment List', 'segmentlist');
    this.addNewContentType('Category List', 'categorylist');
    this.addNewContentType('Preferred Channel', 'preferredchannel');
    this.addNewContentType('Channel Frequency', 'channelfrequency');
    this.addNewContentType('Save Preferences', 'saveprefsbutton');
    this.addNewContentType('Unsubscribe All', 'donotcontact');
    this.addNewContentType('Success Message', 'successmessage');
  }

  addNewContentType(name, type, slot) {
    const dc = this.editor.DomComponents;
    const baseModel = dc.getType('text').model;
    const model = baseModel.extend(
      {
        defaults: {
          ...baseModel.prototype.defaults,
          name,
          tagName: 'div',
          droppable: false,
          editable: false,
          stylable: false,
          propagate: ['droppable', 'editable'],
          attributes: {
            'data-gjs-type': type,
            'data-slot': slot,
          },
        },
      },
      {
        isComponent(el) {
          return el.getAttribute && el.getAttribute('data-slot') === slot;
        },
      }
    );

    dc.addType(type, { model });
  }
}
