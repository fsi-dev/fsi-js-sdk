import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'Baxi';
const header: object = {
        ContentType: "application/json"
    };

let initializer = Fsi(testKey, provider);

/* SuperAgent */

    describe('Can requery', () => {
        let body: object = {};

        let response = initializer.requery(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get Balance', () => {
        let body: object = {};

        let response = initializer.getBalance(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can refresh Services', () => {
        let body: object = {};

        let response = initializer.refreshServices(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* Biller */

    describe('Can get all Providers', () => {
        let body: object = {};

        let response = initializer.allProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can list services', () => {
        let body: object = {};

        let response = initializer.listServices(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get all categories', () => {
        let body: object = {};

        let response = initializer.allCategories(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get all services category', () => {
        let body: object = {};

        let response = initializer.servicesCategory(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });