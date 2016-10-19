var http = require('http');

function onRequest(request, response)
{
    console.log("A user made a request" + request.url);
    response.writeHead(200,{"Context-Type": "text/plain"});
    response.write("George Sucks!!!");
    response.end();
}

http.createServer(onRequest).listen(9000);
console.log("This is your game server!");
