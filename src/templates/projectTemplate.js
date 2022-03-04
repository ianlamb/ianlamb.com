import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Section, Container } from '../components/common'
import Header from '../components/Header'

const Post = styled.article(
    ({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
`
)

const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    display: inline-block;
`

const PostDate = styled.div(
    ({ theme }) => `
    font-size: 0.8rem;
    color: ${theme.palette.text.muted};
`
)

const PostContent = styled.div``

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO />
            <Container maxWidth={800}>
                <Header compact={true} />
                <Section>
                    <Post>
                        <PostTitle>{frontmatter.title}</PostTitle>
                        <PostDate>{frontmatter.date}</PostDate>
                        <PostContent
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </Post>
                </Section>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ProjectByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
