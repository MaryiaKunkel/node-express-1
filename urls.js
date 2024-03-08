const fs = require("fs/promises");
const process = require("process");
const axios = require("axios");

const path = process.argv[2];

async function readUrlsFromFile(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    return data.trim().split("\n");
  } catch (err) {
    console.error(`Error reading ${path}: ${err.message}`);
    process.exit(1);
  }
}

async function fetchAndSaveHTML(inputUrl) {
  try {
    let parsedUrl = new URL(inputUrl);
    let domainName = parsedUrl.hostname;
    let resp = await axios.get(inputUrl);
    await fs.writeFile(domainName, resp.data);
    console.log(`Wrote to ${domainName}`);
  } catch (err) {
    console.log(`Couldn't download ${inputUrl}`);
  }
}

async function main() {
  try {
    const urls = await readUrlsFromFile(path);

    for (const url of urls) {
      await fetchAndSaveHTML(url);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
