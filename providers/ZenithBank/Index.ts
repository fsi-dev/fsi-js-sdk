import * as zenithBankApis from "./ZenithBank";

export default class ZenithBank {
    secretKey: string;

    constructor(key: string){
        this.secretKey = key;
    }

    wsdlProvider = (body: object, header?: object) => { return zenithBankApis.wsdlProvider(this.secretKey, body, header) };
    soapServer = (body: object, header?: object) => { return zenithBankApis.soapServer(this.secretKey, body, header) };
    encrypter = (body: object, header?: object) => { return zenithBankApis.encrypter(this.secretKey, body, header) };

}