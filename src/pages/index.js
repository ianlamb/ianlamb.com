import React from 'react'
import NoSSR from 'react-no-ssr'
import { graphql, useStaticQuery } from 'gatsby'

import '../styles.css'
import Layout from '../components/Layout'
import Metadata from '../components/Metadata'
import { Section, Container } from '../components/common'
import ParallaxPage from '../components/ParallaxPage'
import Header from '../components/Header'
// import BlogRoll from '../components/BlogRoll'
import Projects from '../components/Projects'
import RandomQuote from '../components/RandomQuote'
import WorldMap from '../components/WorldMap'

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

    return (
        <Layout>
            <ParallaxPage>
                <Metadata />
                <Container>
                    <Header
                        title={pageData.title}
                        intro={pageData.intro}
                        socialLinks={pageData.social}
                    />
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
