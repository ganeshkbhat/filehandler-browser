/**
 * 
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/stream-fs
 * File: index.js
 * File Description: Read and Write files in files using streaming
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const filehandler = require("../src/index").default;

const FileHandler = filehandler.FileHandler;

const fs = new FileHandler("./demos/demos.test.txt");
(async () => {
  let tst = await fs.readFileStreaming();
  tst = tst.toString(fs.encoding);
  console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming(tst);
  console.log("written: ", written);
})()

