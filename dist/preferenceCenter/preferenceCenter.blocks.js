function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class PreferenceCenterBlocks {
  constructor(editor) {  

    _defineProperty(this, "blockManager", void 0);

    this.blockManager = editor.BlockManager;
  }

  addPreferenceCenterBlock() {
    // add preference center category-list block 
    this.blockManager.add('MyCategories', {
      tagName: 'div',
      label: 'My Categories',
      category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
      content: {
      //  type: 'MyCategories',
      components: [
        {
          components: [
            { type: 'label', components: 'My Categories' },            
          ]         
        },
        {
          components: [         
            { type: 'checkbox', attributes: { value: 1,checked : "checked" }},     
            { type: 'label', components: 'Category' },
          ]
        }
      ]
      },
      style: { padding: '50px' }
    });
    this.blockManager.add('MySegment', {
      tagName: 'div',
      label: 'My Segment',
      category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      draggable: false,
      media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
      content: {
       // type: 'MySegment',
        components: [
          {
            components: [
              { type: 'label', components: 'My Segment' }, 
            ]            
          },
          {
            components: [      
              { type: 'checkbox', attributes: { value: 2,checked : "checked" }},        
              { type: 'label', components: 'Contact Segment' },
            ]
          }
        ]
      },
      style: { padding: '50px' }
  });
  //add preffered channel
  this.blockManager.add('PreferredChannel', {
    tagName: 'div',
    label: 'Preferred Channel',
    category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    draggable: false,
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
    content: {
     // type: 'PreferredChannel',
      components: [
        {
          components: [
            { type: 'label', components: 'I prefer communication by' }, 
            
          ]            
        },
        {
          components: [      
            { type: 'select' },
          ]
        }           
      ]
    },
    style: { padding: '50px' }
});
//add text success message block
this.blockManager.add('SuccessMessage', {
  tagName: 'div',
  label: 'Success Message',
  category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
  draggable: false,
  media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
  content: {
   // type: 'PreferredChannel',
    components: [
      {
        components: [
          { type: 'text', components: 'Preference Saved.' },           
        ]            
      },
               
    ]
  },
  style: { padding: '50px' }
});
this.blockManager.add('ChannelFrequency', {
  tagName: 'div',
  label: 'Channel Frequency',
  category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
  draggable: false,
  media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
  content: {
   // type: 'PreferredChannel',
    components: [
      {
        components: [
          { type: 'checkbox', attributes: { value: 1,checked : "checked" }}, 
          { type: 'label', components: 'I want to receive %channel%' },
          { type: 'select' },
          { type: 'input' },
           
        ]            
      },
      {
        components: [         
          { type: 'label', components: 'Do not send me more than' },
          { type: 'input' },
          { type: 'label', components: 'message each' },
          { type: 'select' },          
        ]            
      },
      {
        components: [         
          { type: 'label', components: 'Pause from' },
          { type: 'date' },
          { type: 'label', components: 'to' },
          { type: 'date' },          
        ]            
      },
               
    ]
  },
  style: { padding: '50px',justifyCcontent:'center' }
});
// add save preference button
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
      label: 'Save Preferences',
      category : Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
      attributes: {
        class: 'gjs-fonts gjs-f-button'
      },
      content: 
        `${style}
         <a href="#" target="_blank" class="button">Save Prefernce</a>`,
    });
    
  }

 

}