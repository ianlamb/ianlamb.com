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
            primary: 'rgba(225, 140, 190, 1)',
        },
    },
}

export default theme
