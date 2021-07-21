function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class PreferenceCenterBlocks {
  constructor(editor, opts = {}) {
    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "opts", void 0);

    _defineProperty(this, "blockManager", void 0);

    this.editor = editor;
    this.opts = opts;
    this.blockManager = this.editor.BlockManager;
  }

  addPreferenceCenterBlock() {
    console.log('add preference center block');
    this.blockManager.add('category-list', {
      label: 'Category List',
      category : 'Prefrence Center',
      attributes: {
        class: 'gjs-fonts gjs-f-button'
      },
      content: 
        `<a href="#" target="_blank" class="button">Button</a>`,
    });
    this.blockManager.add('segment', {
      label: 'Segement',
      category : 'Prefrence Center',
      attributes: {
        class: 'gjs-fonts gjs-f-bars'
      },
      content: 
        `<a href="#" target="_blank" class="button">Button</a>`,
    });
    // this.blockManager.add('preference-center', {
    //   label: Mautic.translate('grapesjsbuilder.preferenceCenterBlockLabel'),
    //   activate: true,
    //   select: true,
    //   attributes: {
    //     class: 'fa fa-tag'
    //   },
    //   content: {
    //     type: 'preference-center',
    //     content: '{preferencecenter="Preference Center"}',
    //     style: {
    //       padding: '10px'
    //     },
    //     activeOnRender: 1
    //   }
    // });
  }

 

}