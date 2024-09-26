const fs = require("fs"); //Importing the fs module
const needle = require("needle"); //Importing the needle module
const url = process.argv[2]; //Get the URL from command line arguments
const localFilePath = process.argv[3]; //Get the file path from command line

//1. make an HTTP request to fetch the content from the URL
needle.get(url, (error, response) => {
  if (error) {
    console.log(`Failed to download: ${error}`);
    return;
  }
  console.log(`Response received: ${response.body}`);
  //Printing out the length of the response body
  
  //2. Write the content to the localFilePath
  fs.writeFile(localFilePath, response.body, (err) => {
    if (err) {
      console.error(`Failed to save file: ${err}`);
      return;
    }
    console.log(`Downloaded and saved ${response.body.length} bytes to ${localFilePath}`);;
  });
});