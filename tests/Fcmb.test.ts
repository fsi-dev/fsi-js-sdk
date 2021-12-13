import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'FCMB';
const header: object = {
   "x-ibm-client-id": 'f',
};

let initializer = Fsi(testKey, provider);

/* Authentication */

    //validateByCustomerId
    describe('Can validate customer id', () => {
        let body: object = {
            tokenCode: "string",
            customerId: "string",
            appId: "string",
            appToken: "string"
        };

        let response = initializer.validateByCustomerId(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //Last Four Digits
    describe('Can authenticate last four digit', () => {
        let body: object = {
            lastFourDigits: "4151",
            accountNumber: "4303769016"
        };

        let response = initializer.authenticateLastFourDigits(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //AtmPin
    describe('Can mauthenticate atm pin', () => {
        let body: object = {
            pan: "Tcx+B7109UY+sSooND8ZrFm4OMuFzMF6dzHQ5lbt9r8=",
            atmPin: "C1cRxRUSRkArWinTxk27pw==",
            accountNumber: "1715308017",
            expiryDate: "2004"
            };

        let response = initializer.authenticateAtmPin(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

/* Card */

    //cardType
    describe('Card Type', () => {
        let body: object = {
            cardName: "string"
        };

        let response = initializer.cardType(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //card request
    describe('Card request', () => {
        let body: object = {
            reasonRequestId: "01",
            cardProductId: "1001",
            deliveryTypeId: "2001",
            accountNumber: "any:string",
            accountName: "any:string",
            branchSOL: "any:string"
        };

        let response = initializer.cardRequest(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

/* Payment */

    //B2B Transfers
    describe('Bank to bank transfer', () => {
        let body: object = {
            nameEnquiryRef: "999214190218121217000001177403",
            destinationInstitutionCode: "999063",
            channelCode: "2",
            beneficiaryAccountNumber: "0000000000",
            beneficiaryAccountName: "OBIOHA O. GODDY",
            beneficiaryBankVerificationNumber: "1",
            beneficiaryKYCLevel: "3",
            originatorAccountName: "OKUBOTE IDOWU OLUWAKEMI",
            originatorAccountNumber: "0000000002",
            transactionNarration: "Transfer ifo OKUBOTE",
            paymentReference: "12345",
            amount: "100.1",
            traceId: "12345",
            chargeAmount: "52.59",
            platformType: "ESB"
        };

        let response = initializer.bankToBankTransfers(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //bankToBankInternalTransfers
    describe('Bank To Bank Internal Transfers', () => {
        let body: object = {
            debitAccountNo: "0000000000",
            creditAccountNo: "0000000000",
            amount: 19,
            narration: "Test Transfer",
            remark: "Test",
            reportCode: "Transfer"
        };

        let response = initializer.bankToBankInternalTransfers(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //internal Transfers
    describe('Internal Transfers', () => {
        let body: object = {};

        let response = initializer.internalTransfers(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //internal Transfers status
    describe('Internal Transfer status', () => {
        let body: object = {
            stan: 'TQKMN232'
        };

        let response = initializer.internalTransferStatus(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //Internal Transfer DateRange
    describe('Internal Transfer date range', () => {
        let body: object = {
            startDate: '09-03-2021',
            endDate: '09-07-2021',
            pageNum: 3,
            pageSize: 10
        };

        let response = initializer.internalTransferDateRange(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //NIP Transfers
    describe('NIP Transfer', () => {
        let body: object = {
            nameEnquiryRef: "999214190218121217000001177403",
            destinationInstitutionCode: "999063",
            channelCode: "2",
            beneficiaryAccountNumber: "0000000000",
            beneficiaryAccountName: "OBIOHA O. GODDY",
            beneficiaryBankVerificationNumber: "1",
            beneficiaryKYCLevel: "3",
            originatorAccountName: "OKUBOTE IDOWU OLUWAKEMI",
            originatorAccountNumber: "0000000000",
            transactionNarration: "Esb Test",
            paymentReference: "12345",
            amount: "100.1",
            traceId: "12345",
            chargeAmount: "52.59",
            platformType: "ESB"
        };

        let response = initializer.nipTransfers(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //NIP Transfer date range
    describe('NIP Transfer date range', () => {
        let body: object = {
            startDate: '09-03-2021',
            endDate: '09-07-2021',
            pageNum: 3,
            pageSize: 10
        };

        let response = initializer.nipTransfersDateRange(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //NIP charge
    describe('NIP charge', () => {
        let body: object = {
            amount: 1.23
        };

        let response = initializer.nipCharge(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //NIP banks
    describe('NIP banks', () => {
        let body: object = {};

        let response = initializer.nipBanks(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //NIP name
    describe('NIP name', () => {
        let body: object = {
            destinationInstitutionCode: "058",
            channelCode: "01",
            accountNumber: "0148037894"
        };

        let response = initializer.nipName(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //NIP status
    describe('NIP status', () => {
        let body: object = {
            traceid: "QAEFWFFDS123",
        };

        let response = initializer.nipStatus(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

/*wallet*/

    //Create New Wallet
    describe('Create New Wallet', () => {
        let body: object = {
            AccountNumber: "0148037892",
        };

        let response = initializer.createNewWallet(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //wallet balance
    describe('Get wallet balance', () => {
        let body: object = {
            customerId: "string",
            schemeCode: "string",
            walletStatus: true,
            createdBy: "tunde",
            accountName: "ebuka"
        };

        let response = initializer.walletBalance(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //Wallet Status
    describe('Get wallet status', () => {
        let body: object = {
            internalAccountNumber: "0102033119",
            status: true,
            modifiedBy: "tunde"
        };

        let response = initializer.walletStatus(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });
    
    //Validate Code
    describe('wallet: Validate code', () => {
        let body: object = {
            code: "0102033119"
        };

        let response = initializer.validateCode(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });