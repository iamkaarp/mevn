import {expect} from 'chai';
import config from  'config';
import server from '../server/index';
console.log(server.port);

describe('Server', ()=>{
    it('tests that server is running current port', () => {
        expect(server.port).to.equal(config.get('port'));
    });
});