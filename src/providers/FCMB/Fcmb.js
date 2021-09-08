"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fcmbAuthentication = __importStar(require("./Authentication"));
var fcmbCard = __importStar(require("./Card"));
var fcmbPayment = __importStar(require("./Payment"));
var fcmbWallet = __importStar(require("./Wallet"));
var FCMB = /** @class */ (function () {
    function FCMB(testKey) {
        var _this = this;
        /*Authentication*/
        this.validateByCustomerId = function (body, header) { return fcmbAuthentication.validateByCustomerId(_this.secretKey, body, header); };
        this.authenticateLastFourDigits = function (body, header) { return fcmbAuthentication.lastFourDigits(_this.secretKey, body, header); };
        this.authenticateAtmPin = function (body, header) { return fcmbAuthentication.atmPin(_this.secretKey, body, header); };
        /*Card*/
        this.cardType = function (body, header) { return fcmbCard.cardType(_this.secretKey, body, header); };
        this.cardRequest = function (body, header) { return fcmbCard.cardRequest(_this.secretKey, body, header); };
        /*Payment*/
        this.bankToBankTransfers = function (body, header) { return fcmbPayment.bankToBankTransfers(_this.secretKey, body, header); };
        this.bankToBankInternalTransfers = function (body, header) { return fcmbPayment.bankToBankInternalTransfers(_this.secretKey, body, header); };
        this.internalTransfers = function (body, header) { return fcmbPayment.internalTransfers(_this.secretKey, body, header); };
        this.internalTransferStatus = function (body, header) { return fcmbPayment.internalTransferStatus(_this.secretKey, body, header); };
        this.internalTransferDateRange = function (body, header) { return fcmbPayment.internalTransferDateRange(_this.secretKey, body, header); };
        this.nipTransfers = function (body, header) { return fcmbPayment.nipTransfers(_this.secretKey, body, header); };
        this.nipTransfersDateRange = function (body, header) { return fcmbPayment.nipTransfersDateRange(_this.secretKey, body, header); };
        this.nipCharge = function (body, header) { return fcmbPayment.nipCharge(_this.secretKey, body, header); };
        this.nipBanks = function (body, header) { return fcmbPayment.nipBanks(_this.secretKey, body, header); };
        this.nipName = function (body, header) { return fcmbPayment.nipName(_this.secretKey, body, header); };
        this.nipStatus = function (body, header) { return fcmbPayment.nipStatus(_this.secretKey, body, header); };
        this.nibssStatus = function (body, header) { return fcmbPayment.nibssStatus(_this.secretKey, body, header); };
        /*Wallet*/
        this.walletBalance = function (body, header) { return fcmbWallet.customerWalletBalance(_this.secretKey, body, header); };
        this.createNewWallet = function (body, header) { return fcmbWallet.newWallet(_this.secretKey, body, header); };
        this.walletStatus = function (body, header) { return fcmbWallet.walletStatus(_this.secretKey, body, header); };
        this.validateCode = function (body, header) { return fcmbWallet.validateCode(_this.secretKey, body, header); };
        this.secretKey = testKey;
    }
    return FCMB;
}());
exports.default = FCMB;
