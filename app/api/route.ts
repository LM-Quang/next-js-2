// Route Handlers is a File in which you can export various functions which MUST be names
// GET, POST, PUT, DELETE...(HTTP method)
// Route handlers don't return pages that are rendered on the screen, but to do something behind the scenes
export function GET(request: Request) {
   console.log(request);
   return new Response("Hello!");
   // return Response.json();
}
