export default class PreferenceCenterBlocks {
  blockManager;

  constructor(editor) {
    this.blockManager = editor.BlockManager;
  }

  addPreferenceCenterBlock() {
    this.blockManager.add('MauticSegment', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticSegments.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-list-alt',
      },
      content: `<div data-slot="segmentlist">
          <div>
            <div>
              <label>${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticSegments.label'
              )}</label>
            </div>
            <div>
              <input
                type="checkbox"
                autocomplete="false"
                value="2"
                checked="checked"
               
              />
              <label>${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticSegments.text'
              )}</label>
            </div>
          </div>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('MauticCategories', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticCategories.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-bookmark-o',
      },
      content: `<div data-slot="categorylist">
          <div>
            <div>
              <label>${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticCategories.label'
              )}</label>
            </div>
            <div>
              <input
                type="checkbox"
                autocomplete="false"
                value="1"
                checked="checked"
               
              />
              <label>${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticCategories.text'
              )}</label>
            </div>
          </div>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('PreferredChannel', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.preferredChannel.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-envelope-o',
      },
      content: `<div data-slot="preferredchannel">
          <div>
            <label>${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.preferredChannel.label'
            )}</label>
            <div>
              <select>
                <option value="${Mautic.translate(
                  'grapesjsbuilder.email'
                )}" selected="selected">${Mautic.translate('grapesjsbuilder.email')}</option>
              </select>
            </div>
          </div>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('ChannelFrequency', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-calendar',
      },
      content: `<div data-slot="channelfrequency">
          <table class="table table-striped">
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
                    <div>
                      <label>${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.number'
                      )}</label>
                      <input type="number" min="0" class="frequency form-control">
                      <label class="fw-n frequency-label">${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.each'
                      )}</label>
                      <select class="form-control">
                        <option value="" selected="selected">
                        </option>
                      </select>
                    </div>
                    <div>
                      <label>${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_from'
                      )}</label>
                      <input type="date" class="form-control">
                      <label class="frequency-label fw-n">${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_to'
                      )}</label>
                      <input type="date" class="form-control">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('SavePreferences', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'gjs-fonts gjs-f-button',
      },
      content: `
        <div data-slot="saveprefsbutton">
          <a class="button btn btn-default btn-save" >
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.text')}
          </a>
          <div style="clear: both"></div>
        </div>`,
    });

    this.blockManager.add('SuccessMessage', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.successMessage.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-check',
      },
      content: `
        <div data-slot="successmessage">
            <span>${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.successMessage.label'
            )}</span>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('UnsubscribeAll', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-ban',
      },
      content: `<div data-slot="donotcontact">
            <a href="{dnc_url}">${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.unsubscribeAll.link'
            )}</a> 
            <span> ${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.unsubscribeAll.text'
            )}</span>
        </div>`,
      style: { padding: '50px' },
    });
  }
}
