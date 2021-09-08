export default class ZenithBank {
    secretKey: string;
    constructor(key: string);
    wsdlProvider: (body: object, header?: object) => Promise<object>;
    soapServer: (body: object, header?: object) => Promise<object>;
    encrypter: (body: object, header?: object) => Promise<object>;
}
