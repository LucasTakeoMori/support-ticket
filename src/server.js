import http from "node:http"

import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

async function listener(request, response) {
  // Function

  await jsonHandler(request, response)
  routeHandler(request, response)
}

http.createServer(listener).listen(3333)