import fs from "fs";
const filePath = 'example.txt';


fs.writeFile(filePath, 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully.');

 
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

   
    fs.appendFile(filePath, '\nAppended text.', (err) => {
      if (err) throw err;
      console.log('Text appended.');

     
      const newFilePath = 'renamed_example.txt';
      fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err;
        console.log('File renamed.');

        fs.unlink("./deletefile.txt", (err) => {
          if (err) throw err;
          console.log('File deleted.');

        });
      });
    });
  });
});
