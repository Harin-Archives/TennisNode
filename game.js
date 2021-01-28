export default class Game {
    player1Score;
    player2Score;
    inProgress;


    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.inProgress = true;
    }

    addPoint(player) {
        if (player == 'Player1') {
            if (this.player1Score == 30) {
                this.player1Score = 40
            } else if (this.player1Score == 45) {
                // Win
                this.inProgress = false
            } else if (this.player1Score >= 40) {
                if (this.player2Score == 40) {
                    this.player1Score = 45
                    this.player2Score = 40
                } else if (this.player2Score == 45) {
                    this.player1Score = 40
                    this.player2Score = 40
                } else {
                    this.inProgress = false
                }
            } else {
                this.player1Score += 15
            }
        } else if (player == 'Player2') {
            if (this.player2Score == 30) {
                this.player2Score = 40
            } else if (this.player2Score == 45) {
                // Win
                this.inProgress = false
            } else if (this.player2Score >= 40) {
                if (this.player1Score == 40) {
                    this.player2Score = 45
                    this.player1Score = 40
                } else if (this.player1Score == 45) {
                    this.player1Score = 40
                    this.player2Score = 40
                } else {
                    this.inProgress = false
                }
            } else {
                this.player2Score += 15
            }
        }
    }

    resetScore() {
        this.inProgress = true
        this.player1Score = 0;
        this.player2Score = 0;
    }

}

// module.exports = Game;