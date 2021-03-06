function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class DynamicContentDomComponents {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    this.editor = editor;
  }

  addDynamicContentType() {
    // Not sure this is still used. https://grapesjs.com/docs/modules/Components.html#define-custom-component-type
    function isComponent(el) {
      console.trace('we use it: isComponent has been called');

      if (el.getAttribute && el.getAttribute('data-slot') === 'dynamicContent') {
        console.warn('itistrue', el.getAttribute);
        return {
          type: 'dynamic-content'
        };
      }

      console.warn('itisfalse', el.getAttribute);
      return false;
    }

    const dc = this.editor.DomComponents;
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const model = defaultModel.extend({
      defaults: { ...defaultModel.prototype.defaults,
        name: 'Dynamic Content',
        // draggable: '[data-gjs-type=cell]',
        // droppable: false,
        editable: false,
        stylable: false,
        propagate: ['droppable', 'editable'],
        attributes: {
          // Default attributes
          'data-gjs-type': 'dynamic-content',
          // Type for GrapesJS
          'data-slot': 'dynamicContent' // Retro compatibility with old template

        }
      },

      /**
       * Initilize the component
       */
      init() {
        // Add toolbar edit button if it's not already in
        const toolbar = this.get('toolbar');
        const id = 'toolbar-dynamic-content';

        if (!toolbar.filter(tlb => tlb.id === id).length) {
          toolbar.unshift({
            id,
            command: 'preset-mautic:dynamic-content-open',
            attributes: {
              class: 'fa fa-pencil-square-o'
            }
          });
        }
      }

    });
    const view = defaultType.view.extend({
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%;user-select: none;'
      },
      events: {
        dblclick: 'onActive'
      },

      // maybe use onRender for token to slot conversion
      // open the dynamic content modal if the editor is added or double clicked
      onActive() {
        const target = this.model;
        this.em.get('Commands').run('preset-mautic:dynamic-content-tokens-to-slots');
        this.em.get('Commands').run('preset-mautic:dynamic-content-open', {
          target
        });
      } // does not work: gets removed when Sorting (by grapesjs)
      // removed() {
      //   // Delete dynamic-content on Mautic side
      //   const component = this.model;
      //   this.em
      //     .get('Commands')
      //     .run('preset-mautic:dynamic-content-delete-store-item', { component });
      // },


    }); // add the Dynamic Content component

    dc.addType('dynamic-content', {
      isComponent,
      model,
      view
    });
  }

}