/**
 * Required in order to get ESM modules to work with Next.jS
 * https://www.npmjs.com/package/next-transpile-modules
 *
 * Here's the discussion
 * https://github.com/vercel/next.js/issues/25454#issuecomment-928107867
 */

// const withTM = require("next-transpile-modules")(["unified"])

/**
 * Previously, `next.config.js` was used for adding `@zeit/next-source-maps`
 * and `@zeit/next-css` but these are not built in.
 *
 * For more information about using `next.config.js` see the documentation:
 * <https://nextjs.org/docs/api-reference/next.config.js/introduction>
 */

// module.export = withTM({
module.exports = {
  // target: "experimental-serverless-trace",
  // webpack5: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })

    return config
  },
}
