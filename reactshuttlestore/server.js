
const express = require("express");
const cors = require("cors");
//const stripe = require("stripe")("YOUR_SECRET_KEY");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/checkout", async (req, res) => {

  const items = req.body.items;

  const lineItems = items.map(item => ({
    price: item.id,
    quantity: item.quantity
  }));

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ['card'],

    line_items: lineItems,

    mode: "payment",

    success_url: "http://localhost:3000/success",

    cancel_url: "http://localhost:3000/cancel",

    shipping_address_collection: {
      allowed_countries: ['US', 'CA']
    },

    billing_address_collection: "required",

    phone_number_collection: {
      enabled: true
    }

  });

  res.send({ url: session.url });

});

app.listen(4000, () => console.log("Listening on port 4000!"));
