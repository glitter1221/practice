const express = require('express');
const app = express();
const cors = require('cors');
const moongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

let listen = () => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    })
}

let dbConnect = () => {
    moongoose.connect(uri, { 
        useNewUrlParser: true
    }).then(() => {
            console.log("MongoDB database connection established successfully");
        });
}

listen();
dbConnect();

const exercisesRouter = require('./routes/exercises.');
const usersRouter = require('./routes/users');

app.use('/exercise', exercisesRouter);
app.use('/user', usersRouter);
