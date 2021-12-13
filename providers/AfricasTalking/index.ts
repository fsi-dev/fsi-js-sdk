import * as africasTalkingAirtime from './Airtime';
import * as africasTalkingSms from "./Sms";
import * as africasTalkingVoice from "./Voice";

export default class AfricasTalking {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Airtime*/
    sendAirtime = (body: object, header?: object) =>  africasTalkingAirtime.sendAirtime(this.secretKey, body, header) ;
    // getTransactionStatus = (body: object, header?: object) =>  africasTalkingAirtime.transactionStatus(this.secretKey, body, header) ;

    /*Sms*/
    sendSms = (body: object, header?: object) =>  africasTalkingSms.sendSms(this.secretKey, body, header) ;
    generateToken = (body: object, header?: object) =>  africasTalkingSms.generateToken(this.secretKey, body, header) ;
    createPremiumSubscription = (body: object, header?: object) =>  africasTalkingSms.createPremiumSubscription(this.secretKey, body, header) ;
    fetchPremiumSubscription = (body: object, header?: object) =>  africasTalkingSms.fetchPremiumSubscriptions(this.secretKey, body, header) ;
    deletePremiumSubscription = (body: object, header?: object) =>  africasTalkingSms.deletePremiumSubscription(this.secretKey, body, header) ;
    fetchMessage = (body: object, header?: object) =>  africasTalkingSms.fetchMessage(this.secretKey, body, header) ;

    /*Voice*/
    voiceCall = (body: object, header?: object) =>  africasTalkingVoice.voiceCall(this.secretKey, body, header) ;
    queueStatus = (body: object, header?:object) =>  africasTalkingVoice.queueStatus(this.secretKey, body, header) ;
    mediaUpload = (body: object, header?: object) =>  africasTalkingVoice.mediaUpload(this.secretKey, body, header) ;

}
