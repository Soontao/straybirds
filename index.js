#!/usr/bin/env node

var chapters = require('./stray.json');
var process = require('process');
var length = Object.keys(chapters).length;

var random = function (max) {
  return Math.ceil(Math.random() * max);
}

var random_chapter = function (init) {
  var thisIdx = init <= length ? init : random(length);
  var thisChapter = chapters[thisIdx];
  return {
    idx: thisIdx,
    content: thisChapter
  };
}

if (require.main) {
  var chapter = random_chapter(process.argv[2])
  console.log(`Stray Birds - Chapter ${chapter.idx} \r\nRabindranath Tagore\r\n ${chapter.content}`);
  process.exit()
}
else {
  module.exports = random_chapter;
}