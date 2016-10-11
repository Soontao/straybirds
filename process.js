#!/usr/bin/env node

'use strict'

const read = require('fs').readFileSync;
const write = require('fs').writeFileSync;
const context = read('./stray.txt', 'utf8');

let chapters = context.split('\r\n\r\n');
let stray_birds = {};

chapters.forEach(chapter => {
  let idx = chapter.indexOf('\r\n');
  let seq = chapter.substr(0, idx);
  let content = chapter.substr(idx);
  stray_birds[seq] = content;
});

write('./stray.json', JSON.stringify(stray_birds), 'utf8');

