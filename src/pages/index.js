import React from "react"
import SEO from "../components/seo"
import {
  Page,
  Section,
  Container,
} from "../components/common"
import Header from "../components/Header"
import BlogRoll from "../components/BlogRoll"
import RandomQuote from "../components/RandomQuote"
import WorldMap from "../components/WorldMap"
import "../styles.css"
import theme from "../theme"

export default function Home() {
  return (
    <Page>
      <SEO />
      <Container>
        <Header />
        <div style={{textAlign:"center",marginTop:theme.spacing(2)}}>
          <a href="https://github.com/ianlamb" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </Container>
      <Section>
        <Container>
          <BlogRoll />
        </Container>
      </Section>
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
