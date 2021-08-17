// gatsby-node is run once at build time
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require('path');

// create blog pages from markdown files
// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    });
  });
};