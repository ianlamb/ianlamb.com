const spacingMultiplier = 8
const theme = {
    spacing: (value) => `${value * spacingMultiplier}px`,
    spacingMultiplier,
    quoteDecorationSize: 300,
    breakpoints: {
        mobile: '600px',
        tablet: '900px',
    },
    palette: {
        background: '#2c2c2c',
        foreground: '#fffbf9',
        text: {
            muted: '#c9c9c9',
            primary: 'rgb(254,72,170)',
            secondary: 'rgb(49,165,246)',
        },
        magicGradient: '-webkit-linear-gradient(-75deg, #d368ff, #2aaefb)',
    },
}

export default theme
