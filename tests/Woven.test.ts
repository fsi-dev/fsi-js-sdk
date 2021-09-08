import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'EcoBank';
const header: object = {
    "Ocp-Apim-Subscription-Key": 't',
    "Ocp-Apim-Trace": true,
    ipval: 0,
    requestId: '0aa41a6a-1012-43f9-a95d-606b35780651',
    'api-secret': "Bearer sdkkfllroodmmdl"
};

let initializer = Fsi(testKey, provider);

/* Virtual accounts */

    //createVNubanAndCustomer
    describe('create Virtual Account & Customer', () => {
        let body: object = {
            customer_reference:"Florine74",
            name:"Lori Abbott",
            email:"jones_adelaide@mail.com",
            mobile_number:"08012345678",
            expires_on:"2021-11-01",
            use_frequency:"5",
            min_amount:100,max_amount:12000,callback_url:"https://requesturl.com",
            destination_nuban:"",
            meta_data:{somedatakey:"somedatavalue"}
            };

        let response = initializer.createVNubanAndCustomer(body, header);

        it('Should not have code error', () => {
            return response.then( res => {
                expect(res.codeError).toBe(false)
            });
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //createVNubanForExisitingCustomer
    describe('create Virtual Account for Existing Customer', () => {
        let body: object = {
                customer_reference: "Pasdclde15",

                expires_on: "2021-11-01",
                use_frequency: "5",
                min_amount: 100,
                max_amount: 12000,
                callback_url: "https://requesturl.com",
                destination_nuban: ""
            };

        let response = initializer.createVNubanForExisitingCustomer(body, header);

        it('Should not have code error', () => {
            return response.then( res => {
                expect(res.codeError).toBe(false)
            });
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //editVAccount
    describe('Can edit VAccount', () => {
        let body: object = {
            expires_on:"2021-11-01", 
            use_frequency:"5", 
            min_amount:2000, 
            max_amount:12000,  
            callback_url:"http://callbackurl.com", 
            meta_data:{"somedatakey":"somedatavalue"}, 
            destination_nuban:"0427521260"  
            };

        let response = initializer.editVAccount(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //List Virtual Accounts
    describe('List Virtual Accounts', () => {
        let body: object = {
            page: 1,
            from: '2010-08-14 13:48',
            to: '2020-01-14 13:48',
            status: 'ACTIVE',
            account_reference: 'customer-001',
        };

        let response = initializer.listVirtualAccounts(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //Lookup Virtual Account
    describe('Can lookup VAccount', () => {
        let body: object = {};
        let routeParam: string = '4001549179'

        let response = initializer.lookUpVAccount(body, header, routeParam);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    // getVNubanTransactions
    describe('Can get VNuban transactions', () => {
        let body: object = {
            account_reference:"customer-002"
        };

        let response = initializer.getVNubanTransactions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });

    
/* Transactions */

    // listTransactions
    describe('Transactions: list Transactions', () => {
        let body: object = {
            page: 1,
            from: '2010-08-14 13:48',
            to: '2020-01-14 13:48',
            status: 'ACTIVE',
            unique_reference: 'SPKL100007629691012078221614840477696',
            transaction_type: 'funding',
            amount: 1000,
            account_reference: 'wf_kekere_hustles_1616661396',
            settlement_status: 'settled',
            vnuban: '1227140382',
        };

        let response = initializer.listTransactions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });

    // fetchTransactions
    describe('Transactions: fetch Transactions', () => {
        let body: object = {
            unique_reference: 'SPKL100007629691012078221614840477696'
        };

        let response = initializer.fetchTransaction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });

/* Settlement */

    // getAllSettlements
    describe('Settlement: list Transactions', () => {
        let body: object = {
            page: 1,
            from: '2010-08-14 13:48',
            to: '2020-01-14 13:48',
            status: 'ACTIVE',
            unique_reference: 'SPKL100007629691012078221614840477696',
            transaction_type: 'funding',
            amount: 1000,
            account_reference: 'wf_kekere_hustles_1616661396',
            settlement_status: 'settled',
            vnuban: '1227140382',
        };

        let response = initializer.listTransactions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });

    // fetchTransactions
    describe('Settlement: fetch Transactions', () => {
        let body: object = {
            unique_reference: 'SPKL100007629691012078221614840477696'
        };

        let response = initializer.fetchTransaction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });