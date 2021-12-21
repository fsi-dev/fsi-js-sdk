import Certificate from "./Certificate";

export default class Axamansard {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Certificates*/
    downloadCertificate = (body: object, header: object) => { return Certificate.downloadCertificate(this.secretKey, body, header) };
    downloadTravelCertificate = (body: object, header: object, certId: string | number) => { return Certificate.downloadTravelCertificate(this.secretKey, body, header, certId) };
    downloadMotorCertificate = (body: object, header: object) => { return Certificate.downloadMotorCertificate(this.secretKey, body, header) };
    postTravelCertificate = (body: object, header: object) => { return Certificate.postTravelCertificate(this.secretKey, body, header) };
    postMotorCertificate = (body: object, header: object) => { return Certificate.postMotorCertificate(this.secretKey, body, header) };
    
    
}