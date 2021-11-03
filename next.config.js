/**
 * Previously, `next.config.js` was used for adding `@zeit/next-source-maps`
 * and `@zeit/next-css` but these are not built in.
 *
 * For more information about using `next.config.js` see the documentation:
 * <https://nextjs.org/docs/api-reference/next.config.js/introduction>
 */

module.exports = {
  // target: "experimental-serverless-trace",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })

    return config
  },
}
