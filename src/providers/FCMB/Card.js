"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRequest = exports.cardType = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'fcmb/cards';
var cardType = function (secretKey, body) {
    var url = providerPrefix + '/cardType';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.cardType = cardType;
var cardRequest = function (secretKey, body) {
    var url = providerPrefix + '/cardRequest';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.cardRequest = cardRequest;
