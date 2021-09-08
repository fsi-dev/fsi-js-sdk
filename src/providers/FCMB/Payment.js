"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nipCharge = exports.nipBanks = exports.nipTransfersDateRange = exports.nipTransfers = exports.internalTransferStatus = exports.nipName = exports.nipStatus = exports.nibssStatus = exports.internalTransferDateRange = exports.internalTransfers = exports.bankToBankInternalTransfers = exports.bankToBankTransfers = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'fcmb/payments/';
var bankToBankTransfers = function (secretKey, body, header) {
    var url = providerPrefix + 'b2b/transfer';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.bankToBankTransfers = bankToBankTransfers;
var bankToBankInternalTransfers = function (secretKey, body) {
    var url = providerPrefix + 'b2b/internal/transfers';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.bankToBankInternalTransfers = bankToBankInternalTransfers;
var internalTransfers = function (secretKey, body) {
    var url = providerPrefix + 'internal/transfers';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.internalTransfers = internalTransfers;
var internalTransferStatus = function (secretKey, body) {
    var url = providerPrefix + 'internal/transfers/status';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.internalTransferStatus = internalTransferStatus;
var internalTransferDateRange = function (secretKey, body) {
    var url = providerPrefix + 'internal/transfers/DateRange';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.internalTransferDateRange = internalTransferDateRange;
var nipTransfers = function (secretKey, body) {
    var url = providerPrefix + 'nip/transfers';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.nipTransfers = nipTransfers;
var nipTransfersDateRange = function (secretKey, body) {
    var url = providerPrefix + 'nip/transfers/DateRange';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.nipTransfersDateRange = nipTransfersDateRange;
var nipCharge = function (secretKey, body) {
    var url = providerPrefix + 'nip/charge';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.nipCharge = nipCharge;
var nipBanks = function (secretKey, body) {
    var url = providerPrefix + 'nip/banks';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.nipBanks = nipBanks;
var nipName = function (secretKey, body) {
    var url = providerPrefix + 'nip/name';
    return rest_1.default(url, 'POST', secretKey, body);
};
exports.nipName = nipName;
var nipStatus = function (secretKey, body) {
    var url = providerPrefix + 'nip/status';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.nipStatus = nipStatus;
var nibssStatus = function (secretKey, body) {
    var url = providerPrefix + 'nip/nibss/status';
    return rest_1.default(url, 'GET', secretKey, body);
};
exports.nibssStatus = nibssStatus;
