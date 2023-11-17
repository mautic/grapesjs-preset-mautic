export default class PreferenceCenterBlocks {
  blockManager;

  properties;

  propagatedProperties;

  constructor(editor) {
    this.blockManager = editor.BlockManager;
    this.properties = {
      removable: false,
      draggable: '[data-gjs-type=cell]',
      droppable: false,
      badgable: false,
      stylable: false,
      copyable: false,
      selectable: false,
      hoverable: false,
    };

    this.propagatedProperties = ['draggable', 'removable', 'copyable', 'droppable'];
  }

  addPreferenceCenterBlocks() {
    this.addSegments();
    this.addCategories();
    this.addPreferredChannel();
    this.addChannelFrequency();
    this.addSavePreferencesButtton();
    this.addSuccessMessage();
    this.addUnsubscribeAll();
  }

  addSegments() {
    const template = `
        <div>
            <label>
                ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticSegments.label')}
            </label>
        </div>
        <div>
            <input type="checkbox" autocomplete="false" value="1" checked="checked"/>
            <label>
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticSegments.text')}
            </label>
        </div>`;

    this.blockManager.add('MauticSegments', {
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticSegments.block.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-list-alt',
      },
      content: {
        name: 'Segment List',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'segmentlist',
          'data-slot': 'segmentlist',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addCategories() {
    const template = `<div>
          <label>
              ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticCategories.label')}
          </label>
        </div>
        <div>
            <input type="checkbox" autocomplete="false" value="1" checked="checked"/>
            <label>
                ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticCategories.text')}
            </label>
        </div>`;

    this.blockManager.add('MauticCategories', {
      tagName: 'div',
      label: Mautic.translate(
        'grapesjsbuilder.preferenceCenter.block.MauticCategories.block.label'
      ),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-bookmark-o',
      },
      content: {
        name: 'Category List',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'categorylist',
          'data-slot': 'categorylist',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addPreferredChannel() {
    const template = `<label>
          ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.preferredChannel.text')}
        </label>
        <div>
            <select>
                <option value="${Mautic.translate('grapesjsbuilder.email')}" selected="selected">
                    ${Mautic.translate('grapesjsbuilder.email')}
                </option>
            </select>
        </div>`;

    this.blockManager.add('PreferredChannel', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.preferredChannel.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-envelope-o',
      },
      content: {
        name: 'Preferred Channel',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'preferredchannel',
          'data-slot': 'preferredchannel',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addChannelFrequency() {
    const template = `<table class="table table-striped">
            <tbody>
                <tr>
                    <td>
                        <div class="text-left">
                            <input type="checkbox" checked="">
                            <label class="control-label">
                                ${Mautic.translate(
                                  'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.contact_through'
                                )}
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="frequency_email" class="text-left row">
                            <div class="col-xs-6">
                                <label class="label1">
                                    ${Mautic.translate(
                                      'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.number'
                                    )}
                                </label>
                                <input type="number" min="0" class="frequency form-control">
                                <label class="fw-n frequency-label label2">
                                    ${Mautic.translate(
                                      'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.each'
                                    )}
                                </label>
                                <select class="form-control">
                                    <option value="" selected="selected">
                                    </option>
                                </select>
                            </div>
                            <div class="col-xs-6">
                                <label class="label3">
                                    ${Mautic.translate(
                                      'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_from'
                                    )}
                                </label>
                                <input type="date" class="form-control">
                                <label class="frequency-label fw-n label4"> 
                                    ${Mautic.translate(
                                      'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_to'
                                    )}
                                </label>
                                <input type="date" class="form-control">
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>`;

    this.blockManager.add('ChannelFrequency', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-calendar',
      },
      content: {
        name: 'Channel Frequency',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'channelfrequency',
          'data-slot': 'channelfrequency',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addSavePreferencesButtton() {
    const template = `<a class="button btn btn-default btn-save">
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.text')}
        </a>
        <div style="clear: both"></div>`;

    this.blockManager.add('SavePreferences', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'gjs-fonts gjs-f-button',
      },
      content: {
        name: 'Save Preferences',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'saveprefsbutton',
          'data-slot': 'saveprefsbutton',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
            style: {
              display: 'inline-block',
              'text-decoration': 'none',
              'border-color': '#4e5d9d',
              'border-width': '10px 20px',
              'border-style': 'solid',
              '-webkit-border-radius': '3px',
              '-moz-border-radius': '3px',
              'border-radius': '3px',
              'background-color': '#4e5d9d',
              'font-size': '16px',
              color: '#ffffff',
            },
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addSuccessMessage() {
    this.blockManager.add('SuccessMessage', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.successMessage.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-check',
      },
      content: {
        name: 'Success Message',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'successmessage',
          'data-slot': 'successmessage',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'span',
            ...this.properties,
            content: `${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.successMessage.label'
            )}`,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }

  addUnsubscribeAll() {
    const template = `<a href="|URL|">
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.link')}
        </a> 
        <span>
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.text')}
        </span>`;

    this.blockManager.add('UnsubscribeAll', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-ban',
      },
      content: {
        name: 'Unsubscribe All',
        tagName: 'div',
        attributes: {
          'data-gjs-type': 'donotcontact',
          'data-slot': 'donotcontact',
        },
        style: { padding: '5px 0' },
        components: [
          {
            tagName: 'div',
            ...this.properties,
            propagate: this.propagatedProperties,
            components: template,
          },
        ],
      },
      style: { padding: '50px' },
    });
  }
}
