import * as africasTalkingAirtime from './Airtime';

export default class FlutterWave {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Airtime*/
    sendAirtime = (body: object, header?: object) =>  africasTalkingAirtime.sendAirtime(this.secretKey, body, header);
    

}