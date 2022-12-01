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
        image: 'default_avatar.jpg',
    },
    plugins: [
        // fix FOUC with styled-components
        'gatsby-plugin-styled-components',

        // netlify cms
        'gatsby-plugin-netlify-cms',

        // markdown/yaml support
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `markdown-pages`,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-transformer-yaml',

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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-36320356-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
    ],
}
