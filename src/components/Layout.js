import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'

// this wraps every page, so it's a good place for data/theme providers, etc
export default function Layout({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
