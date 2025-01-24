function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    const currentTheme = themeLink.href.includes('light.css') ? 'dark' : 'light';
    themeLink.href = `css/themes/${currentTheme}.css`;
}