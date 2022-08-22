const httpStatus =require('http-status');
const { expect }=require('chai');
const chai=require('chai');
const app=require('../index')
const request=require('supertest-as-promised')

describe('## Tasks API Tests', () => {
    describe('### POST /createdish', () => {
        it('should return success when a dish was created', (done) => {
          request(app)
            .post('/api/createdish')
            .send({
                "name":"Bandeja paisa",
                "description":"Frijoles, chicharron, carne molida, chorizo, morcilla ",
                "price":"100USD",
                "photo":"bandeja.jpg"
            
            })
            .expect(httpStatus.OK)
            .then(res => {
              expect(res.body).to.equal('succes');
              done();
            });
        });
      });

      describe('### DELETE /tasks', () => {
        it('should return success when a dish was deleted', (done) => {
          request(app)
            .delete('/api/deletedish/2')
            .expect(httpStatus.OK)
            .then(res => {
              expect(res.body).to.equal('succes');
              done();
            });
        });
      });
});