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
/**
 *
 *
 * @export
 * @interface FileHandlerStaticInterface
 */
interface FileHandlerStaticInterface {
    readFileStreaming: (filePath: string, encoding?: string | null | undefined) => Promise<any>;
    writeFileStreaming: (filePath: string, iterableData: any[], encoding?: string | null | undefined) => Promise<any>;
}
/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
interface FileHandlerInterface {
    filePath: string;
    encoding: string;
    readFileStreaming: () => Promise<any>;
    writeFileStreaming: (iterableData: any[]) => Promise<any>;
}
/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
declare class FileHandlerStatic implements FileHandlerStaticInterface {
    /**
     *
     *
     * @param {string} filePath
     * @param {(string | null | undefined)} [encoding]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    readFileStreaming(filePath: string, encoding?: string | null | undefined): Promise<any>;
    /**
     *
     *
     * @param {string} filePath
     * @param {any[]} iterableData
     * @param {(string | null | undefined)} [encoding]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    writeFileStreaming(filePath: string, iterableData: any[], encoding?: string | null | undefined): Promise<any>;
}
/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
declare class FileHandler implements FileHandlerInterface {
    filePath: string;
    encoding: string;
    /**
     * Creates an instance of FileHandler.
     * @param {string} filePath
     * @param {(string | null | undefined)} [encoding]
     * @memberof FileHandler
     */
    constructor(filePath: string, encoding?: string | null | undefined);
    verifyPermission(fileHandle: FileSystemFileHandle, withWrite: boolean): Promise<any>;
    /**
     *
     *
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    readFileStreaming(options?: object): Promise<any>;
    /**
     *
     *
     * @param {any[]} iterableData
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    writeFileStreaming(iterableData: any[], options?: object): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map