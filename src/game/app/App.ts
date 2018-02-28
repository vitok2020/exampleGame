import {Monster} from "./actors/Monster";
import {Container} from 'pixi.js';
import {KeyboardState} from "../util/KeyboardState";
import {Application} from 'pixi.js';
import {Vector2} from "../core/Vector2";
import {Camera} from "./Camera";
import {Spawner} from "./Spawner";
import {Bullet} from "./ammos/Bullet";
import {Player} from "./actors/Player";
import {CollisionDetect} from "./CollisionDetect";
import {Signal} from "signals.js";

export class App {

    app: Application;
    spawner: Spawner;

    monsters: Array<Monster> = [];
    keyboardState: KeyboardState;
    camera: Camera;
    world: Container;
    fon: Container;
    containerActor: Container;
    gui: Container;
    private indexTarget = 0;
    // private stats: Stats;
    private bullets: Array<Bullet> = [];
    private player: Player;
    private collisionDetect: CollisionDetect;


    constructor(app?: PIXI.Application) {

        let s = new Signal();
        s.add(function (e: any) {
            console.log(e);
        });
        s.dispatch({adfsdfsd: 'asdfsdfsdflkjsdf '});
        console.log(s);
        console.log('main');
        // this.stats = new Stats();
        // this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        // document.body.appendChild(this.stats.dom);


        if (app) {
            this.app = app;
        } else {
            this.app = new PIXI.Application(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.app.view);
        }


        this.app.ticker.speed = 1;
        this.app.renderer.plugins.interaction.mouse.global.set(0);
        this.app.ticker.add(this.update.bind(this));


        this.world = new Container();
        this.fon = new Container();
        this.containerActor = new Container();
        this.gui = new Container();

        this.world.addChild(this.fon, this.containerActor);
        this.app.stage.addChild(this.world);
        this.app.stage.addChild(this.gui);

        this.keyboardState = new KeyboardState();

        this.camera = new Camera(this.app, this.world);
        this.world.addChild(this.camera.view);

        this.spawner = new Spawner(this.containerActor);

        this.collisionDetect = new CollisionDetect();

        this.init();
        // window.app = this;
    }

    init(): void {

        this.player = this.spawner.getPlayer();
        this.player.weapon = this.spawner.getPistol();
        this.camera.setTarget(this.player);

        for (let i = 0; i < 5; i++) {
            let monster = this.spawner.getMonster();
            this.monsters.push(monster);
            this.collisionDetect.addActor(monster);
        }
        // for (let i = 0; i < 5; i++) {
        //     let monster = this.spawner.getPistol();
        // }

        PIXI.loader.add('grass', 'img/grass.jpg').load((loader: any, resources: any) => {
            let bunny = new PIXI.extras.TilingSprite(resources.grass.texture, this.app.renderer.width * 10000, this.app.renderer.height * 10000);
            bunny.anchor.set(0.5);
            this.fon.addChild(bunny);
            bunny.alpha = 0.5;
        });


        // addWheelListener(this.app.view, (e:any) => {
        //     e.preventDefault();
        //     if (e.deltaY > 0) {
        //         this.world.scale.x += 0.01;
        //         this.world.scale.y += 0.01;
        //     } else {
        //         this.world.scale.x -= 0.01;
        //         this.world.scale.y -= 0.01;
        //     }
        // });

        this.fon.interactive = true;
        this.fon.on('mousedown', () => {
            // this.camera.setTarget(this.monsters[this.indexTarget++ % this.monsters.length])
            let a = this.player.weapon.shot();
            if (a != null) {
                console.log(a);
                // this.bullets.push(a);
                // this.collisionDetect.addAmo(a);
                //
                // this.containerActor.addChild(a.view)
            }

        })
    }

    handleInput() {

        this.player.seeVector = this.camera.mouseVector;
        this.player.vector.set(0, 0);
        this.player.speed = 2;
        if (this.keyboardState.pressed('shift')) {
            this.player.speed = 10;
        }

        let vectorMove = new Vector2();
        if (this.keyboardState.pressed('w') && !this.keyboardState.pressed('s')) {
            vectorMove.y = -1;
        } else if (this.keyboardState.pressed('s') && !this.keyboardState.pressed('w')) {
            vectorMove.y = 1;
        }
        if (this.keyboardState.pressed('a') && !this.keyboardState.pressed('d')) {
            vectorMove.x = -1;
        } else if (this.keyboardState.pressed('d') && !this.keyboardState.pressed('a')) {
            vectorMove.x = 1;
        }
        vectorMove.multiplyScalar(this.player.speed);
        vectorMove.add(this.player.position);
        this.player.setTargetPosition(vectorMove);
    }

    update(delta: number) {
        // this.stats.begin();
        this.camera.update(delta);
        this.collisionDetect.update(delta);

        this.handleInput();


        this.monsters.forEach((actor, index, arr) => {
            actor.rotation = actor.position.angle(this.player.position);
            actor.setTargetPosition(this.player.position)
        });


        this.monsters.forEach((actor) => {
            actor.update(delta)
        });
        this.bullets.forEach((b) => {
            b.update(delta)
        });

        this.player.update(delta);
        this.player.weapon.update(delta);

        // this.stats.end();
    }


}

export default App;

