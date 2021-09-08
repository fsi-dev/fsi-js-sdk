export default class AfricasTalking {
    secretKey: string;
    constructor(testKey: string);
    sendAirtime: (body: object, header?: object | undefined) => Promise<object>;
    getTransaction: (body: object, header?: object | undefined) => Promise<object>;
    sendSms: (body: object, header?: object | undefined) => Promise<object>;
    generateToken: (body: object, header?: object | undefined) => Promise<object>;
    createSubscription: (body: object, header?: object | undefined) => Promise<object>;
    fetchSubscriptions: (body: object, header?: object | undefined) => Promise<object>;
    deleteSubscription: (body: object, header?: object | undefined) => Promise<object>;
    fetchMessage: (body: object, header?: object | undefined) => Promise<object>;
    voiceCall: (body: object, header?: object | undefined) => Promise<object>;
    queueStatus: (body: object, header?: object | undefined) => Promise<object>;
    mediaUpload: (body: object, header?: object | undefined) => Promise<object>;
}
