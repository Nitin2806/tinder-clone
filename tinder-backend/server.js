import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

// App Config

const app = express();
const port = process.env.PORT || 8001
const url = 'mongodb://nitin:nitin123@cluster0-shard-00-00.eebbv.mongodb.net:27017,cluster0-shard-00-01.eebbv.mongodb.net:27017,cluster0-shard-00-02.eebbv.mongodb.net:27017/tinderdb?ssl=true&replicaSet=atlas-yy5m1h-shard-0&authSource=admin&retryWrites=true&w=majority';

// Middlewares

app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Nitin"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);

        } else {
            res.status(201).send(data);

        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);

        } else {
            res.status(201).send(data);

        }
    });

});

// Listeners
app.listen(port, () => console.log(`Localhost ${port}`));