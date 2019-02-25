module.exports = {
  siteMetadata: {
    title: `Mathieu Mencé | Web Graphics & Interface Developer`,
    description: ``,
    author: `Matnard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-layout',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mathieu Mencé | Web Graphics & Interface Developer`,
        short_name: `Matnard's`,
        start_url: `/`,
        background_color: `#666666`,
        theme_color: `#666666`,
        display: `minimal-ui`,
        icon: `src/media/profile-17.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'Matnard',
        url: `https://api.netlify.com/api/v1/sites?access_token=92e323aec5df85a72070708889f49873ad52ecd3335973fa20a760ec7cbae899`,
        method: 'GET',
        name: `Projects`,
        data: null,
        verboseOutput: true
      },
      data: null
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128247819-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
