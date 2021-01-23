import { it, expect, describe } from '@jest/globals';
import Game from './game.js';

describe("Game", () => {
    // Add Point
    describe("addPoint1", () => {
        it("should add point to player1", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            expect(newGame.player1Score == 15);
        });
    });

    // Add Duece Point
    describe("addDuecePoint", () => {
        it("should add point to player from 40 to 45", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 45);
        });
    });

    // Back to Duece
    describe("dueceAgain", () => {
        it("should 40-40", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 45);
            newGame.addPoint("Player1");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 40);
        });
    });

    // Reset Scores
    describe("reset", () => {
        it("should 0-0", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 45);
            newGame.resetScore();
            expect(newGame.inProgress);
            expect(newGame.player1Score == 0);
            expect(newGame.player2Score == 0);
        });
    });

    // Normal Win
    describe("normal win", () => {
        it("should win and end game", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 0);
        });
    });

    // Normal Win Lock Game
    describe("normal win locks game", () => {
        it("should win and end game and stop further action", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 0);
            newGame.addPoint("Player1");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 0);
        });
    });

    // Duece Win
    describe("dueceWin", () => {
        it("should win in duece", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 45);
            newGame.addPoint("Player2");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 50);
        });
    });

    // End game, reset, switch winner
    describe("swapWinner", () => {
        it("should swap winner", () => {
            const newGame = new Game();
            expect(newGame.player1Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            newGame.addPoint("Player2");
            expect(newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 45);
            newGame.addPoint("Player2");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 50);
            newGame.resetScore();
            expect(newGame.inProgress);
            expect(newGame.player1Score == 0);
            expect(newGame.player2Score == 0);
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            newGame.addPoint("Player1");
            expect(!newGame.inProgress);
            expect(newGame.player1Score == 40);
            expect(newGame.player2Score == 0);
        });
    });
})