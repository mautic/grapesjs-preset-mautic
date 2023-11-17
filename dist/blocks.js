import DynamicContentBlocks from './dynamicContent/dynamicContent.blocks';
import ContentService from './content.service';
import ButtonBlock from './buttonBlock';
import BlocksMjml from './blocks/blocks.mjml';
import PreferenceCenterBlocks from './preferenceCenter/preferenceCenter.blocks';
export default ((editor, opts = {}) => {
  const bm = editor.BlockManager;
  const blocks = bm.getAll();

  // All block inside Blocks category
  blocks.forEach(block => {
    block.set({
      category: Mautic.translate('grapesjsbuilder.categoryBlockLabel')
    });
  });

  // eslint-disable-next-line default-case
  switch (ContentService.getMode(editor)) {
    case ContentService.modePageHtml:
      {
        const buttonBlock = new ButtonBlock(editor);
        buttonBlock.addButtonBlock();

        // Check if page is for preference center
        const isPreferenceCenter = ContentService.isPreferenceCenter();
        if (isPreferenceCenter) {
          const pcb = new PreferenceCenterBlocks(editor);
          pcb.addPreferenceCenterBlocks();
        }
        break;
      }
    case ContentService.modeEmailMjml:
      {
        const blockMjml = new BlocksMjml(editor);
        blockMjml.addBlocks();
        const dcb = new DynamicContentBlocks(editor, opts);
        dcb.addDynamciContentBlock();
        break;
      }
    case ContentService.modeEmailHtml:
      {
        const dcb = new DynamicContentBlocks(editor, opts);
        dcb.addDynamciContentBlock();
        break;
      }
  }

  // Add icon to mj-hero
  if (typeof bm.get('mj-hero') !== 'undefined') {
    bm.get('mj-hero').set({
      attributes: {
        class: 'gjs-fonts gjs-f-hero'
      }
    });
  }

  // Delete mj-wrapper
  if (typeof bm.get('mj-wrapper') !== 'undefined') {
    bm.remove('mj-wrapper');
  }

  /*
   * Custom block inside Sections category
   */

  // MJML columns
  if (typeof bm.get('mj-1-column') !== 'undefined') {
    bm.get('mj-1-column').set({
      label: Mautic.translate('grapesjsbuilder.components.names.oneColumn'),
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('mj-2-columns') !== 'undefined') {
    bm.get('mj-2-columns').set({
      label: Mautic.translate('grapesjsbuilder.components.names.twoColumn'),
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('mj-3-columns') !== 'undefined') {
    bm.get('mj-3-columns').set({
      label: Mautic.translate('grapesjsbuilder.components.names.threeColumn'),
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('mj-37-columns') !== 'undefined') {
    bm.get('mj-37-columns').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }

  // Newsletter columns
  if (typeof bm.get('sect100') !== 'undefined') {
    bm.get('sect100').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('sect50') !== 'undefined') {
    bm.get('sect50').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('sect30') !== 'undefined') {
    bm.get('sect30').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('sect37') !== 'undefined') {
    bm.get('sect37').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }

  // Webpage columns
  if (typeof bm.get('column1') !== 'undefined') {
    bm.get('column1').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('column2') !== 'undefined') {
    bm.get('column2').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('column3') !== 'undefined') {
    bm.get('column3').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
  if (typeof bm.get('column3-7') !== 'undefined') {
    bm.get('column3-7').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }
});