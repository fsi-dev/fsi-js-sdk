"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaUpload = exports.queueStatus = exports.voiceCall = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'v1/africastalking';
var voiceCall = function (secretKey, body) {
    var url = providerPrefix + '/voice/call';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.voiceCall = voiceCall;
var queueStatus = function (secretKey, body) {
    var url = providerPrefix + '/voice/queueStatus';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.queueStatus = queueStatus;
var mediaUpload = function (secretKey, body) {
    var url = providerPrefix + '/voice/mediaUpload';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.mediaUpload = mediaUpload;
