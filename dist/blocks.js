import DynamicContentBlocks from './dynamicContent/dynamicContent.blocks';
import ButtonBlock from './buttonBlock';
import PreferenceCenterBlocks from './preferenceCenter/preferenceCenter.blocks';

import ContentService from './content.service'; 
export default ((editor, opts = {}) => {
  const bm = editor.BlockManager;
  const cfg = editor.getConfig();
  const blocks = bm.getAll(); // Add Dynamic Content block only for newsletter

  if ('grapesjsmjml' in cfg.pluginsOpts) {// Dynamic Content MJML block
  } else if ('grapesjsnewsletter' in cfg.pluginsOpts) {
    const dcb = new DynamicContentBlocks(editor, opts);
    dcb.addDynamciContentBlock();    
  } 
  
  //add button block for landing page 
  const mode = ContentService.getMode(editor);   
   if (mode === ContentService.modePageHtml) {   
    //add button block
    const buttonBlock = new ButtonBlock(editor);
    buttonBlock.addButtonBlock();  

    //check if page is for preference center
    const isPreferenceCenter = ContentService.isPreferenceCenter();
    if(isPreferenceCenter) { 
      const pcb = new PreferenceCenterBlocks(editor);
      pcb.addPreferenceCenterBlock();
    }
  }


  // Add icon to mj-hero
  if (typeof bm.get('mj-hero') !== 'undefined') {
    bm.get('mj-hero').set({
      attributes: { class: 'gjs-fonts gjs-f-hero' },
    });
  }

  // Delete mj-wrapper
  if (typeof bm.get('mj-wrapper') !== 'undefined') {
    bm.remove('mj-wrapper');
  }

  // All block inside Blocks category
  blocks.forEach((block) => {
    block.set({
     // category: 'Prefrence Center'
      category: Mautic.translate('grapesjsbuilder.categoryBlockLabel'),
    });
  });

  /*
   * Custom block inside Sections category
   */

  // MJML columns
   //check if page is for preference center
   if(mQuery('#page_isPreferenceCenter_1').is(':checked')) { 
  if (typeof bm.get('MyCategories') !== 'undefined') {
    bm.get('MyCategories').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  if (typeof bm.get('MySegment') !== 'undefined') {
    bm.get('MySegment').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  if (typeof bm.get('PreferredChannel') !== 'undefined') {
    bm.get('PreferredChannel').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  if (typeof bm.get('SuccessMessage') !== 'undefined') {
    bm.get('SuccessMessage').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  if (typeof bm.get('ChannelFrequency') !== 'undefined') {
    bm.get('ChannelFrequency').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  if (typeof bm.get('SavePreferences') !== 'undefined') {
    bm.get('SavePreferences').set({
      category: Mautic.translate('grapesjsbuilder.preferenceCenterLabel'),
    });
  }
  }
  if (typeof bm.get('mj-1-column') !== 'undefined') {
    bm.get('mj-1-column').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }

  if (typeof bm.get('mj-2-columns') !== 'undefined') {
    bm.get('mj-2-columns').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  }

  if (typeof bm.get('mj-3-columns') !== 'undefined') {
    bm.get('mj-3-columns').set({
      category: Mautic.translate('grapesjsbuilder.categorySectionLabel')
    });
  } // Newsletter columns


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
  } // Webpage columns


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