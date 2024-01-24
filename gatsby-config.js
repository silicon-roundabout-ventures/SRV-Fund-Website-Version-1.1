module.exports = {
  siteMetadata: {
    title: "Silicon Roundabout Ventures",
    titleTemplate: "%s ─ We Back Next-Generation Technologies First",
    description: "Community-driven VC investin in Deep Tech and Big Data seed startups in the UK and Europe",
    author: "@siliconoroundabout.ventures",
    url: "https://siliconroundabout.ventures", // No trailing slash allowed!
    image: "/srv_dark_logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@siliconLondon",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-PHR8C7F",
    //     includeInDevelopment: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-QC1W412S43", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d94838`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/srv_dash_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // enable and config gatsby-source-graphql plugin
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'Hashnode',
    //     fieldName: 'hashnode',
    //     url: 'https://api.hashnode.com/',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer Y3e80387f-284e-4f36-bbe5-d9d3adf64a80',
    //     },
    //   },
    // },

    // {
    //   resolve: 'gatsby-source-mailchimp',
    //   options: {
    //     endpoint: process.env.MAILCHIMP_ENDPOINT,
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
    //     // Enables Google Optimize Experiment ID
    //     experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: 'example.com',
    //   },
    // },

    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.example.com',
    //     sitemap: 'https://www.example.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },

  ],
};
