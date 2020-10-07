import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/index.js';

import factory from '../factory/book.factory.js';

let should = chai.should();

chai.use(chaiHttp);
describe('Books', () => {
    describe('/GET book', () => {
        it('it should GET all books', (done) => {
            chai.request(server)
                .get('/api/book')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('/GET book/:id', () => {
        it('it should GET one book', (done) => {
            chai.request(server)
                .get('/api/book/1')
                .end((err, res) => {
                    res.should.have.status(200),
                    should.exist(res.body);
                    res.body.should.be.an('object');
                    //res.body.length.should.be.eql(1);
                    done();
                });
        })
    });
    describe('/UPDATE book', () => {
        it('it should UPDATE a book', (done) => {
            chai.request(server)
                .put('/api/book/1')
                .set('content-type', 'application/json')
                .send({ "title": "New book"})
                .end((err, res) => {
                    res.should.have.status(200),
                    should.exist(res.body);
                    res.body.should.be.an('object');
                    //res.body.length.should.be.eql(1);
                    done();
                });
        })
    });

    describe('/DELETE book', () => {
        it('it should DELETE a book', (done) => {
            chai.request(server)
                .delete('/api/book/1')
                .end((err, res) => {
                    res.should.have.status(200),
                    should.exist(res.body);
                    res.body.should.be.an('array');
                    //res.body.length.should.be.eql(1);
                    done();
                });
        })
    });

});