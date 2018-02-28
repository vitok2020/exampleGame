import {Cloneable} from "./interfases/Cloneable";

export class Vector2 implements Cloneable<Vector2> {

    constructor(public x: number = 0, public y: number = 0) {

    }

    /**
     * возвращает такойже обект
     * @param {Vector2} cloneFromObj
     * @returns {Vector2}
     */
    clone(cloneFromObj?: Vector2): Vector2 {
        let origin: Vector2;
        let copied: Vector2;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
        } else {
            origin = this;
            copied = new Vector2();
        }
        copied.set(origin.x, origin.y);
        return copied;
    }

    set(v: Vector2): Vector2;
    set(x: number | Vector2, y?: number): Vector2;
    set(x: number | Vector2, y?: number): Vector2 {
        if (x instanceof Vector2) {
            return this.set(x.x, x.y);
        }
        this.x = x;
        if (y === undefined) {
            this.y = x;
        } else {
            this.y = y;
        }
        return this;
    }

    add(v: Vector2): Vector2;
    add(v: Vector2, v1?: Vector2): Vector2;
    add(v: Vector2, v1?: Vector2): Vector2 {
        let v2 = v1 ? v1 : this;
        this.x = v2.x + v.x;
        this.y = v2.y + v.y;
        return this;
    }

    sub(v: Vector2): Vector2;
    sub(v: Vector2, v1?: Vector2): Vector2;
    sub(v: Vector2, v1?: Vector2): Vector2 {
        let v2 = v1 ? v1 : this;
        this.x = v2.x - v.x;
        this.y = v2.y - v.y;
        return this;
    }

    subScalar(s: number) {
        this.x -= s;
        this.y -= s;
        return this;
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        return this.divideScalar(this.length() || 1);
    }

    multiplyScalar(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    divideScalar(scalar: number) {
        return this.multiplyScalar(1 / scalar);
    }


    angle(v?: Vector2): number {
        // computes the angle in radians with respect to the positive x-axis
        let angle = 0;
        if (v) {
            angle = Math.atan2(v.y - this.y, v.x - this.x);
        } else {
            angle = Math.atan2(this.y, this.x);
        }
        if (angle < 0) angle += 2 * Math.PI;
        //Math.atan2(b.y - a.y, b.x - a.x)
        return angle;
    }

    distanceTo(v: Vector2) {
        return Math.sqrt(this.distanceToSquared(v));
    }

    distanceToSquared(v: Vector2) {
        let dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;
    }

    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }

    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }

    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }

    roundToZero() {
        this.x = ( this.x < 0 ) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = ( this.y < 0 ) ? Math.ceil(this.y) : Math.floor(this.y);
        return this;
    }

    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    dot(v: Vector2) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * Вращать вокруг
     */
    rotateAround(angle: number, center?: Vector2) {
        let cx = center ? center.x : 0;
        let cy = center ? center.y : 0;
        let c = Math.cos(angle), s = Math.sin(angle);
        let x = this.x - cx;
        let y = this.y - cy;
        this.x = x * c - y * s + cx;
        this.y = x * s + y * c + cy;
        return this;
    }

    toFixed(fractionDigits?: number) {
        this.x = parseFloat(this.x.toFixed(fractionDigits));
        this.y = parseFloat(this.y.toFixed(fractionDigits));
        return this;
    }

    setFromAngle(angle:number, length:number) {
        this.x = length * Math.cos(angle);
        this.y = length * Math.sin(angle);
        return this;
    }
}
