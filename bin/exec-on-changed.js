#!/usr/bin/env node
"use strict";

const commander = require("commander");

const exec = require("../index.js");

commander.version(require("../package.json").version)
  .option("-d, --dir  [dir]",  "The directory to watch files")
  .option("-f, --file [file]", "The file to execute when file created or changed. Exec: `file $dir $path`")
  .parse(process.argv);

exec.watchTree(commander.dir, commander.file);
