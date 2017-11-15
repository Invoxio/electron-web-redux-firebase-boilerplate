#Update Path
Starting with the base fork: 

git@github.com:Invoxio/react-redux-firebase-material-electron-starter.git

### Update package.json
Make sure node-gyp has good install globally.

In scripts: <br>
```"postinstall": "install-app-deps"``` to <br>
```"postinstall": "electron-builder install-app-deps"```

### Update packages
```yarn upgrade-interactive --latest```

