const spacingMultiplier = 8
const theme = {
    spacing: (value) => `${value * spacingMultiplier}px`,
    spacingMultiplier,
    quoteDecorationSize: 200,
    palette: {
        background: '#2c2c2c',
        foreground: '#fffbf9',
        text: {
            muted: '#c9c9c9',
        }
    }
}

export default theme