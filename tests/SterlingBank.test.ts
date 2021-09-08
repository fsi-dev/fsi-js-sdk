import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'EcoBank';
const header: object = {
    "Ocp-Apim-Subscription-Key": 't',
    "Ocp-Apim-Trace": true,
    ipval: 0,
    Appid: true,
    Authorization: "Bearer sdkkfllroodmmdl"
};

let initializer = Fsi(testKey, provider);


    //interbankNameEnquiry
    describe('get interbank name enquiry', () => {
        let body: object = {
            Referenceid: '01',
            Translocation: '01',
            ToAccount: '0037514056',
            destinationbankcode: '0001',
        };

        let response = initializer.interbankNameEnquiry(body, header);

        it('Should not have code error', () => {
            return response.then( res => {
                expect(res.codeError).toBe(false)
            });
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //interbankTransfer
    describe('Can make interbank transfer', () => {
        let body: object = {
            Referenceid:"0101",
            RequestType:"01",
            Translocation:"0101",
            SessionID:"01",
            FromAccount:"01",
            ToAccount:"01",
            Amount:"01",
            DestinationBankCode:"01",
            NEResponse:"01",
            BenefiName:"01",
            PaymentReference:"01",
            OriginatorAccountName:"01",
            translocation:"01"
        };

        let response = initializer.interbankTransfer(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    //mobileWallet
    describe('Test mobile wallet', () => {
        let body: object = {
            Referenceid:"01",
            RequestType:"0",
            Translocation:"01",
            amt:"01",
            tellerid:"01",
            frmacct:"01",
            toacct:"01",
            exp_code:"01",
            paymentRef:"01",
            remarks:"01"
        };

        let response = initializer.mobileWallet(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })

        it('Should return succcess status of true', () => {
            return response.then( res => expect(res.success).toBe(true));
        })
    });
    
    //getBillersPaymentItems
    describe('Can get billers payment items', () => {
        let body: object = {
            Referenceid: '01',
            RequestType: '01',
            Translocation: '01',
            Bvn: '1937247024021',
            billerid: '01',
        };

        let response = initializer.getBillersPaymentItems(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    // getBillersISW
    describe('Can create Merchant Qr', () => {
        let body: object = {
            headerRequest: {
                requestId: "",
                affiliateCode: "EGH",
                requestToken: "/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV",
                sourceCode: "ECOBANK_QR_API",
                sourceChannelId: "KANZAN",
                requestType:"CREATE_MERCHANT"
            },
            merchantAddress: "123ERT",
            merchantName:"UNIFIED SHOPPING CENTER",
            accountNumber: "02002233444",
            terminalName: "UNIFIED KIDS SHOPPING ARCADE",
            mobileNumber: "0245293945",
            email: "freemanst@gmail.com",
            area: "Ridge",
            city: "Ridge",
            referralCode: "123456",
            mcc: "0000",
            dynamicQr:"Y",
            callBackUrl:"http://koala.php",
            secure_hash:"7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855"
        };

        let response = initializer.getBillersISW(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200)); 
        })
    });

    
