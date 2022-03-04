// gatsby-node is run once at build time
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require('path')

const createBlogPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(blog)/" } }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = path.resolve('src/templates/blogTemplate.js')
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: template,
            context: {},
        })
    })
}

const createProjectPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(projects)/" } }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = path.resolve('src/templates/projectTemplate.js')
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: template,
            context: {},
        })
    })
}

// create pages from markdown files
// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/
exports.createPages = async (options) => {
    await createProjectPages(options)
    await createBlogPages(options)
}
