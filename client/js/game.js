var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'run-rpg', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('phaserLogo', '/img/Phaser Logo Web Quality.png');
}

function create() {
    var logo = game.add.physicsGroup();
    logo.create(400, 300, 'phaserLogo');
}

function update() {

}

function render() {
}
