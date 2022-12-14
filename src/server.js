const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv')

// initialize app
const app = express();

// env  variables
dotenv.config();

// middlewares
app.use(express.json())
app.use(cors());


// app listening
app.listen(process.env.PORT, () => {
    console.log('Server Running on port: ' + process.env.PORT);
})

// routes
app.use("/upload", (req, res) => {

    res.status(200).send("Uploaded Successfully!!")
})

exports.default = app;