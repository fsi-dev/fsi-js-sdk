import Fsi from '../index';
// const Fsi = require('../index')

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider = 'AfricasTalking';

let initializer = Fsi(testKey, provider);

/* Airtime */

    //sendAirtime
    describe('Can send airtime successfully', () => {
        const airtimeBody = {
            username : "sandbox",
            recipients: [
                {
                    phoneNumber: "+2348120534617",
                    amount: "100"
                },
                {
                    phoneNumber: "2348120534617",
                    amount: "200"
                }
            ]
        };

        let response = initializer.sendAirtime(airtimeBody);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

    //getTransaction
    describe('Can get transaction status successfully', () => {
        let params = {
            username: 'sandbox',
            transactionId: '1234'
        };
        let response = initializer.getTransactionStatus(params);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status should be success', () => {
            return response.then( res => expect(res.data.status).toBe('success'));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

/* Sms */
    // sendSms
    describe('Can send sms', () => {
        let body = {
            username: "sandbox",
            to: "+2348120534617",
            message: "test sms"
        };
        let expResObject = { SMSMessageData: {}};

        let response = initializer.sendSms(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status contain SMSMessageData', () => {
            return response.then( res => expect(res.data).toMatchObject(expResObject));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

    // createPremiumSubscription
    describe('Can create premiun subscription', () => {
        let body = {
            username: "sandbox",
            phoneNumber: "2349096651299",
            shortCode: "1234",
            keyword: "branding",
            checkoutToken: "kallkmalfef8"
        };

        let response = initializer.createPremiumSubscription(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status should be success', () => {
            return response.then( res => expect(res.data.status).toBe('Success'));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

    // fetch message
    describe('Can fetch message successfully', () => {
        let body = { username: "sandbox"};
        let expResObject = [{ SMSMessageData: {}}];

        let response = initializer.fetchMessage(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status contain SMSMessageData', () => {
            return response.then( res => expect(res.data).toMatchObject(expResObject));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    // fetch premium subscription
    describe('Can fetch premium subscription successfully', () => {
        let body = {
            username: "sandbox",
            shortCode: "1234",
            keyword: "slander"
        };
        let expResObject = { responses: {}};

        let response = initializer.fetchPremiumSubscription(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status contain SMSMessageData', () => {
            return response.then( res => expect(res.data).toMatchObject(expResObject));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

    // delete premium
    describe('Can delete premium successfully', () => {
        let body = {
            username: "sandbox",
            phoneNumber: "2349096651299",
            shortCode: "1234",
            keyword: "feed",
        };

        let response = initializer.deletePremiumSubscription(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status should be success', () => {
            return response.then( res => expect(res.data.status).toBe('Success'));
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200));
        })
    });

/* Voice */
    // voice call
    describe('Can make voice call', () => {
        let body = {
            username: "sandbox",
            from: "+2349096651299",
            to: "+2348120534617, +2349057969601"        
        };

        let response = initializer.voiceCall(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Should not contain error message', () => {
            return response.then( res => expect(res.data.errorMessage).toBe('None'));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

    // queue status
    describe('Can queue status successfully', () => {
        let body = {
            username: "sandbox",
            phoneNumbers: "+2348120534617, +2349057969601"        
        };

        let response = initializer.queueStatus(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status should be success', () => {
            return response.then( res => expect(res.data.status).toBe('Success'));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

    // media upload
    describe('Can upload media successfully', () => {
        let body = {
            username: "sandbox",
            url: "https://fsi-core-dev.inits.dev/api"        
        };

        let response = initializer.mediaUpload(body);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false));
        })

        it('Status should be success', () => {
            return response.then( res => expect(res.data.status).toBe('Success'));
        })

        it('Should return 201 status code', () => {
            return response.then( res => expect(res.status).toBe(201));
        })
    });

