const fs = require('fs');

const filename = 'nodejs_architecture.txt';

fs.unlink(filename, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File Deleted Successfully");
  }
});
