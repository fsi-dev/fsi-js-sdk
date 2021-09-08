import * as ecoBankCorporateApi from "./CorporateApi";

export default class EcoBank {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Corporate API*/
    generateToken = (body: object, header?: object) => { return ecoBankCorporateApi.tokenGeneration(this.secretKey, body, header) };
    cardPayment = (body: object, header: object) => { return ecoBankCorporateApi.cardPayment(this.secretKey, body, header) };
    momoPayment = (body: object, header: object) => { return ecoBankCorporateApi.momoPayment(this.secretKey, body, header) };
    getMcc = (body: object, header: object) => { return ecoBankCorporateApi.getMcc(this.secretKey, body, header) };
    merchantQRCreation = (body: object, header: object) => { return ecoBankCorporateApi.merchantQRCreation(this.secretKey, body, header) };

}