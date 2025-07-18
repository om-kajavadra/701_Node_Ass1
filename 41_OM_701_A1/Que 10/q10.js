//  __dirname and __filename
console.log(' Current directory:', __dirname);
console.log(' Current file:', __filename);

//  setTimeout and setInterval
setTimeout(() => {
  console.log(' This message appears after 2 seconds');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(` Interval count: ${count}`);
  if (count === 3) {
    clearInterval(intervalId);
    console.log(' Interval cleared');
  }
}, 1000);

//  process object
console.log(' Process ID:', process.pid);
console.log(' Node version:', process.version);
console.log(' Platform:', process.platform);

//  console object
console.log(' This is a standard log');
console.error(' This is an error log');
console.warn(' This is a warning log');

//  Buffer object
const buf = Buffer.from('Hello, Buffer!');
console.log(' Buffer content:', buf);
console.log(' Buffer as string:', buf.toString());
