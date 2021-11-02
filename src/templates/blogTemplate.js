import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import { Page, Section, Container } from '../components/common'
import Header from '../components/Header'
import theme from '../theme'

const Post = styled.article`
    margin-bottom: ${theme.spacing(10)};
`

const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    display: inline-block;
`

const PostDate = styled.div`
    font-size: 0.8rem;
    color: ${theme.palette.text.muted};
`

const PostContent = styled.div``

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Page>
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
        </Page>
    )
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
`
