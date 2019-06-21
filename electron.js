const path = require('path');
const { app, BrowserWindow } = require('electron');

const ENV = process.env.NODE_ENV || 'development';
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  if (ENV === 'development') {
    require('electron-reload')(path.join(__dirname, 'dist'));
    mainWindow.toggleDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
