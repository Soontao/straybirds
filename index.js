#!/usr/bin/env node

require("colors")
const axios = require("axios").default
const process = require('process');
const os = require("os")
const path = require("path")
const fs = require("fs")

const CONTENT_URI = "https://cdn.jsdelivr.net/gh/Soontao/straybirds/stray.json"

const LOCAL_PATH = path.join(os.tmpdir(), "stray_birds_tmp.json");

/**
 * get chapters from local or remote
 * 
 * @returns 
 */
async function getChapters() {

  if (!fs.existsSync(LOCAL_PATH)) {
    const { data } = await axios.get(CONTENT_URI)
    fs.writeFileSync(LOCAL_PATH, JSON.stringify(data), { encoding: "utf-8" })
  }
  return JSON.parse(fs.readFileSync(LOCAL_PATH, { encoding: "utf-8" }))
}

/**
 * ramdom value
 * 
 * @param {number} max max value
 * @returns 
 */
const random = function (max) {
  return Math.floor(Math.random() * max);
}

/**
 * export a random chapter
 * 
 * @returns 
 */
const random_chapter = function (chapters, init) {
  const length = Object.keys(chapters).length;
  const thisIdx = (init >= 1 && init <= (length + 1)) ? init : random(length);
  const thisChapter = chapters[thisIdx];
  return {
    idx: thisIdx,
    content: thisChapter
  };
}

if (require.main) {

  (async () => {

    try {

      const chapter = random_chapter(await getChapters(), parseInt(process.argv[2]))
      console.log(`\n${"Stray Birds".green}\nAuthor: ${"Rabindranath Tagore".cyan}\nChapter: ${String(chapter.idx).random} \n${chapter.content}\n`);
      process.exit()

    } catch (error) {

      console.error(error)
      process.exit(1)

    }

  })()



}
else {
  module.exports = random_chapter;
}