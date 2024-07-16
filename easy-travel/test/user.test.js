process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const User = require('../models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe('/POST user', () => {
    it('it should not POST a user without email field', (done) => {
      let user = {
        name: 'John Doe',
        password: '123456'
      };
      chai.request(server)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.errors.should.have.property('msg').eql('Please include a valid email');
          done();
        });
    });
  });
});
