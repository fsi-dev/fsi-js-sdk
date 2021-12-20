import SuperAgent from "./SuperAgent";
import Biller from "./Biller";

export default class Baxi {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*SuperAgent*/
    requery = (body: object, header: object) => { return SuperAgent.requery(this.secretKey, body, header) };
    getBalance = (body: object, header: object) => { return SuperAgent.getBalance(this.secretKey, body, header) };
    refreshServices = (body: object, header: object) => { return SuperAgent.refreshServices(this.secretKey, body, header) };
    
    /*Biller*/
    allProviders = (body: object, header?: object) => { return Biller.allProviders(this.secretKey, body, header) };
    listServices = (body: object, header: object) => { return Biller.listServices(this.secretKey, body, header) };
    allCategories = (body: object, header: object) => { return Biller.allCategories(this.secretKey, body, header) };
    servicesCategory = (body: object, header: object) => { return Biller.servicesCategory(this.secretKey, body, header) };

}