const spacingMultiplier = 8
const theme = {
    spacing: (value) => `${value * spacingMultiplier}px`,
    spacingMultiplier,
    avatarSize: 150,
    quoteDecorationSize: 200,
    palette: {
        background: '#2c2c2c',
        foreground: '#fffbf9'
    }
}

export default theme