import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Page, Section, Container } from '../components/common'
import Header from '../components/Header'

const HeaderContainer = styled.div(
    ({ theme }) => `
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    `
)

const Post = styled.article(
    ({ theme }) => `
    margin-bottom: ${theme.spacing(5)};
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
            <Page>
                <SEO
                    title={frontmatter.title}
                    description={frontmatter.description}
                    article={true}
                />
                <Container maxWidth={800} gutters={false}>
                    <HeaderContainer>
                        <Header compact={true} />
                    </HeaderContainer>
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
        </Layout>
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
                description
            }
        }
    }
`
