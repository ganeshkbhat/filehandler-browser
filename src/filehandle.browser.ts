/**
 * 
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler-browser
 * npmjs Link: https://www.npmjs.com/package/stream-fs-browser
 * File: index.js
 * File Description: Read and Write files in files using streaming using browser
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import * as fs from "node:fs";
import { Buffer } from 'node:buffer';
import { once } from 'node:events';
import * as util from 'node:util';
import * as stream from 'node:stream';

/**
 *
 *
 * @export
 * @interface FileHandlerStaticInterface
 */
export interface FileHandlerStaticInterface {
  readFileStreaming: (filePath: string, encoding?: string | null | undefined) => Promise<any>
  writeFileStreaming: (filePath: string, iterableData: any[], encoding?: string | null | undefined) => Promise<any>
}

/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
export interface FileHandlerInterface {
  filePath: string;
  encoding: string;
  readFileStreaming: () => Promise<any>
  writeFileStreaming: (iterableData: any[]) => Promise<any>
}

/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
export class FileHandlerStatic implements FileHandlerStaticInterface {

  /**
   *
   *
   * @param {string} filePath
   * @param {(string | null | undefined)} [encoding]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  readFileStreaming(filePath: string, encoding?: string | null | undefined): Promise<any> {
    return new Promise((resolve, reject) => {

    });
  }

  /**
   *
   *
   * @param {string} filePath
   * @param {any[]} iterableData
   * @param {(string | null | undefined)} [encoding]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  writeFileStreaming(filePath: string, iterableData: any[], encoding?: string | null | undefined): Promise<any> {
    return new Promise(async (resolve, reject) => {

    });
  }
}

/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
export class FileHandler implements FileHandlerInterface {
  filePath: string;
  encoding: string;

  /**
   * Creates an instance of FileHandler.
   * @param {string} filePath
   * @param {(string | null | undefined)} [encoding]
   * @memberof FileHandler
   */
  constructor(filePath: string, encoding?: string | null | undefined) {
    this.filePath = filePath;
    this.encoding = encoding || 'UTF8';
  }

  verifyPermission(fileHandle: FileSystemFileHandle, withWrite: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      const opts: object = {};
      if (!!withWrite) { opts["mode"] = "readwrite"; }

      if ((await fileHandle.queryPermission(opts)) === "granted") { resolve(true); }
      if ((await fileHandle.requestPermission(opts)) === "granted") { resolve(true); }

      reject(false);
    });
  }

  /**
   *
   *
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  readFileStreaming(options: object = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const [newHandle] = await window.showOpenFilePicker(options);
      if (newHandle.kind === "file") {
        const writableStream = await newHandle;
        const fileData = await newHandle.getFile();
        // return fileData;
        resolve(fileData);
      } else if (newHandle.kind === "directory") {
        reject(false);
      }
    });
  }

  /**
   *
   *
   * @param {any[]} iterableData
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  writeFileStreaming(iterableData: any[], options: object = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const newHandle = await window.showSaveFilePicker();
      const writableStream = await newHandle.createWritable();
      // writableStream.write({ type: "write", position, data });
      // writableStream.write({ type: "seek", position });
      // writableStream.write({ type: "truncate", size });
      // writableStream.write(data);
      await writableStream.write({ type: "write", position: 0, ...options, data: iterableData });
      await writableStream.close();
    });
  }
}

export default {
  FileHandler,
  FileHandlerStatic
}
