# odin-restaurant

## Plan
- DOM elements should be created using JavaScript but styling can be done in a separate CSS file.
- node_modules and dist -> `.gitignore`
- setup and configure webpack
    - html plugin
    - css loaders
    - images
    - fonts
- skeleton html
- starting index.js
- differnet js file for initial page dom load
- different module for each different tab
- event listener in nav buttons to wipe current content and run the correct "tab module"





## Archive

### Commands used to setup webpack
```
npm install --save-dev webpack webpack-cli\n
code webpack.config.js
npm install --save-dev html-webpack-plugin\n
npx webpack
npm install --save-dev style-loader css-loader\n
npm install --save-dev html-loader\n
npx webpack
npm install --save-dev webpack-dev-server\n
npx webpack serve\n
```