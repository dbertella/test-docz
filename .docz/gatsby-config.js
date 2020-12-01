const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Test Docz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/daniele/Dev/temp/test-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Test Docz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/daniele/Dev/temp/test-docz',
          templates:
            '/Users/daniele/Dev/temp/test-docz/node_modules/docz-core/dist/templates',
          docz: '/Users/daniele/Dev/temp/test-docz/.docz',
          cache: '/Users/daniele/Dev/temp/test-docz/.docz/.cache',
          app: '/Users/daniele/Dev/temp/test-docz/.docz/app',
          appPackageJson: '/Users/daniele/Dev/temp/test-docz/package.json',
          appTsConfig: '/Users/daniele/Dev/temp/test-docz/tsconfig.json',
          gatsbyConfig: '/Users/daniele/Dev/temp/test-docz/gatsby-config.js',
          gatsbyBrowser: '/Users/daniele/Dev/temp/test-docz/gatsby-browser.js',
          gatsbyNode: '/Users/daniele/Dev/temp/test-docz/gatsby-node.js',
          gatsbySSR: '/Users/daniele/Dev/temp/test-docz/gatsby-ssr.js',
          importsJs: '/Users/daniele/Dev/temp/test-docz/.docz/app/imports.js',
          rootJs: '/Users/daniele/Dev/temp/test-docz/.docz/app/root.jsx',
          indexJs: '/Users/daniele/Dev/temp/test-docz/.docz/app/index.jsx',
          indexHtml: '/Users/daniele/Dev/temp/test-docz/.docz/app/index.html',
          db: '/Users/daniele/Dev/temp/test-docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
