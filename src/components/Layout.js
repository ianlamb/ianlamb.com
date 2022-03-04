import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import { Page } from './common'

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Page>{children}</Page>
        </ThemeProvider>
    )
}
