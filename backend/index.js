const express=require('express')
const Stripe = require('stripe');
const app=express()
require('dotenv').config()

const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const cors=require('cors')

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const route=require('./rotuter/router')
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('db connected successfully')
})



app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  console.log(items)

  // Calculate the total amount in cents
  const amount = items.reduce((total, item) => {
    return total + item.price * item.qnty;
  }, 0);
  console.log(amount)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send({ error: error.message });
  }
});


app.use('/user',route)

const PORT= process.env.PORT || 5050
app.listen(PORT,()=>{
    console.log("server is on")
})