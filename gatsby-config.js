module.exports = {
  siteMetadata: {
    title: 'Art of the Possible',
  },
  plugins: [
    'gatsby-plugin-styled-jsx-postcss',
    {
      resolve: 'gatsby-plugin-lodash',
      options: {
        disabledFeatures: ['shorthands', 'cloning'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
