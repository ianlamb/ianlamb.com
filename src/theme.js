const spacingMultiplier = 8
const pink = '#d368ff'
const blue = '#2aaefb'

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
        pink,
        blue,
        magicGradient: `-webkit-linear-gradient(-75deg, ${pink}, ${blue})`,
    },
}

export const useTheme = () => theme

export default theme
