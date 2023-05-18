﻿const storageKey = 'theme-preference'

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

export function toggleTheme() {
    console.log("BLA");
    // flip current value
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'

    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}



// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference()
}


// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })