/* eslint-disable no-else-return */
import DynamicContentDomComponents from './dynamicContent/dynamicContent.domcomponents';
import PreferenceCenterDomComponents from './preferenceCenter/preferenceCenter.domcomponents';
import ContentService from './content.service';

// https://grapesjs.com/docs/api/component.html
export default (editor) => {
  const mode = ContentService.getMode(editor);
  DynamicContentDomComponents.addDynamicContentType(editor);

  if (mode === ContentService.modePageHtml) {
    const pcdom = new PreferenceCenterDomComponents(editor);
    pcdom.addPreferenceCenterContentTypes(editor);
  }
};
