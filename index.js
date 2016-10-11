#!/usr/bin/env node
const chapters = require('./stray.json');
const length = Object.keys(chapters).length;
const random = (max) => Math.ceil(Math.random() * max);

let thisIdx = random(length);
let thisChapter = chapters[thisIdx];

console.log(`\r\nChapter ${thisIdx} \r\n ${thisChapter}`);
