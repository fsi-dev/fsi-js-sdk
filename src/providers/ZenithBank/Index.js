"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.soapServer = exports.encrypter = exports.wsdlProvider = void 0;
var soap_1 = __importDefault(require("../../helpers/soap"));
var providerPrefix = 'zenith/';
var wsdlProvider = function (secretKey, body, header) {
    var url = providerPrefix + 'soap';
    return soap_1.default(url, 'GET', secretKey, body, header);
};
exports.wsdlProvider = wsdlProvider;
var soapServer = function (secretKey, body, header) {
    var url = providerPrefix + 'vnubans';
    return soap_1.default(url, 'POST', secretKey, body, header);
};
exports.soapServer = soapServer;
var encrypter = function (secretKey, body, header) {
    var url = providerPrefix + 'vnubans';
    return soap_1.default(url, 'GET', secretKey, body, header);
};
exports.encrypter = encrypter;
