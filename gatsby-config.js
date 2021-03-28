module.exports = {
  siteMetadata: {
    title: `Keaton Rodgers`,
    description: `Keaton Rodgers Media`,
    author: `dcapistrano.dev`,
    menuLinks: [
      {
        name: `videos`,
        link: "/",
      },
      {
        name: `photos`,
        link: "/photos",
      },
      {
        name: `clients`,
        link: "/clients",
      },
      {
        name: `contact`,
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video-thumbnail`,
        path: `${__dirname}/src/images/video-thumbnails`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact-images`,
        path: `${__dirname}/src/images/contact-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gifs`,
        path: `${__dirname}/src/images/gifs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/images/photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos-wide`,
        path: `${__dirname}/src/images/photos-wide`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `photoSources`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keaton-rodgers-portfolio`,
        short_name: `KRMEDIA`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon/model1_square.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
