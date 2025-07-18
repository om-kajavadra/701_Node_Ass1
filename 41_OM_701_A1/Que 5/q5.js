import fs from "fs";
import unzipper from "unzipper";

// Path to the ZIP file
const zipPath = 'myFolder.zip'; // Replace with your ZIP file name

// Destination folder
const extractTo = 'extractedFolder'; // Folder where contents will be extracted

fs.createReadStream(zipPath)
  .pipe(unzipper.Extract({ path: extractTo }))
  .on('close', () => {
    console.log('Extraction complete!');
  });
