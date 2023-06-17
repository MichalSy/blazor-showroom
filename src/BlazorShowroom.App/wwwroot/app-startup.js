function app() {
    let storageKey = 'theme-preference'
    let currentTheme = 'light'

    let getColorPreference = () => {
        if (localStorage.getItem(storageKey)) {
            return localStorage.getItem(storageKey)
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    let reflectPreference = () => {
        document.firstElementChild.setAttribute('data-theme', currentTheme)
    }

    currentTheme = getColorPreference()
    reflectPreference()

    window.onload = () => {
        reflectPreference()
    }

    // sync with system changes
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches: isDark }) => {
            currentTheme = isDark ? 'dark' : 'light'
            reflectPreference()
        })


    this.toggleTheme = function () {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light'
        localStorage.setItem(storageKey, currentTheme)
        reflectPreference()
    }

    this.setThemeColor = function (hueValue) {
        document.querySelector('html').style.setProperty('--hue', hueValue);
    }
}
window.app_instance = new app()