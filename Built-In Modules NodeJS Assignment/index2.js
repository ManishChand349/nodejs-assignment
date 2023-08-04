const fs = require('fs');

// Read the existing content of 'nodejs_architecture.txt'
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading 'nodejs_architecture.txt':", err);
  } else {
    // Additional advantages of Node.js
    const additionalAdvantages = `
Additional Advantages of Node.js:
---------------------------------
1. Non-blocking I/O: Node.js uses an event-driven, non-blocking I/O model, allowing it to handle multiple requests efficiently without blocking the execution of other operations.

2. Scalability: Node.js is designed to be highly scalable, making it suitable for building applications that need to handle a large number of concurrent connections.

3. Rich Ecosystem: Node.js has a vast and active community, which has contributed to a rich ecosystem of libraries and modules available through npm, making development faster and more convenient.

4. Fast Execution: Node.js applications are built on the V8 engine, which compiles JavaScript to native machine code, resulting in faster execution times.

5. Real-time Applications: Node.js is well-suited for building real-time applications like chat applications, gaming servers, and collaborative tools due to its low latency and event-driven architecture.

For more information, you can visit the official Node.js website: https://nodejs.org/
`;

    // Append the additional advantages to the existing content
    const updatedContent = data + additionalAdvantages;

    // Write the updated content back to 'nodejs_architecture.txt'
    fs.writeFile('nodejs_architecture.txt', updatedContent, (err) => {
      if (err) {
        console.error("Error writing to 'nodejs_architecture.txt':", err);
      } else {
        console.log('Advantages of Node.js have been added to nodejs_architecture.txt');
        console.log('Updated content of nodejs_architecture.txt:');
        console.log(updatedContent);
      }
    });
  }
});
