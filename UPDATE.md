#Update Path
Starting with the base fork: 

git@github.com:Invoxio/react-redux-firebase-material-electron-starter.git

### Update package.json
Make sure node-gyp has good install globally.

In scripts: <br>

```
"postinstall": "install-app-deps"
``` 
to 

```
"postinstall": "electron-builder install-app-deps"
```

### Update packages
```yarn upgrade-interactive --latest```

### Update electron start to add and open react-redux devtools.

```
yarn add electron-devtools-installer --dev
```
then in src/electron-starter.js

```
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
```

still in src/electron-start.js after mainWindow.loadURL(startUrl)

```
// Open the DevTools.
mainWindow.webContents.openDevTools()
```

still in src/electron-start.js add extensions after mainWindow.on("closed") block:

```
// Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  // Installing React Dev

  installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
      console.log(`Added Extension:  ${name}`);
  })
  .catch((err) => {
      console.log('An error occurred: ', err);
  });

  installExtension(REDUX_DEVTOOLS).then((name) => {
      console.log(`Added Extension:  ${name}`);
  })
  .catch((err) => {
      console.log('An error occurred: ', err);
  });
```

  