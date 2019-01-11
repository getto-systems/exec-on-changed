"use strict";

exports.watch = (dir, file) => {
  const watch = require("node-watch");
  const path = require("path");
  const {execFile} = require("child_process");

  watch(dir, {recursive: true}, (type, entry) => {
    const base = path.relative(".", dir) + path.sep;
    execFile(file, [dir, entry.split(base).pop()], (error, stdout, stderr) => {
      if (stderr) {
        console.log(stderr);
      }
      if (stdout) {
        console.log(stdout);
      }
    });
  });
};
