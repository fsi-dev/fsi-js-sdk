export default class Woven {
    secretKey: string;
    constructor(key: string);
    createVNubanAndCustomer: (body: object, header?: object) => Promise<object>;
    createVNubanForCustomer: (body: object, header?: object) => Promise<object>;
    editVAccount: (body: object, header?: object) => Promise<object>;
    fetchVirtualAccounts: (body: object, header?: object) => Promise<object>;
    lookUpVAccount: (body: object, header?: object) => Promise<object>;
    getVNubanTransactions: (body: object, header?: object) => Promise<object>;
}
