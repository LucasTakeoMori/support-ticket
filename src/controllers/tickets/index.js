export function index({request, response, database}){
  const tickets = database.select("ticket")

  return response.end(JSON.stringify(tickets))
}