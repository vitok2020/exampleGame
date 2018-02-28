import {MovementObject} from "../core/MovementObject";
import {UpdatableObject} from "../core/interfases/UpdatableObject";
import {Ammo} from "../core/Ammo";
import {Actor} from "../core/Actor";
export class CollisionDetect implements UpdatableObject {

    private amos: Array<Ammo> = [];
    private actors: Array<Actor> = [];


    constructor() {

    }

    addActor(actor: Actor) {
        this.actors.push(actor);
    }

    addAmo(amo: Ammo) {
        this.amos.push(amo);
    }

    update(delta: number): void {


        for (let i = 0; i < this.actors.length; i++) {
            let act = this.actors[i];

            let arrAmo = [];

            for (let j = 0; j < this.amos.length; j++) {

                if (CollisionDetect.isIntersection(act, this.amos[j])) {
                    arrAmo.push(this.amos[j]);
                }
            }

            // todo написать поражение цели
            if (arrAmo.length > 0) {
                arrAmo.forEach(function (a) {
                    act.health -= a.damage;
                    a.damage = 0;
                })
            }

        }

    }

    private static isIntersection(mo: MovementObject, other: MovementObject): boolean {
        return mo.intersectionShape.isIntersect(other.intersectionShape);
    }

}