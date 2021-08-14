export default class PreferenceCenterDomComponents {
  editor;

  constructor(editor) {
    this.editor = editor;
  }

  addPreferenceCenterType() {
    const idTrait = {
      name: 'id',
    };
    const nameTrait = {
      name: 'name',
    };
    const valueTrait = {
      name: 'value',
    };

    const requiredTrait = {
      type: 'checkbox',
      name: 'required',
    };

    const checkedTrait = {
      type: 'checkbox',
      name: 'checked',
    };
    const dc = this.editor.DomComponents;
    dc.addType('input', {
      isComponent: function (e) {
        return 'INPUT' == e.tagName;
      },
      model: {
        defaults: {
          tagName: 'input',
          attributes: { type: 'text' },
        },
      },
      extendFnView: ['updateAttributes'],
      view: {
        updateAttributes: function () {
          this.el.setAttribute('autocomplete', 'off');
        },
      },
    }),
      dc.addType('checkbox', {
        extend: 'input',
        isComponent: function (e) {
          return 'INPUT' == e.tagName && 'checkbox' == e.type;
        },
        model: {
          defaults: {
            copyable: !1,
            attributes: { type: 'checkbox' },
            traits: [
              idTrait,
              nameTrait,
              valueTrait,
              requiredTrait,
              checkedTrait,
            ],
          },
        },
        view: {
          events: {
            click: function (e) {
              return e.preventDefault();
            },
          },
          init: function () {
            this.listenTo(
              this.model,
              'change:attributes:checked',
              this.handleChecked
            );
          },
          handleChecked: function () {
            this.el.checked = !!this.model.get('attributes').checked;
          },
        },
      }),
      dc.addType('label', {
        extend: 'text',
        isComponent: function (e) {
          return 'LABEL' == e.tagName;
        },
        model: { defaults: { tagName: 'label', components: 'Label' } },
      });
    dc.addType('option', {
      isComponent: (el) => el.tagName == 'OPTION',

      model: {
        defaults: {
          tagName: 'option',
          layerable: false,
          droppable: false,
          draggable: false,
          highlightable: false,
        },
      },
    });

    const createOption = (value, name) => ({
      type: 'option',
      components: name,
      attributes: { value },
    });

    dc.addType('select', {
      extend: 'input',
      isComponent: (el) => el.tagName == 'SELECT',

      model: {
        defaults: {
          tagName: 'select',
          components: [
            createOption('email', 'Email'),
            //createOption('opt2', 'Option 2'),
          ],
          traits: [
            nameTrait,
            {
              name: 'options',
              type: 'select-options',
            },
            requiredTrait,
          ],
        },
      },

      view: {
        events: {
          mousedown: (e) => e.preventDefault(),
        },
      },
    });
  }
}
