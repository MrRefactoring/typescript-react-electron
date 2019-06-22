const fs = require('fs');
const path = require('path');
const { app, BrowserWindow } = require('electron');

const distPath = path.join(__dirname, 'dist');
const ENV = process.env.NODE_ENV || 'development';
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

if (ENV === 'development') {
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
    fs.writeFileSync(path.join(distPath, 'index.html', ''));
  }

  require('electron-reload')(distPath);
}

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
    mainWindow.toggleDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
