module.exports = {
  siteMetadata: {
    title: "My Gatsby Site, Mine not yours",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
    resolve: "gatsby-source-filesystem",
    options:{
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  ],
}
