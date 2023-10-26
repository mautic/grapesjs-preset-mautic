function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
export default class PreferenceCenterBlocks {
  constructor(editor) {
    _defineProperty(this, "blockManager", void 0);
    this.blockManager = editor.BlockManager;
  }
  addPreferenceCenterBlock() {
    this.blockManager.add('MyCategories', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.myCategories.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'fa fa-bookmark-o'
      },
      content: `<div data-slot="categorylist">
          <div draggable="false">
            <div draggable="false">
              <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.myCategories.label')}</label>
            </div>
            <div draggable="false">
              <input
                type="checkbox"
                autocomplete="false"
                value="1"
                checked="checked"
                draggable="false"
              />
              <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.myCategories.text')}</label>
            </div>
          </div>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    this.blockManager.add('MySegment', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.mySegments.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-list-alt'
      },
      content: `<div data-slot="segmentlist">
          <div draggable="false">
            <div draggable="false">
              <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.mySegments.label')}</label>
            </div>
            <div draggable="false">
              <input
                type="checkbox"
                autocomplete="false"
                value="2"
                checked="checked"
                draggable="false"
              />
              <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.mySegments.label')}</label>
            </div>
          </div>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    this.blockManager.add('PreferredChannel', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.preferredChannel.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-envelope-o'
      },
      content: `<div data-slot="preferedchannel">
          <div draggable="false">
            <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.preferredChannel.label')}</label>
            <div draggable="false">
              <select draggable="false">
                <option value="${Mautic.translate('grapesjsbuilder.email')}" selected="selected">${Mautic.translate('grapesjsbuilder.email')}</option>
              </select>
            </div>
          </div>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    this.blockManager.add('SuccessMessage', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.successMessage.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-check'
      },
      content: `
        <div data-slot="successmessage">
            <span draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.successMessage.label')}</span>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    this.blockManager.add('ChannelFrequency', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-calendar'
      },
      content: `<div data-slot="channelfrequency">
          <table class="table table-striped" draggable="false">
            <tbody>
              <tr draggable="false">
                <td draggable="false">
                  <div class="text-left" draggable="false">
                    <input type="checkbox" checked="" draggable="false">
                    <label class="control-label" draggable="false">
                        ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.text.contact_through')}
                    </label>
                  </div>
                </td>
              </tr>
              <tr draggable="false">
                <td draggable="false">
                  <div id="frequency_email" class="text-left row" draggable="false">
                    <div draggable="false">
                      <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.text.do_not_send')}</label>
                      <input type="text" class="frequency form-control" draggable="false">
                      <label class="fw-n frequency-label" draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.text.each')}</label>
                      <select class="form-control" draggable="false">
                        <option value="" selected="selected" draggable="false"></option>
                      </select>
                    </div>
                    <div draggable="false">
                      <label draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.text.pause_from')}</label>
                      <input type="date" class="form-control" draggable="false">
                      <label class="frequency-label fw-n" draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.channelFrequency.text.to')}</label>
                      <input type="date" class="form-control" draggable="false">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    this.blockManager.add('UnsubscribeAll', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      attributes: {
        class: 'fa fa-ban'
      },
      content: `<div data-slot="donotcontact">
            <a href="{dnc_url}" draggable="false">${Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.link')}</a> 
            <span draggable="false"> ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.unsubscribeAll.text')}</span>
        </div>`,
      style: {
        padding: '50px'
      }
    });
    const style = `<style>
            .button {
              display:inline-block;
              text-decoration:none;
              border-color:#4e5d9d;
              border-width:10px 20px;
              border-style:solid;
              -webkit-border-radius:3px;
              -moz-border-radius:3px;
              border-radius:3px;
              background-color:#4e5d9d;
              font-size:16px;
              color:#ffffff;
            }           
          </style>`;
    this.blockManager.add('SavePreferences', {
      tagName: 'div',
      label: Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.label'),
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'gjs-fonts gjs-f-button'
      },
      content: `
        ${style}
        <div data-slot="saveprefsbutton">
          <a class="button btn btn-default btn-save" draggable="false">
            ${Mautic.translate('grapesjsbuilder.preferenceCenter.block.savePreferences.link')}
          </a>
          <div style="clear: both"></div>
        </div>`
    });
  }
}