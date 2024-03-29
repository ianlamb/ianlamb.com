import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { useTheme } from '../theme'
import Layout from '../components/Layout'
import Metadata from '../components/Metadata'
import { Page, Section, Container } from '../components/common'
import Header from '../components/Header'

export const Background = styled.div(
    ({ background }) => `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${background};
    pointer-events: none;
    opacity: 0.8;
`
)

const Project = styled.article(
    ({ theme }) => `
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(5)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`
)

const SidebarContainer = styled.div(
    ({ theme }) => `
    flex-basis: 240px;
    min-width: 240px;
    margin-bottom: ${theme.spacing(2)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-bottom: ${theme.spacing(2)};
    }
`
)

const Sidebar = styled.div(
    ({ theme }) => `
    padding: ${theme.spacing(2)};
    background: rgba(0, 0, 0, 0.5);
`
)

const Content = styled.div(
    ({ theme }) => `
    flex: 1;
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    min-height: calc(100vh - 96px - ${theme.spacing(11)});
`
)

const MarkdownContent = styled.div(
    ({ theme }) => `
    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
    }
    img {
        display: block;
        max-height: 400px;
        max-width: 100%;
        margin: 0 auto;
    }
`
)

const Thumbnail = styled.img`
    width: 100%;
    height: auto;
    border: 0;
`

const ProjectMetadata = styled.dl(
    ({ theme }) => `
    margin: 0;
`
)

const Label = styled.dt(
    ({ theme }) => `
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${theme.palette.text.muted};
    margin-bottom: 2px;
`
)

const Value = styled.dd(
    ({ theme }) => `
    margin: 0;
    font-size: 1rem;
    &:not(:last-of-type) {
        margin-bottom: ${theme.spacing(2)};
    }
`
)

const BackLink = styled(Link)(
    ({ theme }) => `
    float: right;
    margin-top: ${theme.spacing(2)};
`
)

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const theme = useTheme()

    return (
        <Layout>
            <Page background={theme.palette.magicGradient}>
                <Metadata
                    title={frontmatter.title}
                    description={frontmatter.description}
                    image={frontmatter.image}
                    article={true}
                />
                <Background background="url('/graphy_dark.png')" />
                <Section>
                    <Container maxWidth={800} gutters={false}>
                        <Header compact={true} />
                        <Project>
                            <SidebarContainer>
                                <Sidebar>
                                    <ProjectMetadata>
                                        <Label>Project</Label>
                                        <Value>
                                            {frontmatter.title || '?'}
                                        </Value>
                                        <Label>Published</Label>
                                        <Value>{frontmatter.date || '?'}</Value>
                                        {frontmatter.source && (
                                            <>
                                                <Label>Source</Label>
                                                <Value>
                                                    <a
                                                        href={
                                                            frontmatter.source
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        GitHub
                                                    </a>
                                                </Value>
                                            </>
                                        )}
                                        {frontmatter.url && (
                                            <>
                                                <Label>Artifact</Label>
                                                <Value>
                                                    <a
                                                        href={frontmatter.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Visit Live Site
                                                    </a>
                                                </Value>
                                            </>
                                        )}
                                        {frontmatter.image && (
                                            <>
                                                <Label>Preview</Label>
                                                <Value>
                                                    <Thumbnail
                                                        src={frontmatter.image}
                                                        alt={`Image for ${frontmatter.title}`}
                                                    />
                                                </Value>
                                            </>
                                        )}
                                    </ProjectMetadata>
                                </Sidebar>
                            </SidebarContainer>
                            <Content>
                                <MarkdownContent
                                    dangerouslySetInnerHTML={{
                                        __html: html,
                                    }}
                                />

                                <BackLink to="/#projects">
                                    &#10229; Back
                                </BackLink>
                            </Content>
                        </Project>
                    </Container>
                </Section>
            </Page>
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
                description
                image
                url
                source
            }
        }
    }
`
