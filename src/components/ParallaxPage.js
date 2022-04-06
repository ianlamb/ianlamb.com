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
    bottom: -2000px;
    width: 100%;
    opacity: 0.8;
    transform-origin: 0%;
    transform: translateZ(-8px) scale(2);
    z-index: -1;
    background-image: url('${bg}');
    background-repeat: repeat;
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
