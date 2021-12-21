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

/* Services */
    describe('Can get servicesNamefinderQuery', () => {
        let body: object = {};

        let response = initializer.servicesNamefinderQuery(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get airtimeProviders', () => {
        let body: object = {};

        let response = initializer.airtimeProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get airtimeRequest', () => {
        let body: object = {};

        let response = initializer.airtimeRequest(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get dataBundleProviders', () => {
        let body: object = {};

        let response = initializer.airtimeProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get providerBundles', () => {
        let body: object = {};

        let response = initializer.providerBundles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get purchaseDatabundle', () => {
        let body: object = {};

        let response = initializer.purchaseDatabundle(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    //cabletv
    describe('Can get cabletvProviders', () => {
        let body: object = {};

        let response = initializer.cabletvProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get cabletvMultichoiceList', () => {
        let body: object = {};

        let response = initializer.cabletvMultichoiceList(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get cabletvMultichoiceAddons', () => {
        let body: object = {};

        let response = initializer.cabletvMultichoiceAddons(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get cabletvMultichoiceRequest', () => {
        let body: object = {};

        let response = initializer.cabletvMultichoiceRequest(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    // Epin
    describe('Can get epinProviders', () => {
        let body: object = {};

        let response = initializer.epinProviders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get epinBundles', () => {
        let body: object = {};

        let response = initializer.epinBundles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get epinRequest', () => {
        let body: object = {};

        let response = initializer.epinRequest(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    // Electricity
    describe('Can get electricityBillers', () => {
        let body: object = {};

        let response = initializer.electricityBillers(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get verifyElectricity', () => {
        let body: object = {};

        let response = initializer.verifyElectricity(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can get purchaseElectricity', () => {
        let body: object = {};

        let response = initializer.purchaseElectricity(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
