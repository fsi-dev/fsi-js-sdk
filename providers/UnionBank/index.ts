import Union from "./Union";

export default class UnionBank {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    generateAccessToken = (body: object, header: object) =>  Union.generateAccessToken(this.secretKey, body, header) ;
    accountEnquiry = (body: object, header: object) =>  Union.accountEnquiry(this.secretKey, body, header) ;
    customerEnquiry = (body: object, header: object) =>  Union.customerEnquiry(this.secretKey, body, header) ;
    customerAccountEnquiry = (body: object, header: object) =>  Union.customerAccountEnquiry(this.secretKey, body, header) ;
    changeUserCredentials = (body: object, header: object) =>  Union.changeUserCredentials(this.secretKey, body, header) ;
}