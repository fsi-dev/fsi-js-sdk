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
var zenithBankApis = __importStar(require("./Index"));
var ZenithBank = /** @class */ (function () {
    function ZenithBank(key) {
        var _this = this;
        this.wsdlProvider = function (body, header) { return zenithBankApis.wsdlProvider(_this.secretKey, body, header); };
        this.soapServer = function (body, header) { return zenithBankApis.soapServer(_this.secretKey, body, header); };
        this.encrypter = function (body, header) { return zenithBankApis.encrypter(_this.secretKey, body, header); };
        this.secretKey = key;
    }
    return ZenithBank;
}());
exports.default = ZenithBank;
