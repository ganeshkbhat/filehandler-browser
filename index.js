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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
var FileHandlerStatic = /** @class */ (function () {
    function FileHandlerStatic() {
    }
    /**
     *
     *
     * @param {string} filePath
     * @param {(string | null | undefined)} [encoding]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    FileHandlerStatic.prototype.readFileStreaming = function (filePath, encoding) {
        return new Promise(function (resolve, reject) {
        });
    };
    /**
     *
     *
     * @param {string} filePath
     * @param {any[]} iterableData
     * @param {(string | null | undefined)} [encoding]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    FileHandlerStatic.prototype.writeFileStreaming = function (filePath, iterableData, encoding) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); });
    };
    return FileHandlerStatic;
}());
/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
var FileHandler = /** @class */ (function () {
    /**
     * Creates an instance of FileHandler.
     * @param {string} filePath
     * @param {(string | null | undefined)} [encoding]
     * @memberof FileHandler
     */
    function FileHandler(filePath, encoding) {
        this.filePath = filePath;
        this.encoding = encoding || 'UTF8';
    }
    FileHandler.prototype.verifyPermission = function (fileHandle, withWrite) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var opts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {};
                        if (!!withWrite) {
                            opts["mode"] = "readwrite";
                        }
                        return [4 /*yield*/, fileHandle.queryPermission(opts)];
                    case 1:
                        if ((_a.sent()) === "granted") {
                            resolve(true);
                        }
                        return [4 /*yield*/, fileHandle.requestPermission(opts)];
                    case 2:
                        if ((_a.sent()) === "granted") {
                            resolve(true);
                        }
                        reject(false);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     *
     *
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    FileHandler.prototype.readFileStreaming = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var newHandle, writableStream, fileData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.showOpenFilePicker(options)];
                    case 1:
                        newHandle = (_a.sent())[0];
                        if (!(newHandle.kind === "file")) return [3 /*break*/, 4];
                        return [4 /*yield*/, newHandle];
                    case 2:
                        writableStream = _a.sent();
                        return [4 /*yield*/, newHandle.getFile()];
                    case 3:
                        fileData = _a.sent();
                        // return fileData;
                        resolve(fileData);
                        return [3 /*break*/, 5];
                    case 4:
                        if (newHandle.kind === "directory") {
                            reject(false);
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     *
     *
     * @param {any[]} iterableData
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    FileHandler.prototype.writeFileStreaming = function (iterableData, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var newHandle, writableStream, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, window.showSaveFilePicker()];
                    case 1:
                        newHandle = _a.sent();
                        return [4 /*yield*/, newHandle.createWritable()];
                    case 2:
                        writableStream = _a.sent();
                        // writableStream.write({ type: "write", position, data });
                        // writableStream.write({ type: "seek", position });
                        // writableStream.write({ type: "truncate", size });
                        // writableStream.write(data);
                        return [4 /*yield*/, writableStream.write(__assign(__assign({ type: "write", position: 0 }, options), { data: iterableData }))];
                    case 3:
                        // writableStream.write({ type: "write", position, data });
                        // writableStream.write({ type: "seek", position });
                        // writableStream.write({ type: "truncate", size });
                        // writableStream.write(data);
                        _a.sent();
                        return [4 /*yield*/, writableStream.close()];
                    case 4:
                        _a.sent();
                        resolve(true);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    return FileHandler;
}());
exports.default = {
    FileHandler: FileHandler,
    FileHandlerStatic: FileHandlerStatic
};
