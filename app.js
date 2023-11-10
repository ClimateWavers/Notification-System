const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the email routes
app.use('/email', emailRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Email service running on port ${PORT}`);
});
