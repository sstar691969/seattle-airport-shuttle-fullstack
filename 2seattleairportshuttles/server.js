const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Success page
app.get("/success", (req, res) => {
    res.send("<h1>Payment Successful 🎉</h1><p>Thank you for your purchase!</p>");
});

// Cancel page
app.get("/cancel", (req, res) => {
    res.send("<h1>Payment Cancelled</h1><p>Your order was not completed.</p>");
});

// Checkout
app.post("/checkout", async (req, res) => {
    try {
        console.log(req.body);

        const items = req.body.items;

        const lineItems = items.map((item) => ({
            price: item.id,
            quantity: item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],

            line_items: lineItems,

            mode: "payment",

            // Require customer's billing address
            billing_address_collection: "required",

            // Collect shipping address
            shipping_address_collection: {
                allowed_countries: ["US", "CA"]
            },

            // Collect phone number
            phone_number_collection: {
                enabled: true
            },

           

            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        res.json({
            url: session.url
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(4000, () => {
    console.log("Listening on port 4000!");
});
