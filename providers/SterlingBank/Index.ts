import * as sterlingBankApis from "./SterlingBank";

export default class SterlingBank {
    secretKey: string;

    constructor(key: string){
        this.secretKey = key;
    }

    interbankNameEnquiry = (body: object, header?: object) => { return sterlingBankApis.interbankNameEnquiry(this.secretKey, body, header) };
    interbankTransfer = (body: object, header?: object) => { return sterlingBankApis.interbankTransfer(this.secretKey, body, header) };
    mobileWallet = (body: object, header?: object) => { return sterlingBankApis.mobileWallet(this.secretKey, body, header) };
    getBillersPaymentItems = (body: object, header?: object) => { return sterlingBankApis.getBillersPaymentItems(this.secretKey, body, header) };
    getBillersISW = (body: object, header?: object) => { return sterlingBankApis.getBillersISW(this.secretKey, body, header) };

}