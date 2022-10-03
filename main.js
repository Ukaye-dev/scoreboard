const { app, BrowserWindow } = require('electron', 'electron-window-manager')
const path = require('path')
const windowManager = require('electron-window-manager');

windowManager.templates.set('dev', {
  'width': 800,
  'height': 600,
  'menu': null,
  //make the window resizeable
  'resizable': true,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
    },
    });
  

    app.on('ready', function(){
    windowManager.init();
    windowManager.open(false, false, '/scoreboard.html', 'dev');
    windowManager.open(false, false, '/controlpanel.html', 'dev');
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  
    