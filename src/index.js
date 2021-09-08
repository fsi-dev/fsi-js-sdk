"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./config/Constants");
var Fsi = function (secretKey, provider) {
    return Constants_1.resolveProviderName(provider, secretKey);
};
exports.default = Fsi;
var testKey = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
var provider = 'EcoBank';
var header = {
    Origin: 'developer.ecobank.com',
    Authorization: "Bearer sdkkfllroodmmdl"
};
// let initializer = Fsi(testKey, provider);
// let body: object = {
//     userId: "developer1@unifiedworks.com",
//     password: "$2a$10$Wmame.Lh1FJDCB4JJIxtx.3SZT0dP2XlQWgj9Q5UAGcDLp!@3344"
// };
// let response = initializer.generateToken(body);
// response.then( res => console.log({success : res}) ).catch( err => console.log({error: err}) );
