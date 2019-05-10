const Key = require('../models').Key
const hat = require('hat')
const pry = require('pryjs')

const register = (req, res) => {
  const email = req.body.email
  if (email) {
    generateKey(email, res)
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ error: "Please provide an email address" }))
  }
}

const generateKey = (email, res) => {
  Key.create({
    email: email,
    key: hat()
  })
  .then(key => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify({ key: key.key }))
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({error: "A key has already been registered to this email address."}))
  })
}

module.exports = {
  register
}
