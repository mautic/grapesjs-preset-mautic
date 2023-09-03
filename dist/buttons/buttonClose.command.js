import ContentService from '../content.service';
import MjmlService from '../mjml/mjml.service';
import EditorFontsService from '../editorFonts/editorFonts.service';
export default class ButtonCloseCommands {
  static closeEditorPageHtml(editor) {
    if (!editor) {
      throw new Error('no page-html editor');
    }
    editor.runCommand('preset-mautic:dynamic-content-components-to-tokens');
    const htmlDocument = ContentService.getCanvasAsHtmlDocument(editor);
    let htmlString = ContentService.serializeHtmlDocument(htmlDocument);
    if (mauticEditorFonts) {
      htmlString = EditorFontsService.addFontLinksToHtml(htmlString);
    }
    ButtonCloseCommands.returnContentToTextarea(editor, htmlString); // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }
  static closeEditorEmailHtml(editor) {
    if (!editor) {
      throw new Error('No email-HTML editor');
    }
    editor.runCommand('preset-mautic:dynamic-content-components-to-tokens'); // Getting HTML with CSS inline (only available for "grapesjs-preset-newsletter"):

    // Getting HTML with CSS inline (only available for "grapesjs-preset-newsletter"):
    let html = ContentService.getEditorHtmlContent(editor);
    if (mauticEditorFonts) {
      html = EditorFontsService.addFontLinksToHtml(html);
    }
    ButtonCloseCommands.returnContentToTextarea(editor, html); // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }
  static closeEditorEmailMjml(editor) {
    if (!editor) {
      throw new Error('No email-MJML editor');
    }
    editor.runCommand('preset-mautic:dynamic-content-components-to-tokens');
    let htmlCode = MjmlService.getEditorHtmlContent(editor);
    const mjmlCode = MjmlService.getEditorMjmlContent(editor); // Update textarea for save

    if (!htmlCode || !mjmlCode) {
      throw new Error('Could not generate html from MJML');
    }
    if (mauticEditorFonts) {
      htmlCode = EditorFontsService.addFontLinksToHtml(htmlCode);
    }
    ButtonCloseCommands.returnContentToTextarea(editor, htmlCode, mjmlCode); // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }

  /**
   * Save the html and mjml
   * @param {string} html
   * @param {string} mjml
   */
  static returnContentToTextarea(editor, html, mjml) {
    if (ContentService.isMjmlMode(editor)) {
      mQuery('textarea.builder-html').val(html);
      mQuery('textarea.builder-mjml').val(mjml);
    } else {
      mQuery('textarea.builder-html').val(html);
    }
  }
  static resetHtml() {
    mQuery('.builder').removeClass('builder-active').addClass('hide');
    mQuery('html').css('font-size', '');
    mQuery('body').css('overflow-y', '');
    mQuery('.builder-panel').css('display', 'none');

    // Destroy GrapesJS
    // Dont destroy grapesjs. Just hide it. Will be auto destroyed if user
    // loads a new page.
    // workaround: throws typeError: Cannot read property 'trigger'
    // since editior is destroyed, command can not be stopped anymore
    // setTimeout(() => editor.destroy(), 1000);
    // editor.destroy();
  }
}