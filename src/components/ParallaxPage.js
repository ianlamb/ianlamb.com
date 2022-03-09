import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { throttle, clamp } from 'lodash-es'

import '../styles.css'
import { Page, Overlay } from '../components/common'

const Root = styled(Page)(
    ({ theme }) => `
    height: 100vh;
  overflow-y: auto;
  perspective: 8px;
  perspective-origin: 0%;
`
)

// (perspective — distance) / perspective = scaleFactor
// eg. (8 – 3) / 8 = 0.625
const Parallax = styled.div(
    ({ theme, bg }) => `
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 1440px;
    opacity: 0.7;
    transform-origin: 0%;
    transform: translateZ(-8px) scale(2);
    z-index: -1;
    background-image: url('${bg}');
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;

    @media only screen and (max-width: ${theme.breakpoints.tablet}) {
        width: 200%;
        left: -40%;
    }

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        width: 300%;
        left: -60%;
    }
`
)

export default function ParallaxPage({
    maxDimFactor = 0.6,
    scrollThrottleMS = 33,
    children,
}) {
    const pageRef = React.useRef()
    const [dimmingFactor, setDimmingFactor] = React.useState(maxDimFactor)

    // reduce dimming as the user scrolls down
    // TODO move this into different component to avoid re-rendering entire page tree on scroll
    const handleScroll = throttle((event) => {
        let factor =
            maxDimFactor -
            clamp(
                pageRef.current?.scrollTop / window.innerHeight,
                0,
                maxDimFactor
            )
        if (dimmingFactor !== factor) {
            setDimmingFactor(factor)
        }
    }, scrollThrottleMS)

    React.useEffect(() => {
        let scrollElem = pageRef.current
        scrollElem.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        return () => {
            scrollElem.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [handleScroll])

    return (
        <Root ref={pageRef}>
            <Overlay opacity={dimmingFactor} />
            <Parallax bg="/background.jpg" />
            {children}
        </Root>
    )
}

ParallaxPage.propTypes = {
    maxDimFactor: PropTypes.number,
    scrollThrottleMS: PropTypes.number,
    children: PropTypes.node,
}
