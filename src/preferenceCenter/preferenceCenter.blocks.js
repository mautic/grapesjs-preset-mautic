export default class PreferenceCenterBlocks {
  blockManager;

  constructor(editor) {
    this.blockManager = editor.BlockManager;
  }

  addPreferenceCenterBlock() {
    this.blockManager.add('MauticSegment', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.MauticSegments.block.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-list-alt',
      },
      content: `<div data-gjs-type="segmentlist" data-slot="segmentlist">
          <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
            <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticSegments.label'
              )}</label>
            </div>
            <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <input
                type="checkbox"
                autocomplete="false"
                value="1"
                checked="checked"
                data-gjs-removable="false"
                data-gjs-draggable="false"
                data-gjs-copyable="false"
              />
              <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticSegments.text'
              )}</label>
            </div>
          </div>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('MauticCategories', {
      tagName: 'div',
      label: Mautic.translate(
        'grapesjsbuilder.preferenceCenter.block.MauticCategories.block.label'
      ),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-bookmark-o',
      },
      content: `<div data-gjs-type="categorylist" data-slot="categorylist">
          <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
            <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
                'grapesjsbuilder.preferenceCenter.block.MauticCategories.label'
              )}</label>
            </div>
            <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <input
                type="checkbox"
                autocomplete="false"
                value="1"
                checked="checked"
                data-gjs-removable="false"
                data-gjs-draggable="false"
                data-gjs-copyable="false"
              />
              <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
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
      attributes: {
        class: 'fa fa-envelope-o',
      },
      content: `<div data-gjs-type="preferredchannel" data-slot="preferredchannel">
          <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
            <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.preferredChannel.text'
            )}</label>
            <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <select data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                <option 
                  value="${Mautic.translate('grapesjsbuilder.email')}" 
                  selected="selected"
                  data-gjs-removable="false"
                  data-gjs-draggable="false"
                  data-gjs-copyable="false"
                >
                    ${Mautic.translate('grapesjsbuilder.email')}
                </option>
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
      attributes: {
        class: 'fa fa-calendar',
      },
      content: `<div data-gjs-type="channelfrequency" data-slot="channelfrequency">
          <table class="table table-striped" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
            <tbody data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
              <tr data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                <td data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                  <div class="text-left" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                    <input type="checkbox" checked="" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                    <label class="control-label" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                        ${Mautic.translate(
                          'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.contact_through'
                        )}
                    </label>
                  </div>
                </td>
              </tr>
              <tr data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                <td data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                  <div id="frequency_email" class="text-left row" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                    <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                        ${Mautic.translate(
                          'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.number'
                        )}
                      </label>
                      <input type="number" min="0" class="frequency form-control" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      <label class="fw-n frequency-label" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      ${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.each'
                      )}
                      </label>
                      <select class="form-control" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                        <option value="" selected="selected" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                        </option>
                      </select>
                    </div>
                    <div data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      <label data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      ${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_from'
                      )}
                      </label>
                      <input type="date" class="form-control" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
                      <label class="frequency-label fw-n" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false"> 
                      ${Mautic.translate(
                        'grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_to'
                      )}
                      </label>
                      <input type="date" class="form-control" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">
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
        <div data-gjs-type="saveprefsbutton" data-slot="saveprefsbutton">
          <a class="button btn btn-default btn-save" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false"> 
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.text')}
          </a>
          <div style="clear: both" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false"></div>
        </div>`,
    });

    this.blockManager.add('SuccessMessage', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.successMessage.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-check',
      },
      content: `
        <div data-gjs-type="successmessage" data-slot="successmessage">
            <span data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.successMessage.label'
            )}</span>
        </div>`,
      style: { padding: '50px' },
    });

    this.blockManager.add('UnsubscribeAll', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-ban',
      },
      content: `<div data-gjs-type="donotcontact" data-slot="donotcontact">
            <a href="{dnc_url}" data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false">${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.unsubscribeAll.link'
            )}</a> 
            <span data-gjs-removable="false" data-gjs-draggable="false" data-gjs-copyable="false"> ${Mautic.translate(
              'grapesjsbuilder.preferenceCenter.block.unsubscribeAll.text'
            )}</span>
        </div>`,
      style: { padding: '50px' },
    });
  }
}
