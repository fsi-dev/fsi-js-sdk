import SuperAgent from "./SuperAgent";
import Biller from "./Biller";
import Services from "./Services";

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
    
    /*Services*/
    servicesNamefinderQuery = (body: object, header?: object) => { return Services.servicesNamefinderQuery(this.secretKey, body, header) };
    airtimeProviders = (body: object, header: object) => { return Services.airtimeProviders(this.secretKey, body, header) };
    airtimeRequest = (body: object, header: object) => { return Services.airtimeRequest(this.secretKey, body, header) };
    
    dataBundleProviders = (body: object, header: object) => { return Services.dataBundleProviders(this.secretKey, body, header) };
    providerBundles = (body: object, header: object) => { return Services.providerBundles(this.secretKey, body, header) };
    purchaseDatabundle = (body: object, header: object) => { return Services.purchaseDatabundle(this.secretKey, body, header) };
    
    cabletvProviders = (body: object, header: object) => { return Services.cabletvProviders(this.secretKey, body, header) };
    cabletvMultichoiceList = (body: object, header: object) => { return Services.cabletvMultichoiceList(this.secretKey, body, header) };
    cabletvMultichoiceAddons = (body: object, header: object) => { return Services.cabletvMultichoiceAddons(this.secretKey, body, header) };
    cabletvMultichoiceRequest = (body: object, header: object) => { return Services.cabletvMultichoiceRequest(this.secretKey, body, header) };
    
    epinProviders = (body: object, header: object) => { return Services.epinProviders(this.secretKey, body, header) };
    epinBundles = (body: object, header: object) => { return Services.epinBundles(this.secretKey, body, header) };
    epinRequest = (body: object, header: object) => { return Services.epinRequest(this.secretKey, body, header) };
    
    electricityBillers = (body: object, header: object) => { return Services.electricityBillers(this.secretKey, body, header) };
    verifyElectricity = (body: object, header: object) => { return Services.verifyElectricity(this.secretKey, body, header) };
    purchaseElectricity = (body: object, header: object) => { return Services.purchaseElectricity(this.secretKey, body, header) };

}