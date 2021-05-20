import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001
const url = "mongodb+srv://admin:nitin123@cluster0.xpnjq.mongodb.net/tinderdb?retryWrites=true&w=majority";

// DB Config
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Nitin"));

app.post('/tinder/card', (req, res) = > {
    const dbCard = req.body;
})

// Listeners
app.listen(port, () => console.log(`Localhost ${port}`));