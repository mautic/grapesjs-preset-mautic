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



## License

MIT
