import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'RelianceHMO';
const header: object = {
        ContentType: "application/json"
    };

let initializer = Fsi(testKey, provider);

/* Plans */

    //getPlans
    describe('Can getPlans', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let response = initializer.getPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    //signupCompany
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

    //signupIndividual
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

    //signupEnrollees
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

    //renewCompanySubscription
    describe('Can renewCompanySubscription', () => {
        let body: object = {
            appId: "string",
            appToken: "string"
        };

        let company_code = '0032';

        let response = initializer.renewCompanySubscription(body, body, company_code);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });