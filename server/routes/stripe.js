const express = require('express');
const router = express.Router();
const { TEST_STRIPE_SECRET_KEY, LIVE_STRIPE_SECRET_KEY } = require('../config/env')
const key = process.env.npm_lifecycle_event === 'dev' ? TEST_STRIPE_SECRET_KEY : LIVE_STRIPE_SECRET_KEY

const stripe = require('stripe')(key)

router.post('/', (req, res, next) => {
  console.log(req.body)
  return stripe.customers.create({
    email: req.body.token.email,
    source: req.body.token.id
  })
  .then((customer) => {
    return stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      customer: customer.id,
      description: req.body.description,
      receipt_email: customer.email
    });
  })
  .then((charge) => {
    res.send(charge)
  })
});

module.exports = router