const http = require('http');

const port = 3000;
const message = "I Am Happy To Learn Full Stack Web Development From PW Skills!";

const server = http.createServer((req, res) => {
  // Set the appropriate content type in the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Send the message as a response to the client's request
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
