"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atmPin = exports.lastFourDigits = exports.validateByCustomerId = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'fcmb/authentication/';
var validateByCustomerId = function (secretKey, body) {
    var url = providerPrefix + '/validateByCustomerId';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.validateByCustomerId = validateByCustomerId;
var lastFourDigits = function (secretKey, body) {
    var url = providerPrefix + '/Last4Digits';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.lastFourDigits = lastFourDigits;
var atmPin = function (secretKey, body) {
    var url = providerPrefix + '/AtmPIN';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.atmPin = atmPin;
