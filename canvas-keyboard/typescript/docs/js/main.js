"use strict";
var Game = (function () {
    function Game() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.bg = new Image();
        this.bg.src = './images/grass.png';
        this.player = new Player(this);
        this.update();
    }
    Game.prototype.update = function () {
        var _this = this;
        this.ctx.fillStyle = 'rgb(30,140,30)';
        this.ctx.fillRect(0, 0, 800, 600);
        var pattern = this.ctx.createPattern(this.bg, 'repeat');
        this.ctx.fillStyle = pattern;
        this.ctx.fillRect(0, 0, 800, 600);
        this.player.update();
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Player = (function () {
    function Player(g) {
        var _this = this;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.game = g;
        this.x = 20;
        this.y = 20;
        this.image = new Image();
        this.image.src = './images/tomnook.png';
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.update = function () {
        if (this.left)
            this.x -= 5;
        if (this.right)
            this.x += 5;
        if (this.up)
            this.y -= 5;
        if (this.down)
            this.y += 5;
        this.game.ctx.drawImage(this.image, this.x, this.y);
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.key.toUpperCase()) {
            case "A":
                this.left = true;
                break;
            case "D":
                this.right = true;
                break;
            case "S":
                this.down = true;
                break;
            case "W":
                this.up = true;
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.key.toUpperCase()) {
            case "A":
                this.left = false;
                break;
            case "D":
                this.right = false;
                break;
            case "S":
                this.down = false;
                break;
            case "W":
                this.up = false;
                break;
        }
    };
    return Player;
}());
//# sourceMappingURL=main.js.map