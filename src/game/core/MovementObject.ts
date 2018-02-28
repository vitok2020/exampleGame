import {Vector2} from "./Vector2";
import {UpdatableObject} from "./interfases/UpdatableObject";
import {Cloneable} from "./interfases/Cloneable";
import {Circle} from "./collision/Circle";

export class MovementObject implements UpdatableObject, Cloneable<MovementObject> {
    position: Vector2 = new Vector2();
    intersectionShape: Circle = new Circle();

    targetPosition: Vector2 = new Vector2();
    rotation: number = 0;
    speed: number = 10;
    vector: Vector2 = new Vector2();// вектор направления

    private isMoveTarget = false;

    update(delta: number): void {

        if (this.isMoveTarget) {// расчитываем вектор направления относительно targetPosition
            // this.vector.set(this.targetPosition);
            this.vector.sub(this.position, this.targetPosition).normalize();
        }

        this.vector.normalize();
        let v = new Vector2(this.vector.x * this.speed / delta, this.vector.y * this.speed / delta);
        let ang = this.position.angle(this.targetPosition);
        this.position.add(v);
        this.position.toFixed();
        if(this.isMoveTarget && Math.abs(ang - this.position.angle(this.targetPosition)) >= Math.PI / 2) {// перепрыгрули таргет
            this.position.set(this.targetPosition);
        }
        this.intersectionShape.position.set(this.position);

    }

    setTargetPosition(v:Vector2|null) {
        if (v) {
            this.targetPosition.set(v);
            this.isMoveTarget = true;
        } else {
            this.targetPosition.set(0);
            this.isMoveTarget = false;
        }
    }

    clone(cloneFromObj?: MovementObject): MovementObject {
        let origin: MovementObject;
        let copied: MovementObject;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
        } else {
            origin = this;
            copied = new MovementObject();
        }
        copied.position.clone(origin.position);
        copied.targetPosition.clone(origin.targetPosition);
        copied.rotation = origin.rotation;
        copied.speed = origin.speed;
        copied.intersectionShape.clone(origin.intersectionShape);
        return copied;
    }


}
