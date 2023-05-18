const storageKey = 'theme-preference'

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}

const theme = {
    value: getColorPreference(),
}

const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('data-theme', theme.value)
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference()

    document.querySelector('html').style.setProperty('--hue', '200');
}