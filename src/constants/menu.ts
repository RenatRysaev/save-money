import routes from 'routes'

export const TOP_MENU = routes
  .filter((route) => route.includesInTheMenu)
  .map((route) => ({ name: route.title, path: route.path }))
