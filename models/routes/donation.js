const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe('your_stripe_secret_key');

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Donation to MBR Radio',
                    },
                    unit_amount: req.body.amount * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://your-app.com/success',
        cancel_url: 'https://your-app.com/cancel',
    });

    res.json({ url: session.url });
});

module.exports = router;
