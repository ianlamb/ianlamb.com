import React from 'react'
import NoSSR from 'react-no-ssr'
import { graphql, useStaticQuery } from 'gatsby'
import Particles from 'react-tsparticles'

import '../styles.css'
import theme from '../theme'
import Layout from '../components/Layout'
import Metadata from '../components/Metadata'
import { Section, Container } from '../components/common'
import ParallaxPage from '../components/ParallaxPage'
import Header from '../components/Header'
// import BlogRoll from '../components/BlogRoll'
import Projects from '../components/Projects'
import RandomQuote from '../components/RandomQuote'
import WorldMap from '../components/WorldMap'

const particlesOptions = {
    fpsLimit: 120,
    particles: {
        color: {
            value: theme.palette.pink,
        },
        links: {
            color: theme.palette.pink,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 30,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'square',
        },
        size: {
            random: true,
            value: 3,
        },
    },
    detectRetina: true,
}

export default function Home() {
    const { pagesYaml: pageData } = useStaticQuery(graphql`
        query getPageData {
            pagesYaml(name: { eq: "home" }) {
                name
                title
                intro
                social {
                    label
                    url
                }
                quotes {
                    quote
                    author
                }
                travel {
                    label
                    value
                    max
                }
            }
        }
    `)

    const particlesInit = (main) => {
        console.log('Particles Init', main)
    }

    const particlesLoaded = (container) => {
        console.log('Particles Loaded', container)
    }

    return (
        <Layout>
            <ParallaxPage>
                <Particles
                    id="particles"
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particlesOptions}
                />
                <Metadata />
                <Container>
                    <Header
                        title={pageData.title}
                        intro={pageData.intro}
                        socialLinks={pageData.social}
                    />
                </Container>
                <Section background="rgba(0,0,0,0.5)">
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
                        <RandomQuote quotes={pageData.quotes} />
                    </NoSSR>
                </Section>
                <Section>
                    <WorldMap travel={pageData.travel} />
                </Section>
            </ParallaxPage>
        </Layout>
    )
}
