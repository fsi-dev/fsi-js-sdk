export default class AfricasTalking {
    secretKey: string;
    constructor(testKey: string);
    sendAirtime: (body: object, header?: object) => Promise<object>;
    getTransactionStatus: (body: object, header?: object) => Promise<object>;
    sendSms: (body: object, header?: object) => Promise<object>;
    generateToken: (body: object, header?: object) => Promise<object>;
    createPremiumSubscription: (body: object, header?: object) => Promise<object>;
    fetchPremiumSubscription: (body: object, header?: object) => Promise<object>;
    deletePremiumSubscription: (body: object, header?: object) => Promise<object>;
    fetchMessage: (body: object, header?: object) => Promise<object>;
    voiceCall: (body: object, header?: object) => Promise<object>;
    queueStatus: (body: object, header?: object) => Promise<object>;
    mediaUpload: (body: object, header?: object) => Promise<object>;
}
