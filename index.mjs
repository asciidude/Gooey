import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect(process.env.MONGO_URI, () => console.log('Connected to db'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

app.get('/app', (req, res) => {
    res.render('app', { user: req.user });
});

app.get('/invite/:id', (req, res) => {
    res.render('invite', { user: req.user });
});

server.listen(process.env.PORT || 8000, () =>
    console.log(`Listening on ${process.env.PORT || 8000}`)
);