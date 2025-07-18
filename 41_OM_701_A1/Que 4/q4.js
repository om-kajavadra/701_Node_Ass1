import fs from "fs";
import archiver from "archiver";


// Create a file to write the ZIP archive to
const output = fs.createWriteStream('myfolder.zip');
const archive = archiver('zip', { zlib: { level: 9 } }); 

// Listen for completion
output.on('close', () => {
  console.log(` ZIP created: ${archive.pointer()} bytes`);
});

// Handle errors
archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add folder to archive
archive.directory('myfolder/', false); // Replace 'myFolder' with your folder name

// Finalize the archive
archive.finalize();
