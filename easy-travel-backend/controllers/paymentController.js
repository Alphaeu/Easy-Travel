const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Process a payment
exports.processPayment = async (req, res) => {
  const { amount, currency, source, description } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      source,
      description,
    });

    res.json(paymentIntent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
