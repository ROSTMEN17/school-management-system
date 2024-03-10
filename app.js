const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./router.js");
require("dotenv").config();

mongoose
.connect(process.env.db_url)
.then((res) => console.log('Connected'))
.catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) ;

app.use(express.json());

app.use('/', router)

