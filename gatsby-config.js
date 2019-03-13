module.exports = {
  siteMetadata: {
    title: `Will Holsten | Front End Development, London`,
    description: `Hey, I'm Will! A UX designer and front end developer based in London.`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:400,600,700', 'Taviraj:200,300,400,600,700']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/willholsten-icon.png` // This path is relative to the root of the site.
      }
    }
  ]
}
