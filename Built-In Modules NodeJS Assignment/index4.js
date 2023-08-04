const os = require('os');

const osName = os.platform();
const osRelease = os.release();

console.log('Operating System:', osName);
console.log('Release Version:', osRelease);
