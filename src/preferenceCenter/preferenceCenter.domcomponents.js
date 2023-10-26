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
      isComponent(e) {
        return e.tagName === 'INPUT';
      },
      model: {
        defaults: {
          tagName: 'input',
          attributes: { type: 'text' },
        },
      },
      extendFnView: ['updateAttributes'],
      view: {
        updateAttributes() {
          this.el.setAttribute('autocomplete', 'off');
        },
      },
    });
    dc.addType('checkbox', {
      extend: 'input',
      isComponent(e) {
        return e.tagName === 'INPUT' && e.type === 'checkbox';
      },
      model: {
        defaults: {
          copyable: !1,
          attributes: { type: 'checkbox' },
          traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait],
        },
      },
      view: {
        events: {
          click(e) {
            return e.preventDefault();
          },
        },
        init() {
          this.listenTo(this.model, 'change:attributes:checked', this.handleChecked);
        },
        handleChecked() {
          this.el.checked = !!this.model.get('attributes').checked;
        },
      },
    });
    dc.addType('label', {
      extend: 'text',
      isComponent(e) {
        return e.tagName === 'LABEL';
      },
      model: { defaults: { tagName: 'label', components: 'Label' } },
    });
    dc.addType('option', {
      isComponent: (el) => el.tagName === 'OPTION',

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
      isComponent: (el) => el.tagName === 'SELECT',

      model: {
        defaults: {
          tagName: 'select',
          components: [createOption('email', 'Email')],
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

    const domc = this.editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('date', {
      model: defaultModel.extend(
        {
          defaults: {
            ...defaultModel.prototype.defaults,
            'custom-name': 'date',
            tagName: 'input',
            type: 'date',
            attributes: {
              'data-gjs-type': 'date',
              'data-slot': 'date',
            },
            droppable: false, // Can't drop other elements inside
            copyable: false, // Do not allow to duplicate the component
            script() {
              const initDateRange = function () {
                const input = this;
                const options = {
                  singleDatePicker: true,
                  showDropdowns: true,
                };
                // eslint-disable-next-line no-undef
                $(input).daterangepicker(options);
              };

              initDateRange();
            },
          },
        },
        {
          isComponent(el) {
            const dateType = el.getAttribute && el.getAttribute('data-slot') === 'date';

            if (el.tagName === 'INPUT' && dateType) {
              return { type: 'date' };
            }

            return {};
          },
        }
      ),
      view: defaultView,
    });
  }
}
