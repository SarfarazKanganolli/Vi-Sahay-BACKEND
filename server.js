require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./util/db');
const authRoute = require('./Router/auth_router');
const contactRoute = require('./Router/contact_router');
const volunteerRoute = require('./Router/Volunteer_router');
const errorMiddleware = require('./Middleware/error_middleware');
const stripe = process.env.STRIPE_LINK;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use('/api', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/volunteer_form', volunteerRoute);

app.get('/api/stripe-url', (req,res) => {
    const stripeUrl = stripe;
    res.json({ url: stripeUrl });
});






app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
