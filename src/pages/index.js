import React from 'react'
import NoSSR from 'react-no-ssr'
import styled from 'styled-components'
import { throttle, clamp } from 'lodash-es'

import '../styles.css'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Page, Section, Container } from '../components/common'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
// import About from '../components/About'
// import BlogRoll from '../components/BlogRoll'
import Projects from '../components/Projects'
import RandomQuote from '../components/RandomQuote'
import WorldMap from '../components/WorldMap'

export const HeaderContainer = styled.div(
    ({ theme }) => `
    margin-top: ${theme.spacing(20)};
    margin-bottom: ${theme.spacing(20)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-top: ${theme.spacing(10)};
        margin-bottom: ${theme.spacing(10)};
    }
    `
)

// (perspective — distance) / perspective = scaleFactor
// eg. (8 – 3) / 8 = 0.625
export const Parallax = styled.div(
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

export const Overlay = styled.div(
    ({ background }) => `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${background};
    pointer-events: none;
`
)

const maxDimFactor = 0.6

export default function Home() {
    const pageRef = React.useRef()
    const [dimmingFactor, setDimmingFactor] = React.useState(maxDimFactor)

    // reduce dimming as the user scrolls down
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
    }, 100)

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
        <Layout>
            <Page ref={pageRef}>
                <SEO />
                <Overlay background={`rgba(0, 0, 0, ${dimmingFactor})`} />
                <Parallax bg="/background.jpg" />
                <Container>
                    <HeaderContainer>
                        <Header />
                        <SocialLinks />
                    </HeaderContainer>
                </Container>
                <Section background="#2a2b48cf">
                    <Container>
                        <Projects />
                    </Container>
                </Section>
                {/* <Section>
                <Container>
                    <BlogRoll />
                </Container>
            </Section> */}
                <Section>
                    <NoSSR>
                        <RandomQuote />
                    </NoSSR>
                </Section>
                <Section>
                    <WorldMap />
                </Section>
            </Page>
        </Layout>
    )
}
