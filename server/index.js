const webSocketServerPort = 8000;
const WebSocketServer = require('websocket').server;

const http = require('http');
const server = http.createServer();
server.listen(webSocketServerPort);
console.log('Websocket server listening on localhost://', webSocketServerPort);

const wsServer = new webSocketServerPort({
  httpServer: server,
});

const clients = {};
const clientId = 0;
const clients = {};

wsServer.on('request', (req) => {
  console.log('Received new connection from client: ', clientId);
  clientId++;

  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);

  clients[clientId] = connection;
  console.log(
    `connected client ${clientId} in ${Object.getOwnPropertyNames(clients)}`
  );
});
