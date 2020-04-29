class menuScene extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload() {
        this.load.image('background', 'assets/images/intro/background.png');
        this.load.image('background_tusk', 'assets/images/intro/background_tusk.png');
        this.load.image("snow_normal", 'assets/images/intro/snow_normal.png')
        this.load.image("water_normal", 'assets/images/intro/water_normal.png')
        this.load.image("fire_normal", 'assets/images/intro/fire_normal.png')
        this.load.audio('backgroundmusic', 'sounds/menu.mp3');

    }
    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0)
        let menuwater = this.add.image(-30, 0, 'water_normal').setOrigin(0, 0).setInteractive();
        let menusnow = this.add.image(230, 0, 'snow_normal').setOrigin(0, 0).setInteractive();
        let menufire = this.add.image(460, 70, 'fire_normal').setOrigin(0, 0).setInteractive();
        this.backgroundmusic = this.sound.add('backgroundmusic', bgmsmenu);
        this.backgroundmusic.play();
        menuwater.on('pointerdown', () => {
            this.backgroundmusic.destroy();
            playerelement = "water"
            this.scene.start("gameScene")
        });
        menusnow.on('pointerdown', () => {
            this.backgroundmusic.destroy();
            playerelement = "snow"
            this.scene.start("gameScene")
        });
        menufire.on('pointerdown', () => {
            this.backgroundmusic.destroy();
            playerelement = "fire"
            this.scene.start("gameScene")
        });

    }
    update() {
        this.input.on('gameobjectover', function (pointer, gameObject) {

            gameObject.setTint(0x7878ff);
    
        });
    
        this.input.on('gameobjectout', function (pointer, gameObject) {
    
            gameObject.clearTint();
    
        });
        
    }
}