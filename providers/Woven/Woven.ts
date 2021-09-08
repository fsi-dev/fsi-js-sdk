import * as wovenFinanceApis from "./Index";

export default class Woven {
    secretKey: string;

    constructor(key: string){
        this.secretKey = key;
    }

    createVNubanAndCustomer = (body: object, header?: object) => { return wovenFinanceApis.createVNubanAndCustomer(this.secretKey, body, header) };
    createVNubanForCustomer = (body: object, header?: object) => { return wovenFinanceApis.createVNubanForCustomer(this.secretKey, body, header) };
    editVAccount = (body: object, header?: object) => { return wovenFinanceApis.editVAccount(this.secretKey, body, header) };
    fetchVirtualAccounts = (body: object, header?: object) => { return wovenFinanceApis.fetchVirtualAccounts(this.secretKey, body, header) };
    lookUpVAccount = (body: object, header?: object) => { return wovenFinanceApis.lookUpVAccount(this.secretKey, body, header) };
    getVNubanTransactions = (body: object, header?: object) => { return wovenFinanceApis.getVNubanTransactions(this.secretKey, body, header) };

}