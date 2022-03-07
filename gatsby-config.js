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
        // fix FOUC with styled-components
        'gatsby-plugin-styled-components',

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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: '305924119',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
    ],
}
