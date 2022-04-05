import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../theme'

const GlobalStyles = createGlobalStyle(
    ({ theme }) => `
  
`
)

// this wraps every page, so it's a good place for data/theme providers, etc
export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
