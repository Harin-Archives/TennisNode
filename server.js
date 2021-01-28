import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Game from './game.js';
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = 3000;

const game = new Game();

app.get('/', function(req, res) {
    res.status(200).send('Hello World!');
});

app.post('/addPoint', (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty',
        })
    } else if (!game.inProgress) {
        res.status(405).send({
            message: 'Game finished',
        })
    }
    const entry = {
        player: req.body.player
    }

    game.addPoint(entry.player);

    res.json({
        player1Score: game.player1Score,
        player2Score: game.player2Score,
        inProgress: game.inProgress,
    });
});

app.get('/getScore', (_, res) => {
    res.json({
        player1Score: game.player1Score,
        player2Score: game.player2Score,
        inProgress: game.inProgress,
    })
});

app.get('/resetGame', (_, res) => {
    game.resetScore();
    
    res.json({
        player1Score: game.player1Score,
        player2Score: game.player2Score,
        inProgress: game.inProgress,
    })
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});