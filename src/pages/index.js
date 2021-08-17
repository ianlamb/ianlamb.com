import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import {
  Page,
  Section,
  Container,
  ShadowBox,
  Backdrop,
  CenterVertically,
  Column
} from "../components/common"
import "../styles.css"

const Title = styled.h1`
  text-align: center;

`

export default function Home() {
  return (
    <Page>
      <SEO />
      <Backdrop src="/bg1.jpg"></Backdrop>
      <Section height="100vh">
        <Container>
          <CenterVertically>
            <Column size="7">
              <ShadowBox>Hello</ShadowBox>
            </Column>
          </CenterVertically>
        </Container>
      </Section>
    </Page>
  )
}
