import React from 'react'
import { ThemeProvider } from 'styled-components'
import { throttle, clamp } from 'lodash-es'

import theme from '../theme'
import { Page } from './common'

export default function Layout({ children }) {
    const pageRef = React.useRef()
    const [dimmingFactor, setDimmingFactor] = React.useState(0)

    // dim the page as the user scrolls down
    const handleScroll = throttle((event) => {
        let factor = clamp(
            event.srcElement?.scrollTop / window.innerHeight,
            0,
            0.8
        )
        if (dimmingFactor !== factor) {
            setDimmingFactor(factor)
        }
    }, 100)

    React.useEffect(() => {
        let scrollElem = pageRef.current
        scrollElem.addEventListener('scroll', handleScroll)

        return () => {
            scrollElem.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <ThemeProvider theme={theme}>
            <Page ref={pageRef} background={`rgba(0, 0, 0, ${dimmingFactor})`}>
                {children}
            </Page>
        </ThemeProvider>
    )
}
