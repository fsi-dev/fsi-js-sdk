"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchVirtualAccounts = exports.lookUpVAccount = exports.editVAccount = exports.getVNubanTransactions = exports.createVNubanForCustomer = exports.createVNubanAndCustomer = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'woven/';
var createVNubanAndCustomer = function (secretKey, body, header) {
    var url = providerPrefix + 'vnubans/create_customer';
    return rest_1.default(url, 'POST', secretKey, body, header);
};
exports.createVNubanAndCustomer = createVNubanAndCustomer;
var createVNubanForCustomer = function (secretKey, body, header) {
    var url = providerPrefix + 'vnubans';
    return rest_1.default(url, 'POST', secretKey, body, header);
};
exports.createVNubanForCustomer = createVNubanForCustomer;
var editVAccount = function (secretKey, body, header, routeParam) {
    var url = providerPrefix + ("vnubans/" + routeParam);
    return rest_1.default(url, 'PUT', secretKey, body, header);
};
exports.editVAccount = editVAccount;
var fetchVirtualAccounts = function (secretKey, body, header) {
    var url = providerPrefix + "vnubans";
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.fetchVirtualAccounts = fetchVirtualAccounts;
var lookUpVAccount = function (secretKey, body, header, routeParam) {
    var url = providerPrefix + ("vnubans/" + routeParam);
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.lookUpVAccount = lookUpVAccount;
var getVNubanTransactions = function (secretKey, body, header) {
    var url = providerPrefix + 'transactions';
    return rest_1.default(url, 'GET', secretKey, body, header);
};
exports.getVNubanTransactions = getVNubanTransactions;
