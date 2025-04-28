export async function jsonHandler(request, response) {
  // Criation of the buffers

  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

  // Header
  response.setHeader("Content-type", "application/json")
}