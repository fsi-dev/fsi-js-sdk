export default class AfricasTalking {
    secretKey: string;
    constructor(testKey: string);
    sendAirtime: (body: object, header?: object | undefined) => any;
    africasTalkingGetTransaction: (body: object, header?: object | undefined) => any;
}
