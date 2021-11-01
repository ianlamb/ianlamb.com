import React from 'react';
import { graphql } from "gatsby"
import SEO from "../components/seo"
import {
  Page,
  Section,
  Container,
} from "../components/common"
import Header from "../components/Header"

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Page>
      <SEO />
      <Container>
        <Header compact={true} />
      </Container>
      <Section>
        <Container>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </Section>
    </Page>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;