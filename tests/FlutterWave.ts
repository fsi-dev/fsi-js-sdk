import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'FlutterWave';
const header: object = {
   "x-ibm-client-id": 'f',
};

let initializer = Fsi(testKey, provider);

/* Banks */

    //getAllBanks
    describe('Can getAllBanks', () => {
        let body: object = {
            tokenCode: "string",
            customerId: "string",
            appId: "string",
            appToken: "string"
        };
        let routeParam = 1;

        let response = initializer.getAllBanks(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getBankBranches
    describe('Can getBankBranches', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;

        let response = initializer.getBankBranches(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
/* Otp */

    //otp
    describe('Can generate otp', () => {
        let body: object = {
            tokenCode: "string",
            customerId: "string",
            appId: "string",
            appToken: "string"
        };
        let routeParam = 1;

        let response = initializer.getAllBanks(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //validateOTP
    describe('Can validate OTP', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;

        let response = initializer.validateOTP(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Beneficiaries */

    //createBeneficiary
    describe('Can create beneficiary', () => {
        let body: object = {
            tokenCode: "string",
            customerId: "string",
            appId: "string",
            appToken: "string"
        };

        let response = initializer.createBeneficiary(body);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getBeneficiaries
    describe('Can get Beneficiaries', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };

        let response = initializer.getBeneficiaries(body);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchBeneficiary
    describe('Can fetchBeneficiary', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };

        let response = initializer.fetchBeneficiary(body);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchBeneficiary
    describe('Can deleteBeneficiary', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.deleteBeneficiary(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
/* Bills */

    //getBillCategories
    describe('Can getBillCategories', () => {
        let body: object = {
            tokenCode: "string",
            appToken: "string"
        };
        let response = initializer.getBillCategories(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //validateBillService
    describe('Can validateBillService', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.validateBillService(body, null, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //bills
    describe('Can get bills', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.bills(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //bulkBills
    describe('Can bulkBills', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.bulkBills(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getBillStatus
    describe('Can getBillStatus', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBillStatus(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getBillPayments
    describe('Can getBillPayments', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBillPayments(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* ChargeBacks */

    //listAllChargeBacks
    describe('Can listAllChargeBacks', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.listAllChargeBacks(body);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //update
    describe('Can update chargebacks', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;

        let response = initializer.update(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Charges */
    //capturePreAuthCharge
    describe('Can capturePreAuthCharge', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.capturePreAuthCharge(body);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //voidPreAuthCharge
    describe('Can voidPreAuthCharge', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;

        let response = initializer.voidPreAuthCharge(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //refundPreAuthCharge
    describe('Can refundPreAuthCharge', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.refundPreAuthCharge(body, header, routeParam);

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
/* Misc */
    //getWalletBalance
    describe('Can getWalletBalance', () => {
        let body: object = {
            tokenCode: "string",
            appToken: "string"
        };
        let response = initializer.getWalletBalance(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getWalletBalancePerCurrency
    describe('Can getWalletBalancePerCurrency', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.getWalletBalancePerCurrency(body, null, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //resolveAccountDetails
    describe('Can resolveAccountDetails', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.resolveAccountDetails(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getBVNDetails
    describe('Can getBVNDetails', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBVNDetails(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //resolveCardBins
    describe('Can resolveCardBins', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.resolveCardBins(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //rates
    describe('Can rates', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.rates(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* PaymentPlans */
    //createPaymentPlan
    describe('Can createPaymentPlan', () => {
        let body: object = {
            tokenCode: "string",
            appToken: "string"
        };
        let response = initializer.createPaymentPlan(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getPaymentPlans
    describe('Can getPaymentPlans', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getPaymentPlans(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getAPaymentPlan
    describe('Can getAPaymentPlan', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.getAPaymentPlan(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //updateAPaymentPlan
    describe('Can updateAPaymentPlan', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.updateAPaymentPlan(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //cancelAPaymentPlan
    describe('Can cancelAPaymentPlan', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.cancelAPaymentPlan(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* PayoutSubAccount */
    //createAPayoutSubAccount
    describe('Can createAPayoutSubAccount', () => {
        let body: object = {
            tokenCode: "string",
            appToken: "string"
        };
        let response = initializer.createAPayoutSubAccount(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchAPayoutSubAccount
    describe('Can fetchAPayoutSubAccount', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchAPayoutSubAccount(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchPayoutSubAccounts
    describe('Can fetchPayoutSubAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchPayoutSubAccounts(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //updatePayoutSubAccounts
    describe('Can updatePayoutSubAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.updatePayoutSubAccounts(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchTransactions
    describe('Can fetchTransactions', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 2;
        let response = initializer.fetchTransactions(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchBalance
    describe('Can fetchBalance', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 2;
        let response = initializer.fetchBalance(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchStaticVirtualAccounts
    describe('Can fetchStaticVirtualAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchStaticVirtualAccounts(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* RemitaPayments */
    //getBillPaymentAgencies
    describe('Can getBillPaymentAgencies', () => {
        let body: object = {
            tokenCode: "string",
            appToken: "string"
        };
        let response = initializer.getBillPaymentAgencies(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getAgencyProducts
    describe('Can getAgencyProducts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 3;
        let response = initializer.getAgencyProducts(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getProductAmount
    describe('Can getProductAmount', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParams = { id: 1, name: 'name'};
        let response = initializer.getProductAmount(body, header, routeParams);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //createOrder
    describe('Can createOrder', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParams = { id: 1, name: 'name'};
        let response = initializer.createOrder(body, header, routeParams);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //updateOrder
    describe('Can updateOrder', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 4;
        let response = initializer.updateOrder(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Settlements */
    //allSettlements
    describe('Can allSettlements', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.allSettlements(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getASettlement
    describe('Can getASettlement', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let routeParam = 1;
        let response = initializer.getASettlement(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* SubAccounts */
    //createASubAccount
    describe('Can createASubAccount', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.createASubAccount(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //getSubAccounts
    describe('Can getSubAccounts', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getSubAccounts(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //fetchASubAccount
    describe('Can fetchASubAccount', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 3;
        let response = initializer.fetchASubAccount(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //updateASubAccount
    describe('Can updateASubAccount', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 3;
        let response = initializer.updateASubAccount(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //deleteASubAccount
    describe('Can deleteASubAccount', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 3;
        let response = initializer.deleteASubAccount(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Subscriptions */
    //getAll
    describe('Can getAll', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAll(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //cancelSubscription
    describe('Can cancelSubscription', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 3;
        let response = initializer.cancelSubscription(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //activateSubscription
    describe('Can activateSubscription', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 3;
        let response = initializer.activateSubscription(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Transactions */
    //getAllTransactions
    describe('Can getAllTransactions', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllTransactions(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getTransactionFee
    describe('Can getTransactionFee', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransactionFee(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //resendTransactionWebhook
    describe('Can resendTransactionWebhook', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.resendTransactionWebhook(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //initiateTransactionRefund
    describe('Can initiateTransactionRefund', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.initiateTransactionRefund(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getTransactionRefund
    describe('Can getTransactionRefund', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransactionRefund(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //verifyTransaction
    describe('Can verifyTransaction', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.verifyTransaction(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //viewTransactionTimeline
    describe('Can viewTransactionTimeline', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.viewTransactionTimeline(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getAllRefunds
    describe('Can getAllRefunds', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllRefunds(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
/* Transfer */
    //createTransfer
    describe('Can createTransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.createTransfer(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //retryTransfer
    describe('Can retryTransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.retryTransfer(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //createBulkTransfer
    describe('Can createBulkTransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.createBulkTransfer(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getTransferFee
    describe('Can getTransferFee', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransferFee(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getAllTransfers
    describe('Can getAllTransfers', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllTransfers(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getATransfer
    describe('Can getATransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getATransfer(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getATransferRetry
    describe('Can getATransferRetry', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getATransferRetry(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //checkTransferRates
    describe('Can checkTransferRates', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.checkTransferRates(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
/*VirtualCard*/
    //createVirtualCard
    describe('Can createVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.createVirtualCard(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getAllVirtualCards
    describe('Can getAllVirtualCards', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllVirtualCards(body);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getAVirtualCard
    describe('Can getAVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 5;
        let response = initializer.getAVirtualCard(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //fundAVirtualCard
    describe('Can fundAVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 5;
        let response = initializer.fundAVirtualCard(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //terminateAVirtualCard
    describe('Can terminateAVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 5;
        let response = initializer.terminateAVirtualCard(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //getAVirtualCardTransactions
    describe('Can getAVirtualCardTransactions', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 5;
        let response = initializer.getAVirtualCardTransactions(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //withdrawFromAVirtualCard
    describe('Can withdrawFromAVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParam = 5;
        let response = initializer.withdrawFromAVirtualCard(body, header, routeParam);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    //blockOrUnblockVirtualCard
    describe('Can blockOrUnblockVirtualCard', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let routeParams = {id: 1, status_action: 'block'};
        let response = initializer.blockOrUnblockVirtualCard(body, header, routeParams);
        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });
    
    