"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCode = exports.walletStatus = exports.newWallet = exports.customerWalletBalance = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var Constants_1 = require("../../config/Constants");
var providerPrefix = 'fcmb/wallet/';
var customerWalletBalance = function (secretKey, body, header) {
    var url = providerPrefix + 'Customerwallet/Balance';
    return rest_1.default(url, Constants_1.Methods.GET, secretKey, body, header);
};
exports.customerWalletBalance = customerWalletBalance;
var newWallet = function (secretKey, body, header) {
    var url = providerPrefix + 'Customerwallet/new';
    return rest_1.default(url, Constants_1.Methods.POST, secretKey, body, header);
};
exports.newWallet = newWallet;
var walletStatus = function (secretKey, body, header) {
    var url = providerPrefix + 'Customerwallet/Status';
    return rest_1.default(url, Constants_1.Methods.PUT, secretKey, body, header);
};
exports.walletStatus = walletStatus;
var validateCode = function (secretKey, body, header) {
    var url = providerPrefix + 'validateCode';
    return rest_1.default(url, Constants_1.Methods.GET, secretKey, body, header);
};
exports.validateCode = validateCode;
