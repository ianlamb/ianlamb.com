import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql, StaticQuery } from 'gatsby'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ProjectsContainer = styled.div(
    ({ theme }) => `
`
)

const PostTitle = styled.h3(
    ({ theme }) => `
    margin: 0;
    display: inline-block;
    font-size: 1.0rem;
    
    .featured & {
        font-size: 1.6rem;
    }
`
)

const PostDate = styled.div(
    ({ theme }) => `
    font-size: 0.8rem;
    color: ${theme.palette.text.muted};
`
)

const PostDescription = styled.p(
    ({ theme }) => `
    margin: ${theme.spacing(2)} 0;
`
)

const Cards = styled.div(
    ({ theme }) => `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacing(6)};
    grid-row-gap: ${theme.spacing(4)};

    @media only screen and (max-width: ${theme.breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr 1fr;
        padding-bottom: ${theme.spacing(4)};
    }
`
)

const CardBody = styled.div(
    ({ theme }) => `
    
    .featured & {
        display: flex;
        flex-direction: row;
    }
`
)

const CardImageContainer = styled.div(
    ({ theme }) => `
    position: relative;
    margin-bottom: 8px;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.5);
    transition: all 0.25s ease-out;

    &:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.3;
        z-index: 1;
        background: ${theme.palette.magicGradient};
        transition: opacity 0.25s ease-out;
    }
    
    .featured & {
        width: 440px;
        height: 248px;
        overflow: hidden;

        @media only screen and (max-width: ${theme.breakpoints.tablet}) {
            width: 50%;
        }
    }
`
)

const CardImage = styled.img(
    ({ theme }) => `
    display: block;
    width: 100%;
    height: auto;
    border: 0;
    filter: grayscale(1);
    transition: filter 0.25s ease-out;
`
)

const Card = styled.div(
    ({ theme }) => `
    position: relative;

    &:hover {
        ${CardImageContainer} {
            transform: translateY(-2px);
            box-shadow: 0 1px 5px 1px rgba(0,0,0,0.5);

            &:before {
                opacity: 0;
            }
        }
        ${CardImage} {
            filter: grayscale(0);
        }
    }
    
    &.featured {
        grid-column: span 4;
        @media only screen and (max-width: ${theme.breakpoints.tablet}) {
            grid-column: span 3;
        }
    
        @media only screen and (max-width: ${theme.breakpoints.mobile}) {
            grid-column: span 2;
        }
    }
`
)

const CardLink = styled(Link)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
`

const CardContent = styled.div(
    ({ theme }) => `
    .featured & {
        flex: 1;
        padding: 0 ${theme.spacing(2)}
    }
`
)

const ProjectCard = ({ post, featured = false }) => (
    <Card className={featured ? 'featured' : ''}>
        <CardBody>
            <CardImageContainer>
                <CardImage
                    src={post.frontmatter.image}
                    alt={`Image for ${post.frontmatter.title}`}
                />
            </CardImageContainer>
            <CardContent>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostDate>{dayjs(post.frontmatter.date).fromNow()}</PostDate>
                {featured && (
                    <PostDescription>
                        {post.frontmatter.description}
                    </PostDescription>
                )}
            </CardContent>
        </CardBody>
        <CardLink to={post.frontmatter.path}>{post.frontmatter.title}</CardLink>
    </Card>
)

const Projects = ({ data }) => {
    let { edges } = data.allMarkdownRemark
    let posts = [...edges]
    let featuredPost
    const featuredPostIndex = posts.findIndex(
        (p) => p.node?.frontmatter?.featured === true
    )
    if (featuredPostIndex > -1) {
        featuredPost = posts[featuredPostIndex]
        posts.splice(featuredPostIndex, 1)
    }

    return (
        <ProjectsContainer>
            <h2>Side Projects</h2>
            <Cards>
                {featuredPost && (
                    <ProjectCard
                        key={featuredPost.id}
                        post={featuredPost.node}
                        featured={true}
                    />
                )}
                {posts &&
                    posts.map(({ node: post }) => (
                        <ProjectCard key={post.id} post={post} />
                    ))}
            </Cards>
        </ProjectsContainer>
    )
}

Projects.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

const query = () => (
    <StaticQuery
        query={graphql`
            query ProjectsQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: { fileAbsolutePath: { regex: "/(projects)/" } }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            frontmatter {
                                path
                                title
                                description
                                date
                                image
                                url
                                featured
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <Projects data={data} count={count} />}
    />
)

export default query
