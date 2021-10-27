import React from "react"
import SEO from "../components/seo"
import {
  Avatar,
  Page,
  Section,
  Container,
  Header,
  Title,
  Description,
} from "../components/common"
import RandomQuote from "../components/RandomQuote"
import BlogRoll from "../components/BlogRoll"
import "../styles.css"

export default function Home() {
  return (
    <Page>
      <SEO />
      <Section>
        <Container>
          <Header>
            <Avatar src="/avatar.png" alt="avatar" />
            <Title>Ian Lamb</Title>
            <Description>Software Engineer building things at Improbable</Description>
          </Header>
        </Container>
      </Section>
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
