const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle order form POST
app.post('/order', (req, res) => {
    const order = req.body;
    console.log('New order received:', order);

    // For demo, just send a thank you response
    res.send(`
        <h1>Thank you for your order, ${order.name}!</h1>
        <p>We've received your ${order.size} ${order.pizzaType} pizza order.</p>
        <p>We'll contact you shortly at ${order.email}.</p>
        <a href="/">Back to home</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
