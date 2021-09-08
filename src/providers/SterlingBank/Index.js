"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBillersPaymentItems = exports.interbankTransfer = exports.interbankNameEnquiry = exports.getBillersISW = exports.mobileWallet = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'sterling/';
var interbankNameEnquiry = function (secretKey, body, header) {
    var url = providerPrefix + 'TransferAPIs/api/Spay/InterbankNameEnquiry';
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.interbankNameEnquiry = interbankNameEnquiry;
var interbankTransfer = function (secretKey, body, header) {
    var url = providerPrefix + 'accountapi/api/Spay/InterbankTransferReq';
    return rest_1.default(url, 'POST', secretKey, body, header);
};
exports.interbankTransfer = interbankTransfer;
var mobileWallet = function (secretKey, body, header) {
    var url = providerPrefix + 'accountapi/api/Spay/SBPMWalletRequest';
    return rest_1.default(url, 'POST', secretKey, body, header);
};
exports.mobileWallet = mobileWallet;
var getBillersPaymentItems = function (secretKey, body, header) {
    var url = providerPrefix + 'billpaymentapi/api/Spay/GetBillerPmtItemsRequest';
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.getBillersPaymentItems = getBillersPaymentItems;
var getBillersISW = function (secretKey, body, header) {
    var url = providerPrefix + 'billpaymentapi/api/Spay/GetBillersISWRequest';
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.getBillersISW = getBillersISW;
