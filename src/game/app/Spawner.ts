import {Bullet} from "./ammos/Bullet";
import {Monster} from "./actors/Monster";
import {Pistol} from "./weapons/Pistol";
import {Container} from "pixi.js"
import {Player} from "./actors/Player";

export class Spawner {

    public bullet: Bullet;
    public monster: Monster;
    public pistol: Pistol;
    public player: Player;

    constructor(public containerActor: Container) {
        this.bullet = new Bullet();

        this.monster = new Monster();

        this.pistol = new Pistol();

        this.player = new Player();


    }

    getPlayer() :Player {
        let out = this.player.clone();
        this.containerActor.addChild(out.view);

        return out;
    }


    getMonster(): Monster {
        this.monster.speed = Math.random() * 2;
        this.monster.position.set(Math.random() * 1000, Math.random() * 1000);
        this.monster.intersectionShape.radius = Math.round(Math.random() * 20 + 20);
        let out = this.monster.clone();
        this.containerActor.addChild(out.view);
        return out;
    }

    getBullet() {
        this.bullet.speed = Math.random() * 2;
        this.bullet.position.set(Math.random() * 300, Math.random() * 300);
        let out = this.bullet.clone();
        // this.containerActor.addChild(out.view);
        return out;
    }

    getPistol() {
        let out = this.pistol.clone();
        this.containerActor.addChild(out.view);
        return out;
    }
}
