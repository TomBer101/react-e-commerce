const express = require('express');
const cors = require('cors');


const authController = require('./controllers/authController');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authController);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})