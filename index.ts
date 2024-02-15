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

import { default as filehandler } from "./src/filehandler";

export { FileHandlerInterface, FileHandlerStaticInterface } from "./src/filehandler";
export default {
  FileHandler: filehandler.FileHandler, 
  FileHandlerStatic: filehandler.FileHandlerStatic
}
