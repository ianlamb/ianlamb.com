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

const PostTitle = styled.h3`
    margin: 0;
    display: inline-block;
`

const PostDate = styled.div(
    ({ theme }) => `
    font-size: 0.8rem;
    color: ${theme.palette.text.muted};
`
)

const Cards = styled.div(
    ({ theme }) => `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacing(4)};
    grid-row-gap: ${theme.spacing(4)};

    @media only screen and (max-width: ${theme.breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        padding-bottom: ${theme.spacing(4)};
    }
`
)

const CardBody = styled.div``

const CardImageContainer = styled.div`
    position: relative;
    margin-bottom: 8px;
    transition: all 0.25s ease-out;

    &:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        transition: background 0.25s ease-out;
    }
`

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border: 0;
`

const Card = styled.div(
    ({ theme }) => `
    position: relative;

    &:hover {
        ${CardImageContainer} {
            transform: translateY(-2px);

            &:before {
                background: rgba(0, 0, 0, 0);
            }
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
`

const CardContent = styled.div``

class Projects extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <ProjectsContainer>
                <h2>Side Projects</h2>
                <Cards>
                    {posts &&
                        posts.map(({ node: post }) => (
                            <Card key={post.id}>
                                <CardBody>
                                    <CardImageContainer>
                                        <CardImage
                                            src={post.frontmatter.image}
                                            alt={`Image for ${post.frontmatter.title}`}
                                        />
                                    </CardImageContainer>
                                    <CardContent>
                                        <PostTitle>
                                            {post.frontmatter.title}
                                        </PostTitle>
                                        <PostDate>
                                            {dayjs(
                                                post.frontmatter.date
                                            ).fromNow()}
                                        </PostDate>
                                    </CardContent>
                                </CardBody>
                                <CardLink to={post.frontmatter.path}></CardLink>
                            </Card>
                        ))}
                </Cards>
            </ProjectsContainer>
        )
    }
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
