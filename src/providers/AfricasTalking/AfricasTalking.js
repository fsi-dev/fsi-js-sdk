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
var africasTalkingAirtime = __importStar(require("./Airtime"));
var africasTalkingSms = __importStar(require("./Sms"));
var africasTalkingVoice = __importStar(require("./Voice"));
var AfricasTalking = /** @class */ (function () {
    function AfricasTalking(testKey) {
        var _this = this;
        /*Airtime*/
        this.sendAirtime = function (body, header) { return africasTalkingAirtime.sendAirtime(_this.secretKey, body, header); };
        this.getTransactionStatus = function (body, header) { return africasTalkingAirtime.transactionStatus(_this.secretKey, body, header); };
        /*Sms*/
        this.sendSms = function (body, header) { return africasTalkingSms.sendSms(_this.secretKey, body, header); };
        this.generateToken = function (body, header) { return africasTalkingSms.generateToken(_this.secretKey, body, header); };
        this.createPremiumSubscription = function (body, header) { return africasTalkingSms.createPremiumSubscription(_this.secretKey, body, header); };
        this.fetchPremiumSubscription = function (body, header) { return africasTalkingSms.fetchPremiumSubscriptions(_this.secretKey, body, header); };
        this.deletePremiumSubscription = function (body, header) { return africasTalkingSms.deletePremiumSubscription(_this.secretKey, body, header); };
        this.fetchMessage = function (body, header) { return africasTalkingSms.fetchMessage(_this.secretKey, body, header); };
        /*Voice*/
        this.voiceCall = function (body, header) { return africasTalkingVoice.voiceCall(_this.secretKey, body, header); };
        this.queueStatus = function (body, header) { return africasTalkingVoice.queueStatus(_this.secretKey, body, header); };
        this.mediaUpload = function (body, header) { return africasTalkingVoice.mediaUpload(_this.secretKey, body, header); };
        this.secretKey = testKey;
    }
    return AfricasTalking;
}());
exports.default = AfricasTalking;
