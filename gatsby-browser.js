/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const createBrowserHistory = require('history/createBrowserHistory').default

const baseRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/

const configureBaseNode = () => {
  let baseNode = document.head.querySelector('base')

  if (!baseNode) {
    baseNode = document.createElement('base')
    document.head.appendChild(baseNode)
  }

  baseNode.href = `${(window.location.pathname.match(baseRegExp) || [])[1] || ''}/`
}

const wrapGetResourcesForPathname = () => {
  const loader = global.___loader

  if (!loader) {
    return
  }

  const { getResourcesForPathname } = loader

  loader.getResourcesForPathname = (path, ...args) => {
    path = path.replace(baseRegExp, '')

    return getResourcesForPathname(path, ...args)
  }
}

// Ensure the history basename is set to /ipfs/xxx and /ipns/yyyy,
// see https://github.com/ReactTraining/history `basename` option
// exports.replaceHistory = () => createBrowserHistory({
//   basename: (window.location.pathname.match(baseRegExp) || [])[1] || ''
// })

exports.onPreRouteUpdate = ({ location }) => {
  console.log('Gatsby started to change location', location.pathname)
}

exports.onClientEntry = () => {
  // Configure the <base href> tag to be /ipfs/xxx/ or /ipns/yyyy/
  configureBaseNode()

  // Hook into the resources fetcher for pages so that /ipfs/xxx and
  // /ipns/yyyy are removed from the path
  wrapGetResourcesForPathname()
}
