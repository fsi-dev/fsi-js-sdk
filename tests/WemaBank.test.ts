import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'wemabank';
const header: object = {
        ContentType: "application/json"
    };

let initializer = Fsi(testKey, provider);

/* Account Maintenance */
    describe('Can getAccount', () => {
        let body: object = {};
        let accountNumber: string = '0234567897'; 

        let response = initializer.getAccount(body, header, accountNumber);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getAccountByPhoneNumber', () => {
        let body: object = {};
        let phoneNumber: string = '0705467832'; 

        let response = initializer.getAccountByPhoneNumber(body, header, phoneNumber);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can transactionHistoryV2', () => {
        let body: object = {};

        let response = initializer.transactionHistoryV2(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* ALAT Pay Merchant */
    describe('Can addBusiness', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.addBusiness(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can createMerchant', () => {
        let body: object = {};

        let response = initializer.createMerchant(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can deleteMerchant', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.deleteMerchant(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can deleteBusiness', () => {
        let body: object = {};
        let businessId: string = '234667'; 

        let response = initializer.deleteBusiness(body, header, businessId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getAllMerchants', () => {
        let body: object = {};

        let response = initializer.getAllMerchants(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getBusinessInformation', () => {
        let body: object = {};
        let businessId: string = '234667'; 

        let response = initializer.getBusinessInformation(body, header, businessId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getMerchantInformation', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.getMerchantInformation(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getMerchantBusinessesList', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.getMerchantBusinessesList(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can updateBusiness', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.updateBusiness(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can updateMerchant', () => {
        let body: object = {};
        let merchantId: string = '234667'; 

        let response = initializer.updateMerchant(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/*Account Maintenance*/
    describe('Can getDataPlans', () => {
        let body: object = {};

        let response = initializer.getDataPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can purchaseAirtime', () => {
        let body: object = {};

        let response = initializer.purchaseAirtime(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can purchaseData', () => {
        let body: object = {};

        let response = initializer.purchaseData(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
/*Open Bills Payment*/
    describe('Can getAllBillsAndPackages', () => {
        let body: object = {};

        let response = initializer.getAllBillsAndPackages(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can validateCustomer', () => {
        let body: object = {};

        let response = initializer.validateCustomer(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can payBill', () => {
        let body: object = {};

        let response = initializer.payBill(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/*Alat Bank Transfer*/
    describe('Can getSettlementRecord', () => {
        let body: object = {};

        let response = initializer.getSettlementRecord(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can performBulkSettlement', () => {
        let body: object = {};

        let response = initializer.performBulkSettlement(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can virtualAccount', () => {
        let body: object = {};

        let response = initializer.virtualAccount(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTransactionDetails', () => {
        let body: object = {};
        let transactionId: string|number = 677339;

        let response = initializer.getTransactionDetails(body, header, transactionId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getAllActiveVirtualAccounts', () => {
        let body: object = {};
        let merchantId: string|number = 677339;

        let response = initializer.getAllActiveVirtualAccounts(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getMerchantTransactions', () => {
        let body: object = {};
        let merchantId: string|number = 677339;

        let response = initializer.getMerchantTransactions(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getVirtualAccountName', () => {
        let body: object = {};

        let response = initializer.getVirtualAccountName(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can listenToPaymentTransaction', () => {
        let body: object = {};

        let response = initializer.listenToPaymentTransaction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can transactionNotifications', () => {
        let body: object = {};

        let response = initializer.transactionNotifications(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    
/*Open Bills Payment*/
    describe('Can getSettlementRecordPaymentCard', () => {
        let body: object = {};

        let response = initializer.getSettlementRecordPaymentCard(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can performBulkSettlementAction', () => {
        let body: object = {};

        let response = initializer.performBulkSettlementAction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can initializeCardPayment', () => {
        let body: object = {};

        let response = initializer.initializeCardPayment(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTransactionDetailsPaymentCard', () => {
        let body: object = {};
        let businessId: string = '333940';

        let response = initializer.getTransactionDetailsPaymentCard(body, header, businessId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getMerchantTransactionsPaymentCard', () => {
        let body: object = {};
        let merchantId: string = '78304';

        let response = initializer.getMerchantTransactionsPaymentCard(body, header, merchantId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can authenticateCardPayment', () => {
        let body: object = {};

        let response = initializer.authenticateCardPayment(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can listenToATransaction', () => {
        let body: object = {};

        let response = initializer.listenToATransaction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get transactionCallback', () => {
        let body: object = {};

        let response = initializer.transactionCallback(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/*Crowdfunding*/
    describe('Can profiles', () => {
        let body: object = {};

        let response = initializer.profiles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can authenticate', () => {
        let body: object = {};

        let response = initializer.authenticate(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can changePassword', () => {
        let body: object = {};

        let response = initializer.changePassword(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can confirmChangeUserEmail', () => {
        let body: object = {};

        let response = initializer.confirmChangeUserEmail(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can verifyUsername', () => {
        let body: object = {};

        let response = initializer.verifyUsername(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can verifyEmail', () => {
        let body: object = {};

        let response = initializer.verifyEmail(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can verifyAccount', () => {
        let body: object = {};

        let response = initializer.profiles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can editCorporateDetails', () => {
        let body: object = {};
        let id: string|number = 234;

        let response = initializer.editCorporateDetails(body, header, id);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can changeEmail', () => {
        let body: object = {};

        let response = initializer.changeEmail(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can forgotPassword', () => {
        let body: object = {};

        let response = initializer.forgotPassword(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can getCorporateDetails', () => {
        let body: object = {};
        let id: string|number = 234;

        let response = initializer.getCorporateDetails(body, header, id);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can getProfile', () => {
        let body: object = {};

        let response = initializer.profiles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can getAccountDetails', () => {
        let body: object = {};

        let response = initializer.getAccountDetails(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can personalVerification', () => {
        let body: object = {};

        let response = initializer.personalVerification(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can corporateAccountDetails', () => {
        let body: object = {};

        let response = initializer.corporateAccountDetails(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can corporateAccount', () => {
        let body: object = {};

        let response = initializer.corporateAccount(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can personalAccounts', () => {
        let body: object = {};

        let response = initializer.personalAccounts(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can registerCorporate', () => {
        let body: object = {};

        let response = initializer.registerCorporate(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can registerProfile', () => {
        let body: object = {};

        let response = initializer.registerProfile(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can sendRequest', () => {
        let body: object = {};

        let response = initializer.sendRequest(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can resetAccountPassword', () => {
        let body: object = {};

        let response = initializer.resetAccountPassword(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can updateCorporateManager', () => {
        let body: object = {};

        let response = initializer.updateCorporateManager(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can updatePersonalAccountNumber', () => {
        let body: object = {};

        let response = initializer.updatePersonalAccountNumber(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can verifyOTP', () => {
        let body: object = {};

        let response = initializer.verifyOTP(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    