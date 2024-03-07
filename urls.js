const fs = require("fs");

function reading(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      // handle possible error
      console.log(`Error reading ${path}: ${err}`);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    console.log(`file contents: ${data}`);
  });

  console.log("reading file");
  // file won't have been read yet at this point
}

reading("urls.txt");

async function saveHtml(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}
