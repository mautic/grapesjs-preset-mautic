/* eslint-disable no-else-return */
import DynamicContentDomComponents from './dynamicContent/dynamicContent.domcomponents';
import PreferenceCenterDomComponents from './preferenceCenter/preferenceCenter.domcomponents';
import ContentService from './content.service';

// https://grapesjs.com/docs/api/component.html
export default (editor) => {
  DynamicContentDomComponents.addDynamicContentType(editor);
  const mode = ContentService.getMode(editor);

  if (mode === ContentService.modePageHtml) {
    const pcdc = new PreferenceCenterDomComponents(editor);
    pcdc.addPreferenceCenterType();
  }

  editor.DomComponents.addType('input', {
    isComponent: (el) => el.tagName == 'INPUT',
    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          'name', // Same as: { type: 'text', name: 'name' }
          'placeholder',
          {
            type: 'select', // Type of the trait
            label: 'Type', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { id: 'text', name: 'Text' },
              { id: 'email', name: 'Email' },
              { id: 'password', name: 'Password' },
              { id: 'number', name: 'Number' },
            ],
          },
          {
            type: 'checkbox',
            name: 'required',
          },
        ],
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
        attributes: { type: 'text', required: true },
      },
    },
  });
};
