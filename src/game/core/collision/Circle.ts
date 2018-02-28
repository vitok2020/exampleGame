import {Vector2} from "../Vector2";
import {Cloneable} from "../interfases/Cloneable";

export class Circle implements Cloneable<Circle> {
    position: Vector2 = new Vector2();
    radius: number = 0;

    constructor(x: number = 0, y: number = 0, r: number = 0) {
        this.position.x = x;
        this.position.y = y;
        this.radius = r;
    }

    clone(cloneFromObj?: Circle): Circle {
        let origin: Circle;
        let copied: Circle;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
        } else {
            origin = this;
            copied = new Circle();
        }

        copied.position.set(origin.position.x, origin.position.y);
        copied.radius = origin.radius;
        return copied;
    }

    /**
     * Есть ли пересечения
     * @returns {boolean} true есть | false нет
     */
    isIntersect(shape: Circle): boolean {
        return (this.position.distanceTo(shape.position) <= (this.radius + shape.radius));
    }

}