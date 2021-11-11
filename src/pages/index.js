import React from 'react'
import SEO from '../components/seo'
import { Page, Section, Container } from '../components/common'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import About from '../components/About'
// import BlogRoll from '../components/BlogRoll'
import RandomQuote from '../components/RandomQuote'
import WorldMap from '../components/WorldMap'
import '../styles.css'

export default function Home() {
    return (
        <Page>
            <SEO />
            <Container>
                <Header />
                <SocialLinks />
            </Container>
            <Section>
                <Container>
                    <About />
                </Container>
            </Section>
            {/* <Section>
                <Container>
                    <BlogRoll />
                </Container>
            </Section> */}
            <Section>
                <Container>
                    <RandomQuote />
                </Container>
            </Section>
            <Section>
                <WorldMap />
            </Section>
        </Page>
    )
}
