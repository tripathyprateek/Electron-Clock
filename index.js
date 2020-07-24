const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 200,
        resizable: true,
    });
    win.loadFile("index.html");
}
