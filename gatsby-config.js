module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/components/Layout/index.jsx`)
      }
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
    }
  ],
}