var shell = require('shelljs');
var request = require("supertest");
var bodyParser = require('body-parser');
var express = require('express');
var test = express()
var app = require('../app.js');

test.use(bodyParser.json())
test.use(bodyParser.urlencoded({ extended: false }))

describe('Keys Endpoints', () => {
  shell.exec('npx sequelize db:drop')
  shell.exec('npx sequelize db:create')
  shell.exec('npx sequelize db:migrate')

  it('POST request for new key', () => {
    const body = {
      email: "user@email.com"
    }
    return request(app)
            .post("/api/v1/keys")
            .send(body)
            .then(response => {
    expect(response.status).toBe(201)
    expect(typeof response.body.key).toBe("string")
            })
  })

  it('prevents multiple user keys', () => {
    const body = {
      email: "user@email.com"
    }
    return request(app)
            .post("/api/v1/keys")
            .send(body)
            .then(response => {
    expect(response.status).toBe(404)
    expect(response.body.error).toBe("A key has already been registered to this email address.")
            })
  })
})
