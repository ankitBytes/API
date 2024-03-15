const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require("./routes/product.routes.js");
const dotenv = require("dotenv");
dotenv.config();

//middleware
app.use(express.json()); // Middleware para parsear
// app.use(express.urlencoded({ extended: true })); 

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log("Web server is running");
});

app.get('/', (req, res) => {
    res.send("Hello from 3000 location");
});

//used to connect the database
mongoose.connect(`${process.env.DATABASE_CONNECTION_STRING}`)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(() => {
        console.log("connection failed");
    })