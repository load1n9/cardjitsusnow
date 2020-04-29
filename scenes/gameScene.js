
class gameScene extends Phaser.Scene {
    constructor() {
        super("gameScene")
    }
    preload() {
        this.load.image('tile', 'assets/images/tile_move.png')
        this.load.image("frame", "assets/images/frame.png")
        this.load.image('background1', 'assets/images/background_1.png');
        this.load.image('foreground1', 'assets/images/foreground_1.png');
        this.load.image('background2', 'assets/images/background_2.png');
        this.load.image('foreground2', 'assets/images/foreground_2.png');
        this.load.image('background3', 'assets/images/background_3.png');
        this.load.image('snowbottomui', 'assets/images/ui_snow_cards.png');
        this.load.image('waterbottomui', 'assets/images/ui_water_cards.png');
        this.load.image('firebottomui', 'assets/images/ui_fire_cards.png');
        this.load.image('snowtimerbase', 'assets/images/snow_timer/base.png');
        this.load.image('watertimerbase', 'assets/images/water_timer/base.png');
        this.load.image('firetimerbase', 'assets/images/fire_timer/base.png');
        this.load.audio('backgroundmusicgame', 'sounds/mus_mg_201303_cjsnow_gamewindamb.mp3');
        this.load.spritesheet('snowninja_idle', 'assets/images/snow_ninja/idlecustom.png', { frameWidth: 77, frameHeight: 52 });
        this.load.spritesheet('fireninja_idle', 'assets/images/fire_ninja/idlecustom.png', { frameWidth: 77, frameHeight: 52 });
        this.load.spritesheet('waterninja_idle', 'assets/images/water_ninja/idlecustom.png', { frameWidth: 88, frameHeight: 92 });
        this.load.spritesheet('tank_idle', 'assets/images/enemy/tankidlecustom.png', { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet('sly_idle', 'assets/images/enemy/slyidlecustom.png', { frameWidth: 77, frameHeight: 77 });
    }
    create() {
        this.somevar = true;
        this.x = 0;
        this.y = 0;
        this.turn = true;
        if (scenething === 1) {
            this.add.image(0, 0, 'background1').setOrigin(0, 0)
            //this.add.image(100, 80, 'frame').setOrigin(0, 0)
            this.add.image(0, 298, 'foreground1').setOrigin(0, 0)
        } else if (scenething === 2) {
            this.add.image(0, 0, 'background2').setOrigin(0, 0)
            //this.add.image(100, 80, 'frame').setOrigin(0, 0)
            this.add.image(0, 298, 'foreground2').setOrigin(0, 0)
        } else {
            this.add.image(0, 0, 'background3').setOrigin(0, 0)
            //this.add.image(100, 80, 'frame').setOrigin(0, 0)
        }
        this.tank = this.add.sprite(590, 210, "tank_idle").setOrigin(0, 0);
        this.sly = this.add.sprite(590, 350, "sly_idle").setOrigin(0, 0);
        if (playerelement === "snow") {
            this.add.image(222, 410, 'snowbottomui').setOrigin(0, 0)
            player = this.add.sprite(70, 70, "snowninja_idle").setOrigin(0, 0);
            player2 = this.add.sprite(70, 210, "fireninja_idle").setOrigin(0, 0);
            player3 = this.add.sprite(70, 350, "waterninja_idle").setOrigin(0, 0);
            this.add.image(326.5, 0, 'snowtimerbase').setOrigin(0, 0)
        } else if (playerelement === "water") {
            this.add.image(222, 410, 'waterbottomui').setOrigin(0, 0)
            this.add.image(326.5, 0, 'watertimerbase').setOrigin(0, 0)
            player = this.add.sprite(70, 70, "waterninja_idle").setOrigin(0, 0);
            player2 = this.add.sprite(70, 210, "fireninja_idle").setOrigin(0, 0);
            player3 = this.add.sprite(70, 350, "snowninja_idle").setOrigin(0, 0);
        } else if (playerelement === "fire") {
            this.add.image(222, 413, 'firebottomui').setOrigin(0, 0)
            this.add.image(326.5, 0, 'firetimerbase').setOrigin(0, 0)
            player = this.add.sprite(70, 70, "fireninja_idle").setOrigin(0, 0);
            player2 = this.add.sprite(70, 210, "waterninja_idle").setOrigin(0, 0);
            player3 = this.add.sprite(70, 350, "snowninja_idle").setOrigin(0, 0);
        }
        this.sound.play('backgroundmusicgame', bgms);
        this.anims.create({
            key: 'snowninja_idle_animation',
            frames: this.anims.generateFrameNumbers('snowninja_idle', { start: 0, end: 9 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'fireninja_idle_animation',
            frames: this.anims.generateFrameNumbers('fireninja_idle', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'waterninja_idle_animation',
            frames: this.anims.generateFrameNumbers('waterninja_idle', { start: 0, end: 8 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'tank_idle_animation',
            frames: this.anims.generateFrameNumbers('tank_idle', { start: 0, end: 15 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'sly_idle_animation',
            frames: this.anims.generateFrameNumbers('sly_idle', { start: 0, end: 7 }),
            frameRate: 5,
            repeat: -1
        });
        this.tank.anims.play('tank_idle_animation')
        this.sly.anims.play('sly_idle_animation')
        if (playerelement === "fire") {
            player.anims.play('fireninja_idle_animation')
            player2.anims.play('waterninja_idle_animation')
            player3.anims.play('snowninja_idle_animation')
        } else if (playerelement === "snow") {
            player.anims.play('snowninja_idle_animation')
            player2.anims.play('fireninja_idle_animation')
            player3.anims.play('waterninja_idle_animation')
        } else {
            player.anims.play('waterninja_idle_animation')
            player2.anims.play('fireninja_idle_animation')
            player3.anims.play('snowninja_idle_animation')
        }
        this.creategrid = function() {
            for (let y = 1; y < 6; y++) {
                for (let x = 1; x < 10; x++) {
                    let xpos = x * 70;
                    let ypos = y * 70;
                    gridthing[y][x] = this.add.image(xpos, ypos, 'tile').setOrigin(0, 0).setInteractive();
                }
            }
        }


    }
    update() {
        if (this.somevar) {
            this.creategrid()
            this.somevar = false
            player.depth = 1
            player2.depth = 1
            player3.depth = 1
            this.tank.depth = 1
            this.sly.depth = 1
            
        }
        if (this.turn === true) {
            for (let y = 1; y < 6; y++) {
                for (let x = 1; x < 10; x++) {
                    gridthing[y][x].on('pointerdown', () => {
                        if ((gridthing[y][x].x -player.x <= 200)&&(gridthing[y][x].y -player.y <= 200)) {
                            player.x = gridthing[y][x].x
                            player.y = gridthing[y][x].y
                            player2.x = gridthing[y+randomint(-1,1)][x+randomint(-1,1)].x
                            player2.y = gridthing[y+randomint(-1,1)][x+randomint(-1,1)].y
                            player3.x = gridthing[y+randomint(-1,1)][x+randomint(-1,1)].x
                            player3.y = gridthing[y+randomint(-1,1)][x+randomint(-1,1)].y
                            this.turn = false
                        }
                    });
                }
            }
        } else {
            for (let y = 1; y < 6; y++) {
                for (let x = 1; x < 10; x++) {
                    gridthing[y][x].off('pointerdown')
                    gridthing[y][x].destroy()
                    
                }
            }
            if(this.nextShot>this.time.now){return;}
            this.nextShot = this.time.now + randomint(5000,10000); 
            this.tank.x = gridthing[randomint(1,5)][randomint(1,9)].x
            this.tank.y = gridthing[randomint(1,5)][randomint(1,9)].y
            this.sly.x = gridthing[randomint(1,5)][randomint(1,9)].x
            this.sly.y = gridthing[randomint(1,5)][randomint(1,9)].y
            this.turn = true;
            this.somevar = true;
        }
    }
}