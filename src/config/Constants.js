"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveProviderName = exports.Methods = exports.version = exports.baseUrl = void 0;
var baseUrl = 'https://fsi-core-dev.inits.dev/api/';
exports.baseUrl = baseUrl;
var version = 'v1/';
exports.version = version;
var AfricasTalking_1 = __importDefault(require("../providers/AfricasTalking/AfricasTalking"));
var EcoBank_1 = __importDefault(require("../providers/EcoBank/EcoBank"));
var Fcmb_1 = __importDefault(require("../providers/FCMB/Fcmb"));
var SterlingBank_1 = __importDefault(require("../providers/SterlingBank/SterlingBank"));
var Woven_1 = __importDefault(require("../providers/Woven/Woven"));
var ZenithBank_1 = __importDefault(require("../providers/ZenithBank/ZenithBank"));
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["PATCH"] = "PATCH";
    Methods["DELETE"] = "DELETE";
})(Methods || (Methods = {}));
exports.Methods = Methods;
;
var resolveProviderName = function (providerName, secretKey) {
    switch (providerName) {
        case 'AfricasTalking':
            return new AfricasTalking_1.default(secretKey);
            break;
        case 'EcoBank':
            return new EcoBank_1.default(secretKey);
            break;
        case 'FCMB':
            return new Fcmb_1.default(secretKey);
            break;
        case 'SterlingBank':
            return new SterlingBank_1.default(secretKey);
            break;
        case 'Woven':
            return new Woven_1.default(secretKey);
            break;
        case 'Zenith':
            return new ZenithBank_1.default(secretKey);
            break;
    }
};
exports.resolveProviderName = resolveProviderName;
