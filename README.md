# GrapesJS Preset Mautic

> **Plugin to add GrapesJS features**  
- Add function to edit source code
- Extend the original image and add a confirm dialog before removing it
- Option to enable/disable Layers Manager
- Option to enable/disable Import code button
- Move Settings panel inside Style Manager panel
- Remove Layer Manager panel
- Open Block Manager at launch




## Options

| Option                 | Description                      | Default         |
| ---------------------- | -------------------------------- | --------------- |
| sourceEdit             | Activate source code edition     | true            |
| sourceEditBtnLabel     | Label for source code button     | 'Edit'          |
| sourceEditModalTitle   | Title for source code modal      | 'Edit code'     |
| deleteAssetConfirmText | Label for asset deletion confirm | 'Are you sure?' |
| showLayersManager      | Show Layers Manager panel        | false           |
| showImportButton       | Show Import code button          | false           |



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

Build the source

```sh
$ npm run build
```



## License

MIT
