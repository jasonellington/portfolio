const dotenv = require("dotenv");
const path = require(`path`);

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Jason Ellington | Software Engineer`,
    description: `Freelance web developer that enjoys learning the coolest, latest web development frameworks and modern web architectures.`,
    author: `@jasontellington`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Ellington`,
        short_name: `Jason`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        crossOrigin: `use-credentials`
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
