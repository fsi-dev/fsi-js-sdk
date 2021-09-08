import * as wovenFinanceApis from "./VirtualAccount";
import * as wovenTransactions from "./Transactions";
import * as wovenSettlements from "./Settlements";

export default class Woven {
    secretKey: string;

    constructor(key: string){
        this.secretKey = key;
    }

    // Virtual accounts
    createVNubanAndCustomer = (body: object, header?: object) => { return wovenFinanceApis.createVNubanAndCustomer(this.secretKey, body, header) };
    createVNubanForExisitingCustomer = (body: object, header?: object) => { return wovenFinanceApis.createVNubanForCustomer(this.secretKey, body, header) };
    editVAccount = (body: object, header?: object) => { return wovenFinanceApis.editVAccount(this.secretKey, body, header) };
    listVirtualAccounts = (body: object, header?: object) => { return wovenFinanceApis.fetchVirtualAccounts(this.secretKey, body, header) };
    lookUpVAccount = (body: object, header?: object, routeParam?: string ) => { return wovenFinanceApis.lookUpVAccount(this.secretKey, body, header, routeParam) };
    getVNubanTransactions = (body: object, header?: object) => { return wovenFinanceApis.getVNubanTransactions(this.secretKey, body, header) };
    
    // Transactions
    listTransactions = (body: object, header?: object) => { return wovenTransactions.listTransactions(this.secretKey, body, header) };
    fetchTransaction = (body: object, header?: object) => { return wovenTransactions.fetchTransactions(this.secretKey, body, header) };
    
    // Settlements
    getAllSettlements = (body: object, header?: object) => { return wovenSettlements.getAllSettlements(this.secretKey, body, header) };
    getSettlementBreakdown = (body: object, header?: object, routeParam?: string) => { return wovenSettlements.getSettlementBreakdown(this.secretKey, body, header, routeParam) };
}