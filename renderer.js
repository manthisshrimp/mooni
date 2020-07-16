const customTitlebar = require('custom-electron-titlebar');

new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#1c1d21'),
    menu: null,
    titleHorizontalAlignment: 'left',
    icon: './assets/images/mooni.png'
});
