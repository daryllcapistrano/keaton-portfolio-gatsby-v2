module.exports = {
	siteMetadata: {
		title: `Keaton Rodgers`,
		description: `Keaton Rodgers Media`,
		author: `dvapistrano.dev`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `keaton-rodgers-portfolio`,
				short_name: `KRMEDIA`,
				start_url: `/`,
				display: `minimal-ui`,
				// change the icon below
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
