var shell = require('shelljs');
var request = require("supertest");
var bodyParser = require('body-parser');
var express = require('express');
var test = express()
var app = require('../app.js');
const Recipe = require('../models').Recipe
const Key = require('../models').Key

test.use(bodyParser.json())
test.use(bodyParser.urlencoded({ extended: true }))

describe('api spec', () => {

  beforeAll(() => {
    shell.exec('npx sequelize db:drop')
    shell.exec('npx sequelize db:create')
    shell.exec('npx sequelize db:migrate')
  });

  describe('POST for Key', () => {
    it('returns a key', () => {
      const body = {
        email: 'user@email.com'
      }
      return request(app)
              .post("/api/v1/keys")
              .send(body)
              .then(response => {
        expect(response.statusCode).toBe(201),
        expect(typeof response.body.key).toBe("string")
      });
    });
  });
});
