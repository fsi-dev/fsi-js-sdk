import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'FlutterWave';
const header: object = {
    "Authorization" : "Bearer {SEC_KEY}",
    "Content-Type" : "application/json"
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
        let routeParam = 'Nigeria';

        let response = initializer.getAllBanks(body, header, routeParam);

        it('Request should be delivered and no code error', () => {
            return response.then( res => {
                expect(res.codeError).toBe(false) 
            });
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getBeneficiaries
    describe('Can get Beneficiaries', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };

        let response = initializer.getBeneficiaries(body);

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //fetchBeneficiary
    describe('Can fetchBeneficiary', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };

        let response = initializer.fetchBeneficiary(body);

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //fetchBeneficiary
    describe('Can deleteBeneficiary', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.deleteBeneficiary(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //bills
    describe('Can get bills', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.bills(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //bulkBills
    describe('Can bulkBills', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.bulkBills(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getBillStatus
    describe('Can getBillStatus', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBillStatus(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getBillPayments
    describe('Can getBillPayments', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBillPayments(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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

        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //resolveAccountDetails
    describe('Can resolveAccountDetails', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.resolveAccountDetails(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getBVNDetails
    describe('Can getBVNDetails', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getBVNDetails(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //resolveCardBins
    describe('Can resolveCardBins', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.resolveCardBins(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //rates
    describe('Can rates', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.rates(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getPaymentPlans
    describe('Can getPaymentPlans', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.getPaymentPlans(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //cancelAPaymentPlan
    describe('Can cancelAPaymentPlan', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.cancelAPaymentPlan(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //fetchAPayoutSubAccount
    describe('Can fetchAPayoutSubAccount', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchAPayoutSubAccount(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //fetchPayoutSubAccounts
    describe('Can fetchPayoutSubAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchPayoutSubAccounts(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //updatePayoutSubAccounts
    describe('Can updatePayoutSubAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.updatePayoutSubAccounts(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //fetchStaticVirtualAccounts
    describe('Can fetchStaticVirtualAccounts', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };
        let response = initializer.fetchStaticVirtualAccounts(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });

    //getSubAccounts
    describe('Can getSubAccounts', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getSubAccounts(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getTransactionFee
    describe('Can getTransactionFee', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransactionFee(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //resendTransactionWebhook
    describe('Can resendTransactionWebhook', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.resendTransactionWebhook(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //initiateTransactionRefund
    describe('Can initiateTransactionRefund', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.initiateTransactionRefund(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getTransactionRefund
    describe('Can getTransactionRefund', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransactionRefund(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //verifyTransaction
    describe('Can verifyTransaction', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.verifyTransaction(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //viewTransactionTimeline
    describe('Can viewTransactionTimeline', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.viewTransactionTimeline(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getAllRefunds
    describe('Can getAllRefunds', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllRefunds(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //retryTransfer
    describe('Can retryTransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.retryTransfer(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //createBulkTransfer
    describe('Can createBulkTransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.createBulkTransfer(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getTransferFee
    describe('Can getTransferFee', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getTransferFee(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getAllTransfers
    describe('Can getAllTransfers', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllTransfers(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getATransfer
    describe('Can getATransfer', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getATransfer(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getATransferRetry
    describe('Can getATransferRetry', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getATransferRetry(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //checkTransferRates
    describe('Can checkTransferRates', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.checkTransferRates(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    //getAllVirtualCards
    describe('Can getAllVirtualCards', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };
        let response = initializer.getAllVirtualCards(body);
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
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
        it('Request should be delivered and no code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })
    });
    
    