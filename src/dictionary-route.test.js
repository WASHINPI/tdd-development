const express = require('express');
const request = require('supertest');
const { save } = require('./lib')
const dictionary = require('./dictionary-route');

const app = express();

app.use('/dictionary', dictionary);

jest.mock('./lib',() => ({
    save: jest.fn()
}))

jest.mock('../data/skiTerms.json',() =>  [
    {'term':'aaa', 'defined': "aaaaa"},
    {'term':'bbb', 'defined': "bbbbb"},
    {'term':'ccc', 'defined': "ccccc"}
]);

describe('dictionary.js - ', () => {

    it('GET /dictionary -success', async () => {

        const { body } = await request(app).get('/dictionary');

        expect(body).toEqual([
            {'term':'aaa', 'defined': "aaaaa"},
            {'term':'bbb', 'defined': "bbbbb"},
            {'term':'ccc', 'defined': "ccccc"}
        ])
        
    });

    it('DELETE /dictionary/bbb -success', async () => {

        const { body } = await request(app).delete('/dictionary/bbb');

        expect(body).toEqual({
            status:'success',
            newLength: 2,
            deletedItem: 'bbb'
        })

        expect(save).toHaveBeenCalledWith([
            {'term':'aaa', 'defined': "aaaaa"},
            {'term':'ccc', 'defined': "ccccc"}
        ])
    })

});





