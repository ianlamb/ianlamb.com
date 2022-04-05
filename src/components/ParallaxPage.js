import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../styles.css'
import { Page } from '../components/common'

const Root = styled(Page)(
    ({ theme }) => `
    height: 100vh;
    overflow-y: auto;
    perspective: 8px;
    perspective-origin: 0%;
    background: ${theme.palette.magicGradient};
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
    height: 400vh;
    opacity: 0.8;
    transform-origin: 0%;
    transform: translateZ(-8px) scale(2);
    z-index: -1;
    background-image: url('${bg}');
    background-repeat: repeat;

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

export default function ParallaxPage({ children }) {
    return (
        <Root>
            <Parallax bg="/graphy_dark.png" />
            {children}
        </Root>
    )
}

ParallaxPage.propTypes = {
    children: PropTypes.node,
}
