import { routes } from '../routes/index.js'
import { Database } from '../database/database.js'

const database = new Database()

export function routeHandler(request, response) {
  // Checking if route exists or not

  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url
  })

  if (route) {
    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end()
}