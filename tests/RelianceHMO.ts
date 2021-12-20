import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'RelianceHMO';
const header: object = {
        ContentType: "application/json"
    };

let initializer = Fsi(testKey, provider);

/* Plans */

    describe('Can getPlans', () => {
        let body: object = {};

        let response = initializer.getPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can signupCompany', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.signupCompany(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can signupIndividual', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.signupIndividual(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can signupEnrollees', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.signupEnrollees(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can renewCompanySubscription', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let company_code = '0032';

        let response = initializer.renewCompanySubscription(body, header, company_code);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can renewIndividualSubscription', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.renewIndividualSubscription(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getProviders', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.getProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can states', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.states(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can benefits', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.benefits(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTitles', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.getTitles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getOccupation', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.getOccupation(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can maritalStatus', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.maritalStatus(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

//Wallet
    describe('Can walletBalance', () => {
        let body: object = { };

        let response = initializer.walletBalance(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can fundWallet', () => {
        let body: object = { };

        let response = initializer.fundWallet(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can allActiveEnrollees', () => {
        let body: object = { };

        let response = initializer.allActiveEnrollees(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getSingleEnrollee', () => {
        let body: object = { };

        let response = initializer.getSingleEnrollee(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

//Profiles
    describe('Can uploadFile', () => {
        let body: object = { };

        let response = initializer.uploadFile(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can completeEnrolleeProfile', () => {
        let body: object = { };

        let response = initializer.completeEnrolleeProfile(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get consultations', () => {
        let body: object = { };

        let response = initializer.consultations(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can enrolleesValidation', () => {
        let body: object = { };

        let response = initializer.enrolleesValidation(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    })