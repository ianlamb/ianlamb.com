import React from "react"
import SEO from "../components/seo"
import {
  Page,
  Section,
  Container,
} from "../components/common"
import Header from "../components/Header"
import RandomQuote from "../components/RandomQuote"
import BlogRoll from "../components/BlogRoll"
import "../styles.css"

export default function Home() {
  return (
    <Page>
      <SEO />
      <Container>
        <Header />
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
    </Page>
  )
}
