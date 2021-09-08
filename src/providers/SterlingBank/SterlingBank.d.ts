export default class SterlingBank {
    secretKey: string;
    constructor(key: string);
    interbankNameEnquiry: (body: object, header?: object) => Promise<object>;
    interbankTransfer: (body: object, header?: object) => Promise<object>;
    mobileWallet: (body: object, header?: object) => Promise<object>;
    getBillersPaymentItems: (body: object, header?: object) => Promise<object>;
    getBillersISW: (body: object, header?: object) => Promise<object>;
}
