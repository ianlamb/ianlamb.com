import React from 'react'
import NoSSR from 'react-no-ssr'

import '../styles.css'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Section, Container, Parallax } from '../components/common'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
// import About from '../components/About'
// import BlogRoll from '../components/BlogRoll'
import Projects from '../components/Projects'
import RandomQuote from '../components/RandomQuote'
import WorldMap from '../components/WorldMap'

export default function Home() {
    return (
        <Layout>
            <SEO />
            <Parallax bg="/background.jpg" />
            <Container>
                <Header />
                <SocialLinks />
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
                <Container>
                    <NoSSR>
                        <RandomQuote />
                    </NoSSR>
                </Container>
            </Section>
            <Section>
                <WorldMap />
            </Section>
        </Layout>
    )
}
