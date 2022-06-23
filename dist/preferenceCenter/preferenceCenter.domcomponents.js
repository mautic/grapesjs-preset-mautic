function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class PreferenceCenterDomComponents {
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    this.editor = editor;
  }

  addPreferenceCenterType() {
    const idTrait = {
      name: 'id'
    };
    const nameTrait = {
      name: 'name'
    };
    const valueTrait = {
      name: 'value'
    };
    const requiredTrait = {
      type: 'checkbox',
      name: 'required'
    };
    const checkedTrait = {
      type: 'checkbox',
      name: 'checked'
    };
    const dc = this.editor.DomComponents;
    dc.addType('input', {
      isComponent: function (e) {
        return 'INPUT' == e.tagName;
      },
      model: {
        defaults: {
          tagName: 'input',
          attributes: {
            type: 'text'
          }
        }
      },
      extendFnView: ['updateAttributes'],
      view: {
        updateAttributes: function () {
          this.el.setAttribute('autocomplete', 'off');
        }
      }
    }), dc.addType('checkbox', {
      extend: 'input',
      isComponent: function (e) {
        return 'INPUT' == e.tagName && 'checkbox' == e.type;
      },
      model: {
        defaults: {
          copyable: !1,
          attributes: {
            type: 'checkbox'
          },
          traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait]
        }
      },
      view: {
        events: {
          click: function (e) {
            return e.preventDefault();
          }
        },
        init: function () {
          this.listenTo(this.model, 'change:attributes:checked', this.handleChecked);
        },
        handleChecked: function () {
          this.el.checked = !!this.model.get('attributes').checked;
        }
      }
    }), dc.addType('label', {
      extend: 'text',
      isComponent: function (e) {
        return 'LABEL' == e.tagName;
      },
      model: {
        defaults: {
          tagName: 'label',
          components: 'Label'
        }
      }
    });
    dc.addType('option', {
      isComponent: el => el.tagName == 'OPTION',
      model: {
        defaults: {
          tagName: 'option',
          layerable: false,
          droppable: false,
          draggable: false,
          highlightable: false
        }
      }
    });

    const createOption = (value, name) => ({
      type: 'option',
      components: name,
      attributes: {
        value
      }
    });

    dc.addType('select', {
      extend: 'input',
      isComponent: el => el.tagName == 'SELECT',
      model: {
        defaults: {
          tagName: 'select',
          components: [createOption('email', 'Email') //createOption('opt2', 'Option 2'),
          ],
          traits: [nameTrait, {
            name: 'options',
            type: 'select-options'
          }, requiredTrait]
        }
      },
      view: {
        events: {
          mousedown: e => e.preventDefault()
        }
      }
    });
    const domc = this.editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    dc.addType('date', {
      model: defaultModel.extend({
        defaults: { ...defaultModel.prototype.defaults,
          'custom-name': 'date',
          tagName: 'input',
          type: 'date',
          attributes: {
            'data-gjs-type': 'date',
            'data-slot': 'date'
          },
          droppable: false,
          // Can't drop other elements inside
          copyable: false,
          // Do not allow to duplicate the component
          script: function () {
            var input = this;

            var initDateRange = function () {
              var input = this;
              const options = {
                singleDatePicker: true,
                showDropdowns: true
              };
              $(input).daterangepicker(options);
            };

            if (typeof daterangepicker == 'undefined' || typeof jQuery == 'undefined' || typeof moment == 'undefined') {
              if (typeof jQuery == 'undefined') {
                var jquery = document.createElement('script');
                jquery.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
                document.body.appendChild(jquery);

                jquery.onload = function () {
                  loadMoment();
                };
              } else {
                loadMoment();
              }

              function loadMoment() {
                if (typeof moment == 'undefined') {
                  var moment = document.createElement('script');
                  moment.src = '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js';
                  document.body.appendChild(moment);

                  moment.onload = function () {
                    loadDatePicker();
                  };
                } else {
                  loadDatePicker();
                }
              }

              function loadDatePicker() {
                if (typeof $ == 'undefined') {
                  window.$ = jQuery;
                }

                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '//cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.css';
                document.body.appendChild(link);
                var daterangepicker = document.createElement('script');
                daterangepicker.src = '//cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js';
                document.body.appendChild(daterangepicker);
                daterangepicker.onload = initDateRange;
              }
            } else {
              // console.log("all libs present");
              initDateRange();
            }
          }
        }
      }, {
        isComponent(el) {
          var dateType;

          if (el.getAttribute && el.getAttribute('data-slot') === 'date') {
            dateType = true;
          } else {
            dateType = false;
          }

          if (el.tagName == 'INPUT' && dateType) {
            return {
              type: 'date'
            };
          }
        }

      }),
      view: defaultView
    });
  }

}