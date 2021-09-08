export default class EcoBank {
    secretKey: string;
    constructor(testKey: string);
    generateToken: (body: object, header?: object) => Promise<object>;
    cardPayment: (body: object, header: object) => Promise<object>;
    momoPayment: (body: object, header: object) => Promise<object>;
    getMcc: (body: object, header: object) => Promise<object>;
    merchantQRCreation: (body: object, header: object) => Promise<object>;
}
