import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme'
import { Link, graphql, StaticQuery } from 'gatsby'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const BlogRollContainer = styled.div`
    margin-top: ${theme.spacing(4)};
`

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacing(2)};
    grid-row-gap: ${theme.spacing(4)};
`

const Post = styled.article``

const PostTitle = styled.h2`
    font-size: 1.25rem;
    margin: 0;
    display: inline-block;
`

const PostDate = styled.div`
    font-size: 0.8rem;
    color: ${theme.palette.text.muted};
`

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <BlogRollContainer>
                <h2>Intentionally Organized Words</h2>
                <PostsContainer>
                    {posts &&
                        posts.map(({ node: post }) => (
                            <Post key={post.id}>
                                <header>
                                    <Link
                                        className="title has-text-primary is-size-4"
                                        to={post.frontmatter.path}
                                    >
                                        <PostTitle>
                                            {post.frontmatter.title}
                                        </PostTitle>
                                    </Link>
                                    <PostDate>
                                        {dayjs(post.frontmatter.date).fromNow()}
                                    </PostDate>
                                </header>
                            </Post>
                        ))}
                </PostsContainer>
            </BlogRollContainer>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

const query = () => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
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
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)

export default query
