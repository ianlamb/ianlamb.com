/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Ian Lamb',
        titleTemplate: '%s',
        siteUrl: 'https://ianlamb.com',
        description: 'Stumbling through life',
        image: 'avatar.jpg',
    },
    plugins: [
        // netlify cms
        'gatsby-plugin-netlify-cms',

        // markdown support
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `markdown-pages`,
            },
        },
        'gatsby-transformer-remark',

        // seo
        'gatsby-plugin-advanced-sitemap',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Ian Lamb`,
                short_name: `IL`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `static/logo.png`,
            },
        },
        'gatsby-plugin-offline',
    ],
}
