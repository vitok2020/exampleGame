
import {Weapon} from "../../core/Weapon";
import Container = PIXI.Container;
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import {UpdatableObject} from "../../core/interfases/UpdatableObject";
import {Bullet} from "../ammos/Bullet";
import {Vector2} from "../../core/Vector2";

export class Pistol extends Weapon implements UpdatableObject{
    view:Container;
    private color:number = 0xff99ff;
    private text:Text;
    private lastShot = -1;

    constructor() {
        super();
        this.view = new Graphics();
        this.intersectionShape.radius = 20;

        let v = (this.view as Graphics);
        v.clear();
        v.lineStyle(4, this.color);
        v.moveTo(0,0);
        v.lineTo(this.intersectionShape.radius,0);
        v.drawRect(-this.intersectionShape.radius,-this.intersectionShape.radius, this.intersectionShape.radius*2, this.intersectionShape.radius*2);

        this.text  = new Text('0,0');
        this.view.addChild(this.text);
    }

    private updateView() {
        this.view.position.set(this.position.x, this.position.y);
        this.view.rotation = this.rotation;
        this.text.text = ''+this.position.x+' - '+this.position.y;
    }

    update(delta:number) {
        super.update(delta);

        this.updateView()
    }


    clone(cloneFromObj?: Pistol): Pistol {
        let origin: Pistol;
        let copied: Pistol;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Pistol();
            copied.clone(this);
        }
        return copied;
    }

    shot():Bullet|null {// выстрел
        let time = new Date().getTime();
        if ((time - this.lastShot) < this.speedShot) return null;

        this.lastShot = time;
        // let ammo = this.ammos.pop();
        // ammo.setTargetPosition()

        let ammo = new Bullet();
        ammo.speed = 5;
        ammo.distanceFly = 600;
        ammo.rotation = this.rotation;
        ammo.position.set(this.position);
        let target = new Vector2();
        target.setFromAngle(ammo.rotation, ammo.distanceFly);
        target.add(ammo.position);
        ammo.setTargetPosition(target);
        return ammo;
    }

}