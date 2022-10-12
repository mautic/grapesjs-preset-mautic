# GrapesJS Preset Mautic
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This preset configures GrapesJS to be used as a Mautic Builder with some unique features and blocks.

### Plugin to add GrapesJS features
 
- Add function to edit source code
- Extend the original image and add a confirm dialog before removing it
- Option to hide/show Layers Manager
- Option to enable/disable Import code button
- Move Settings panel inside Style Manager panel
- Open Block Manager at launch
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
| categorySectionLabel        | Category 'section' label              | 'Sections'             |
| categoryBlockLabel          | Category 'block' label                | 'Blocks'               |
| dynamicContentModalTitle    | Title for Dynamic Content modal       | 'Edit Dynamic Content' |

## Summary

* Plugin name: `grapesjs-preset-mautic`



## Download

* GIT
  * `git clone https://github.com/mautic/grapesjs-preset-mautic.git`



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
$ git clone https://github.com/mautic/grapesjs-preset-mautic.git
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

### Dependencies

Html needs to be `beautified` for the click tracking to work. Therefore, we can not use the built in command: `mjml-get-code` but we have to use `mjml2html` directly. 

> `beautify` option is deprecated in mjml-core and only available in mjml cli.
https://github.com/mautic/mautic/issues/10331

### Dynamic Content
- Takes HTML from the Dynamic Content popup and adds it to the canvas based on the text (html) or mj-text (mjml) component.

## How to test a preset pull request

1. Build the preset: `npm run build` (done by author)
2. [Create a PR](https://github.com/mautic/grapesjs-preset-mautic/pulls) (done by author)
3. Fork the repo: `gh repo fork mautic/grapesjs-preset-mautic`
4. Clone the repo: `gh repo clone USERNAME/grapesjs-preset-mautic && gh pr checkout PRNUMBER>`
5. Change into the plugin directory: e.g. `cd mautic/plugins/GrapesJSBuilderBundle`
6. Optional: Is the plugin code touched by this preset code change too? Checkout the correct plugin PR from github.com/mautic/mautic as well. E.g. `gh pr checkout PR` when you are in the Mautic directory (not the preset directory).
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
8. Install the global dependency (make sure it is v1): `npm install parcel@1`
9. Install the project depencencies: `npm install`
10.  Build the JS code of the **plugin** 'plugin-grapesjs-builder' in the dev mode (not minified): `npm run build-dev`
11. Test the code locally. Make sure nothing is cached. Recommended way is using the incognito mode. E.g. https://mautic.ddev.site/s/emails
12. Check the browser console if you find errors. They help a lot with debugging!

## License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.udemy.com/certificate/UC-5CZA2NJ8/"><img src="https://avatars.githubusercontent.com/u/22201881?v=4?s=100" width="100px;" alt="Disha P"/><br /><sub><b>Disha P</b></sub></a><br /><a href="https://github.com/mautic/grapesjs-preset-mautic/commits?author=disha-pishavadia24" title="Code">💻</a></td>
      <td align="center"><a href="http://www.idea2.ch"><img src="https://avatars.githubusercontent.com/u/13075514?v=4?s=100" width="100px;" alt="Adrian"/><br /><sub><b>Adrian</b></sub></a><br /><a href="https://github.com/mautic/grapesjs-preset-mautic/commits?author=adiux" title="Code">💻</a> <a href="https://github.com/mautic/grapesjs-preset-mautic/commits?author=adiux" title="Documentation">📖</a> <a href="https://github.com/mautic/grapesjs-preset-mautic/pulls?q=is%3Apr+reviewed-by%3Aadiux" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-adiux" title="User Testing">📓</a></td>
      <td align="center"><a href="https://stackoverflow.com/users/902161/irfan"><img src="https://avatars.githubusercontent.com/u/4272642?v=4?s=100" width="100px;" alt="Irfan Hanfi"/><br /><sub><b>Irfan Hanfi</b></sub></a><br /><a href="https://github.com/mautic/grapesjs-preset-mautic/commits?author=irfanhanfi" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/ekkeguembel"><img src="https://avatars.githubusercontent.com/u/43146234?v=4?s=100" width="100px;" alt="Ekkehard Gümbel"/><br /><sub><b>Ekkehard Gümbel</b></sub></a><br /><a href="#userTesting-ekkeguembel" title="User Testing">📓</a></td>
      <td align="center"><a href="http://johnlinhart.com"><img src="https://avatars.githubusercontent.com/u/1235442?v=4?s=100" width="100px;" alt="John Linhart"/><br /><sub><b>John Linhart</b></sub></a><br /><a href="https://github.com/mautic/grapesjs-preset-mautic/pulls?q=is%3Apr+reviewed-by%3Aescopecz" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="https://github.com/volha-pivavarchyk"><img src="https://avatars.githubusercontent.com/u/96085911?v=4?s=100" width="100px;" alt="Volha Pivavarchyk"/><br /><sub><b>Volha Pivavarchyk</b></sub></a><br /><a href="#userTesting-volha-pivavarchyk" title="User Testing">📓</a></td>
      <td align="center"><a href="https://github.com/annamunk"><img src="https://avatars.githubusercontent.com/u/102536220?v=4?s=100" width="100px;" alt="Anna Munk"/><br /><sub><b>Anna Munk</b></sub></a><br /><a href="https://github.com/mautic/grapesjs-preset-mautic/commits?author=annamunk" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!