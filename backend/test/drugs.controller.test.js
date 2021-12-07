const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon');
const messages = require('../src/constants/messages');

const testdata = require('./data/drugs.data');

const drugsController = require('../src/controllers/drugsController');
const Drugs = require('../src/models/drugs');

describe('\n Drugs.controller.test \n', function(){
    this.timeout(0);
    let status, send, res;
    beforeEach(() => {
      sinon.stub(Drugs, 'find');
      status = sinon.stub();
      send = sinon.spy();
      res = { send, status };
      status.returns(res);
    });

     afterEach(()=>{
       Drugs.find.restore();
     })

    it('GET should return valid data and 200 status', async()=>{
     // Arrange
     const data = testdata.validData;
     const serach = 'br';
     const req = { params: { searchTerm: serach } };
     
    
      Drugs.find.returns(Promise.resolve(data));

      // Act
      console.log("Start Act");
       await drugsController.find(req,res);
     
       // Assert
     expect(res.status.calledOnce).to.be.true;
     expect(res.status.args[0][0]).to.equal(200);
     expect(res.send.calledOnce).to.be.true;
     expect(res.send.args[0][0]).to.equal(data);
    });

    it('GET throws error', async() =>{
         // Arrange
     const serach = 'br';
     const req = { params: { searchTerm: serach } };
     const mockedFetchError = new Error('some error');
    
      Drugs.find.returns(Promise.reject(mockedFetchError));

      // Act
       await drugsController.find(req,res);
     //Assert
     expect(res.status.calledOnce).to.be.true;
     expect(res.status.args[0][0]).to.equal(500);
     expect(res.send.calledOnce).to.be.true;
     expect(res.send.args[0][0]).to.equal(messages.errorMessage());
    });
});