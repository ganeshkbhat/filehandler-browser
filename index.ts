/**
 * 
 * Package: fs-handlers-browser
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i fs-handlers-browser --save
 * Github: https://github.com/ganeshkbhat/filehandler-browser
 * npmjs Link: https://www.npmjs.com/package/fs-handlers-browser
 * File: index.js
 * File Description: Read and Write files in files using streaming using browser
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 *
 *
 * @class FileHandlerStaticInterface
 */
class FileHandlerStaticInterface {
  static readFileStreaming: (filePath: string, encoding?: string | null | undefined) => Promise<any>
  static writeFileStreaming: (filePath: string, iterableData: any[], encoding?: string | null | undefined) => Promise<any>
}

/**
 *
 *
 * @interface FileHandlerInterface
 */
interface FileHandlerInterface {
  filePath: string;
  encoding: string;
  readFileStreaming: () => Promise<any>
  writeFileStreaming: (iterableData: any[]) => Promise<any>
}

/**
 *
 *
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
class FileHandlerStatic implements FileHandlerStaticInterface {

  /**
   *
   *
   * @param {string} filePath
   * @param {(string | null | undefined)} [encoding]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  static readFileStreaming(filePath: string, encoding?: string | null | undefined): Promise<any> {
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
  static writeFileStreaming(filePath: string, iterableData: any[], encoding?: string | null | undefined): Promise<any> {
    return new Promise(async (resolve, reject) => {

    });
  }

}


/**
 *
 *
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
class FileHandler implements FileHandlerInterface {
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

  /**
   *
   *
   * @param {FileSystemFileHandle} fileHandle
   * @param {boolean} withWrite
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  verifyPermission(fileHandle: FileSystemFileHandle, withWrite: boolean): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const opts: any = {};
      if (!!withWrite) { opts["mode"] = "readwrite"; }

      if ((await (fileHandle as any).queryPermission(opts)) === "granted") { resolve(true); }
      if ((await (fileHandle as any).requestPermission(opts)) === "granted") { resolve(true); }

      reject(false);
    });
  }

  /**
   *
   *
   * @param {object} [options={}]
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  readFileStreaming(options: object = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const [newHandle] = await (window as any).showOpenFilePicker(options);
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
   * @param {object} [options={}]
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  writeFileStreaming(iterableData: any[], options: object = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const newHandle = await (window as any).showSaveFilePicker();
        const writableStream = await newHandle.createWritable();
        // writableStream.write({ type: "write", position, data });
        // writableStream.write({ type: "seek", position });
        // writableStream.write({ type: "truncate", size });
        // writableStream.write(data);
        await writableStream.write({ type: "write", position: 0, ...options, data: iterableData });
        await writableStream.close();
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

}

