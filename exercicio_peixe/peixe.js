var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {

//carregar fundo
    this.load.image('ocean', 'assets/bg_oceano.png');

//carregar logo 
    this.load.image('logo', 'assets/logo-inteli_branco.png');

//carregar cthulhu
    this.load.image('cthulhu', 'assets/cthulhu.png');

//carregar peixe
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');
}

function create() {

//adicionar fundo na tela
    this.add.image(400, 300, 'ocean');

//adicionar logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

//adicionar cthulhu na tela
    this.add.image(400, 150, 'cthulhu').setScale(0.5);

//guardar peixe numa variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5);
    
//transformando a variável
    peixinho.setFlip(true, false);
}

function update() {

//adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
};