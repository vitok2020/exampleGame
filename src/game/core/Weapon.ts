import {Ammo} from "./Ammo";
import {Cloneable} from "./interfases/Cloneable";
import {MovementObject} from "./MovementObject";
import {Vector2} from "./Vector2";

export class Weapon extends MovementObject {
    ammos: Array<Ammo> = [];
    name: string = '';
    speedShot: number = 100;
    // private lastShot = -1;


    clone(cloneFromObj?: Weapon): Weapon {
        let origin: Weapon;
        let copied: Weapon;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            // super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Weapon();
            copied.clone(this);
        }
        copied.name = origin.name;
        copied.speedShot = origin.speedShot;

        copied.ammos.length = 0;
        origin.ammos.map((item) => {
            copied.ammos.push(item.clone());
        });

        return copied;
    }


    shot() : Ammo{// выстрел
        throw Error('implements method')
    //     let time = new Date().getTime();
    //     if ((time - this.lastShot) < this.speedShot) return null;
    //
    //     this.lastShot = time;
    //     // let ammo = this.ammos.pop();
    //     // ammo.setTargetPosition()
    //
    //     let ammo = new Ammo();
    //     ammo.speed = 5;
    //     ammo.distanceFly = 600;
    //     ammo.rotation = this.rotation;
    //
    //     let target = new Vector2();
    //     target.setFromAngle(ammo.rotation, ammo.distanceFly);
    //     return ammo;
    }
}
