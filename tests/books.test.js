import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/index.js';

let should = chai.should();

chai.use(chaiHttp);
describe('Books', () => {
    describe('/GET book', () => {
        it('it should GET all books', (done) => {
            chai.request(server)
                .get('/book')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('(/GET book/:id', () => {
        it('it should GET one book', (done) => {
            chai.request(server)
                .get('/book/1')
                .end((err, res) => {
                    res.should.have.status(200),
                    should.exist(res.body);
                    res.body.should.be.an('object');
                    //res.body.length.should.be.eql(1);
                    done();
                });
        })
    })
});