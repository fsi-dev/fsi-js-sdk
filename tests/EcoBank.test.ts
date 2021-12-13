import Fsi from '../index';


const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'EcoBank';
const header: object = {
    Origin: 'developer.ecobank.com',
    Authorization: "Bearer sdkkfllroodmmdl"
};

let initializer = Fsi(testKey, provider);

/* Corporate API */

    //generateToken
    describe('Can generate token', () => {
        let body: object = {
            userId: "developer1@unifiedworks.com",
            password: "$2a$10$Wmame.Lh1FJDCB4JJIxtx.3SZT0dP2XlQWgj9Q5UAGcDLp!@3344"
        };

        let response = initializer.generateToken(body, header);

        it('Should not have code error', () => {
            return response.then( res => {
                expect(res.codeError).toBe(false)
            });
        })

    });

    //cardPayment
    describe('Can make card payment', () => {
        let body: object = {
            paymentDetails: {
                requestId: "4466",
                productCode:"GMT112",
                amount: "50035",
                currency: "GBP",
                locale: "en_AU",
                orderInfo: "255s353",
                returnUrl: "https://unifiedcallbacks.com/corporateclbkservice/callback/qr"
            },
            merchantDetails: {
                accessCode: "79742570",
                merchantID: "ETZ001",
                secureSecret: "sdsffd"
            },
            secureHash:"7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855"
        };

        let response = initializer.cardPayment(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    //momoPayment
    describe('Can make momo payment', () => {
        let body: object = {
                affiliateCode: "EGH",
                telco: "MTN",
                channel: "UNIFIED",
                token: "SBRC/3MJMGmz1WuHiRpmikk6SWgBj/Tt",
                content: {
                    countryCode: "GH",
                    transId: "1ER9P00OT",
                    productCode:"1132",
                    senderName: "ben",
                    senderAccountNo: "233242006671",
                    senderPhoneNumber: "233242006671",
                    branch: "001",
                    transRef: "REF671700057",
                    bankref: "REF6798238",
                    receiverPhoneNumber:"0244296442",
                    receiverFirstName: "Kojo",
                    receiverLastName: "Funds",
                    receiverEmail: "",
                    receiverBank: "6762482201037786",
                    currency: "GHS",
                    amount: "0.01",
                    transDesc: "Wallet Trans",
                    transType: "pull"
                },
                secureHash: "7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855"
            };

        let response = initializer.momoPayment(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })


        // it('Should return succcess status of true', () => {
        //     return response.then( res => expect(res.success).toBe(true));
        // })
    });
    
    //getMcc
    describe('Can get Mcc', () => {
        let body: object = {
            requestId: "123344",
            affiliateCode: "EGH",
            requestToken: "/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV",
            sourceCode: "ECOBANK_QR_API",
            sourceChannelId: "KANZAN",
            requestType: "CREATE_MERCHANT"
        };

        let response = initializer.getMcc(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    // Merchant Qr Creation
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

        let response = initializer.merchantQRCreation(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

    });

    
