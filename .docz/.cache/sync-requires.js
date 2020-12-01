const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/daniele/Dev/temp/test-docz/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/daniele/Dev/temp/test-docz/README.md"))),
  "component---src-button-mdx": hot(preferDefault(require("/Users/daniele/Dev/temp/test-docz/src/Button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/daniele/Dev/temp/test-docz/.docz/src/pages/404.js")))
}

