import fs from "fs";
import util from "util";

// Promisify fs.unlink
const unlinkFile = util.promisify(fs.unlink);

// Delete the file using Promises
unlinkFile('./files/file1.txt')
  .then(() => {
    console.log(' File deleted!');
  })
  .catch((err) => {
    console.error(' Error deleting file:', err.message);
  });
