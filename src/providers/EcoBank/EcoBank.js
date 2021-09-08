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
var ecoBankCorporateApi = __importStar(require("./CorporateApi"));
var EcoBank = /** @class */ (function () {
    function EcoBank(testKey) {
        var _this = this;
        /*Corporate API*/
        this.generateToken = function (body, header) { return ecoBankCorporateApi.tokenGeneration(_this.secretKey, body, header); };
        this.cardPayment = function (body, header) { return ecoBankCorporateApi.cardPayment(_this.secretKey, body, header); };
        this.momoPayment = function (body, header) { return ecoBankCorporateApi.momoPayment(_this.secretKey, body, header); };
        this.getMcc = function (body, header) { return ecoBankCorporateApi.getMcc(_this.secretKey, body, header); };
        this.merchantQRCreation = function (body, header) { return ecoBankCorporateApi.merchantQRCreation(_this.secretKey, body, header); };
        this.secretKey = testKey;
    }
    return EcoBank;
}());
exports.default = EcoBank;
