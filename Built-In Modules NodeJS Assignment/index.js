const fs = require('fs');

const nodejsArchitectureInfo = `
Node.js Architecture:
--------------------
Node.js is built on Chrome's V8 JavaScript engine, which provides an environment to execute JavaScript code outside of the browser. It follows an event-driven, non-blocking I/O model that makes it lightweight and efficient for handling concurrent operations.

Node.js uses the CommonJS module system, allowing developers to create reusable modules and manage dependencies using the 'require' and 'module.exports' statements. The package manager, npm, is widely used to manage third-party libraries and packages for Node.js applications.

Node.js can be used for various purposes, including building server-side applications, real-time web applications, command-line tools, and more. It has a rich ecosystem with a vast number of libraries and frameworks that make development faster and easier.

Node.js supports various operating systems and is cross-platform, making it a popular choice for developers working on both server-side and client-side applications.

For more information, you can visit the official Node.js website: https://nodejs.org/
`;

fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) throw err;
  console.log('Node.js architecture information has been written to nodejs_architecture.txt');
  console.log('Content of nodejs_architecture.txt:');
});
