export default class FCMB {
    secretKey: string;
    constructor(testKey: string);
    validateByCustomerId: (body: object, header?: object) => Promise<object>;
    authenticateLastFourDigits: (body: object, header?: object) => Promise<object>;
    authenticateAtmPin: (body: object, header?: object) => Promise<object>;
    cardType: (body: object, header?: object) => Promise<object>;
    cardRequest: (body: object, header?: object) => Promise<object>;
    bankToBankTransfers: (body: object, header?: object) => Promise<object>;
    bankToBankInternalTransfers: (body: object, header?: object) => Promise<object>;
    internalTransfers: (body: object, header?: object) => Promise<object>;
    internalTransferStatus: (body: object, header?: object) => Promise<object>;
    internalTransferDateRange: (body: object, header?: object) => Promise<object>;
    nipTransfers: (body: object, header?: object) => Promise<object>;
    nipTransfersDateRange: (body: object, header?: object) => Promise<object>;
    nipCharge: (body: object, header?: object) => Promise<object>;
    nipBanks: (body: object, header?: object) => Promise<object>;
    nipName: (body: object, header?: object) => Promise<object>;
    nipStatus: (body: object, header?: object) => Promise<object>;
    nibssStatus: (body: object, header?: object) => Promise<object>;
    walletBalance: (body: object, header?: object) => Promise<object>;
    createNewWallet: (body: object, header?: object) => Promise<object>;
    walletStatus: (body: object, header?: object) => Promise<object>;
    validateCode: (body: object, header?: object) => Promise<object>;
}
