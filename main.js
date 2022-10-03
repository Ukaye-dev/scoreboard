const { app, BrowserWindow } = require('electron', 'electron-window-manager')
const path = require('path')
const windowManager = require('electron-window-manager');

windowManager.templates.set('dev', {
  'width': 800,
  'height': 600,
  'resizeable': true,
  'layout': 'classy',
  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
    },
    });
  

  app.whenReady().then(() => {
    windowManager.init();
    windowManager.open('dev', 'Scoreboard', '/scoreboard.html');

    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  
    