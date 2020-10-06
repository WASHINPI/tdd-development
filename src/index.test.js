const mockApp = require('./app');


require('./index')

jest.mock('./app');

describe('index.js -  app entri', () => {

    it('should call the app.listen()',() => {
        expect(mockApp.listen).toHaveBeenCalled()
    })

});


