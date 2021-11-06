module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            background: {
                primary: 'var(--bg-background-primary)',
                secondary: 'var(--bg-background-secondary)',
                tertiary: 'var(--bg-background-tertiary)',
            },
            primary: 'var(--text-color-primary)',
            tertiary: 'var(--text-color-tertiary)',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}