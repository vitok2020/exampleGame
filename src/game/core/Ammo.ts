import {MovementObject} from "./MovementObject";

export class Ammo extends MovementObject {
    damage: number = 0;
    speedFly: number = 0;
    distanceFly: number = 0;
    ammos: Array<Ammo> = [];


    clone(cloneFromObj?: Ammo): Ammo {
        let origin: Ammo;
        let copied: Ammo;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Ammo();
            copied.clone(this);
        }
        copied.damage = origin.damage;
        copied.distanceFly = origin.distanceFly;
        copied.speedFly = origin.speedFly;

        copied.ammos.length = 0;
        origin.ammos.map((item) => {
            copied.ammos.push(item.clone());
        });

        return copied;
    }


    update(delta: number) {
        super.update(delta);
    }




}
