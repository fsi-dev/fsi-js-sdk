"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchantQRCreation = exports.getMcc = exports.momoPayment = exports.cardPayment = exports.tokenGeneration = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'eco/corporateapi/';
var tokenGeneration = function (secretKey, body, headers) {
    var url = providerPrefix + 'user/token';
    return rest_1.default(url, 'POST', secretKey, body, headers);
};
exports.tokenGeneration = tokenGeneration;
var cardPayment = function (secretKey, body, headers) {
    var url = providerPrefix + 'merchant/card';
    return rest_1.default(url, 'POST', secretKey, body, headers);
};
exports.cardPayment = cardPayment;
var momoPayment = function (secretKey, body, headers) {
    var url = providerPrefix + 'merchant/momo';
    return rest_1.default(url, 'POST', secretKey, body, headers);
};
exports.momoPayment = momoPayment;
var getMcc = function (secretKey, body, headers) {
    var url = providerPrefix + 'merchant/getmcc';
    return rest_1.default(url, 'POST', secretKey, body, headers);
};
exports.getMcc = getMcc;
var merchantQRCreation = function (secretKey, body, headers) {
    var url = providerPrefix + 'merchant/createqr';
    return rest_1.default(url, 'POST', secretKey, body, headers);
};
exports.merchantQRCreation = merchantQRCreation;
