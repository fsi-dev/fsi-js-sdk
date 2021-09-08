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
var wovenFinanceApis = __importStar(require("./Index"));
var Woven = /** @class */ (function () {
    function Woven(key) {
        var _this = this;
        this.createVNubanAndCustomer = function (body, header) { return wovenFinanceApis.createVNubanAndCustomer(_this.secretKey, body, header); };
        this.createVNubanForCustomer = function (body, header) { return wovenFinanceApis.createVNubanForCustomer(_this.secretKey, body, header); };
        this.editVAccount = function (body, header) { return wovenFinanceApis.editVAccount(_this.secretKey, body, header); };
        this.fetchVirtualAccounts = function (body, header) { return wovenFinanceApis.fetchVirtualAccounts(_this.secretKey, body, header); };
        this.lookUpVAccount = function (body, header) { return wovenFinanceApis.lookUpVAccount(_this.secretKey, body, header); };
        this.getVNubanTransactions = function (body, header) { return wovenFinanceApis.getVNubanTransactions(_this.secretKey, body, header); };
        this.secretKey = key;
    }
    return Woven;
}());
exports.default = Woven;
