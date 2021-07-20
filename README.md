# GrapesJS Preset Mautic

This preset configures GrapesJS to be used as a Mautic Builder with some unique features and blocks.

### Plugin to add GrapesJS features
 
- Add function to edit source code
- Extend the original image and add a confirm dialog before removing it
- Option to hide/show Layers Manager
- Option to enable/disable Import code button
- Move Settings panel inside Style Manager panel
- Open Block Manager at launch
- Replace Rich Text Editor by Froala used in Mautic (add token support)
- Add Dynamic Content Block used in Mautic



## Options

| Option                      | Description                           | Default                |
| --------------------------- | ------------------------------------- | ---------------------- |
| sourceEdit                  | Activate source code edition          | true                   |
| sourceEditBtnLabel          | Label for source code button save     | 'Edit'                 |
| sourceCancelBtnLabel        | Label for source code button cancel   | 'Cancel'               |
| sourceEditModalTitle        | Title for source code modal           | 'Edit code'            |
| deleteAssetConfirmText      | Label for asset deletion confirm      | 'Are you sure?'        |
| showLayersManager           | Show Layers Manager panel             | false                  |
| showImportButton            | Show Import code button               | false                  |
| replaceRteWithFroala        | Replace RTE with Froala               | true                   |
| categorySectionLabel        | Category 'section' label              | 'Sections'             |
| categoryBlockLabel          | Category 'block' label                | 'Blocks'               |
| dynamicContentBlockLabel    | Label for Dynamic Content block       | 'Dynamic Content'      |
| dynamicContentBtnLabel      | Label for Dynamic Content button save | 'Save'                 |
| dynamicContentModalTitle    | Title for Dynamic Content modal       | 'Edit Dynamic Content' |
| dynamicContentFroalaButtons | Froala buttons for Dynamic Content    | ['undo', 'redo', '&#124;', 'bold', 'italic', 'underline', 'fontSize',<br> 'color', 'align', 'formatOL', 'formatUL', 'quote',<br> 'clearFormatting', 'token', 'insertLink', 'insertImage', 'html'] |


## Summary

* Plugin name: `grapesjs-preset-mautic`



## Download

* GIT
  * `git clone https://github.com/Webmecanik/grapesjs-preset-mautic.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-preset-mautic.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-preset-mautic'],
      pluginsOpts: {
        'grapesjs-preset-mautic': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-mautic';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/Webmecanik/grapesjs-preset-mautic.git
$ cd grapesjs-preset-mautic
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source and use js from build folder to your project

```sh
$ npm run build
```

## How to test a preset pull request

1. Build the preset: `npm run build` (done by author)
2. [Create a PR](https://github.com/mautic/grapesjs-preset-mautic/pulls) (done by author)
3. Fork the repo: `gh repo fork mautic/grapesjs-preset-mautic`
4. Clone the repo: `gh repo clone USERNAME/grapesjs-preset-mautic && gh pr checkout PRNUMBER>`
5. Change into the plugin directory: e.g. `cd mautic/plugins/GrapesJSBuilderBundle`
6. Optional: Is the plugin code touched by this preset code change too? Checkout the correct plugin PR as well. E.g. `gh pr checkout PRNUMBER`
7. Change the code for the import path of the preset in `plugins/GrapesJsBuilderBundle/Assets/library/js/builder.service.js` to the local version of the preset. E.g.
  ```js
  // import grapesjsmautic from 'grapesjs-preset-mautic';
import grapesjsmautic from '../../../../../../grapesjs-preset-mautic/src';
  ```
7. Change the code for the import path of the preset in `plugins/GrapesJsBuilderBundle/Assets/library/js/codeMode/codeEditor.js` to the local version of the preset. E.g.
  ```js
import MjmlService from '../../../../../../../grapesjs-preset-mautic/dist/mjml/mjml.service';
import ContentService from '../../../../../../../grapesjs-preset-mautic/dist/content.service';
  ```
  > Locate the preset repo by starting from this location: plugins/GrapesJsBuilderBundle/Assets/library/js/. In the above example we assume that the preset is one folder above Mautic
7. Optional: Is the plugin code touched by this preset code change too? Checkout the correct plugin PR from github.com/mautic/mautic as well. E.g. `gh pr checkout PR` when you are in the Mautic directory (not the preset directory).
8. Install the global dependency (make sure it is v1): `npm install parcel@1`
9. Install the project depencencies: `npm install`
10.  Build the JS code of the **plugin** 'plugin-grapesjs-builder' in the dev mode (not minified): `npm run build-dev`
11. Test the code locally. Make sure nothing is cached. Recommended way is using the incognito mode. E.g. https://mautic.ddev.site/s/emails
12. Check the browser console if you find errors. They help a lot with debugging!

## License

MIT
