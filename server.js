
// Tourist Mens XL t-shirt:   "id": "price_1RlPk2EygEOJAlLzbGXfkXsZ",
// Tourist Mens L t-shirt: "id": "price_1RlPofEygEOJAlLz6saqmyUh",
// Tourist Mens meduim t-shirt: "id": "price_1RlPvmEygEOJAlLzipOdxQPG",
// Tourist Womens Large t-shirt:  "id": "price_1RlPxrEygEOJAlLzbBXdbszD",
// Tourist Womens Meduim t-shirts:  "id": "price_1RlQ0FEygEOJAlLzCHut0Ct9",
// 12 passenger sprinter: price_1RTI1kEygEOJAlLzybFrNa8P
// 35 passenger tour bus: price_1RThP3EygEOJAlLzDsyaizvQ
// 6 passenger suv: price_1RZRf1EygEOJAlLz3RG9WHPj
// 15 passenger sprinter: price_1RZRpcEygEOJAlLzqIVnG9Ia
require('dotenv').config();
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/success", (req, res) => {
    res.send("<h1>Payment Successfulll 🎉</h1><p>You can close this window.</p>");
});

app.get("/cancel", (req, res) => {
    res.send("<h1>Payment Canceled </h1><p>Your order was not completed.</p>");
});
  
//////  old code below 
app.post("/checkout", async (req, res) => {
        
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
   
   console.log(req.body);
const items = req.body.items;
let lineItems = [];
items.forEach((item)=> {
    lineItems.push(
        {
            price: item.id,
            quantity: item.quantity
        }
    )
});

const session = await stripe.checkout.sessions.create({

    line_items: lineItems,

    mode: "payment",

    // Require billing address
    billing_address_collection: "required",

    // Collect shipping address
    shipping_address_collection: {
        allowed_countries: ["US", "CA"]
    },

    // Optional: Calculate automatic sales tax
   

    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"

});



res.send(JSON.stringify({
    url: session.url


}));


});   
//// old code above




app.listen(4000, () => console.log("Listening on port 4000!"));
