"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionStatus = exports.sendAirtime = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'v1/africastalking';
var sendAirtime = function (secretKey, body, header) {
    var url = providerPrefix + '/version1/airtime/send';
    return rest_1.default(url, 'POST', secretKey, body, header);
};
exports.sendAirtime = sendAirtime;
var transactionStatus = function (secretKey, body, header) {
    var url = providerPrefix + '/query/transaction/find';
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.transactionStatus = transactionStatus;
