#!/usr/bin/env node

var chapters = require('./stray.json');
var process = require('process');
var length = Object.keys(chapters).length;

var random = function (max) {
  return Math.ceil(Math.random() * max);
}

var thisIdx = process.argv[2] <= length ? process.argv[2] : random(length);
var thisChapter = chapters[thisIdx];

console.log(`Stray Birds - Chapter ${thisIdx} \r\nRabindranath Tagore\r\n ${thisChapter}`);

process.exit()