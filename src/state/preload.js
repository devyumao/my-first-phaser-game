var DevilPace = DevilPace || {};

DevilPace.preload = {
    preload: function () {
        var game = this.game;

        var loading = game.add.text(240, 360, 'Loading...', {font: '40pt Arial', fill: '#fff'});
        loading.anchor.set(0.5);

        game.load.image('dude', 'img/dude.png');
        game.load.image('balloon', 'img/balloon.png');
        game.load.image('view', 'img/view.png');
        game.load.image('tree', 'img/tree.png');
        game.load.image('short-tree', 'img/short-tree.png');
        game.load.image('cloud', 'img/cloud.png');
        game.load.image('big-cloud', 'img/big-cloud.png');
        game.load.image('sym-cloud', 'img/sym-cloud.png');
        game.load.image('dialog-1', 'img/dialog-1.png');
        game.load.image('dialog-2', 'img/dialog-2.png');
        game.load.spritesheet('button-1', 'img/button-1.png', 140, 54);
        game.load.spritesheet('button-2', 'img/button-2.png', 140, 54);
        game.load.image('mask', 'img/mask.png');
        game.load.image('card', 'img/card.png');
    },
    create: function () {
        this.state.start('play');
    }
};
