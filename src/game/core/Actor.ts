import {Weapon} from "./Weapon";
import {MovementObject} from "./MovementObject";
import {Vector2} from "./Vector2";

export class Actor extends MovementObject {
    private _health: number = 0;

    get health() {
        return this._health;
    }

    set health(newHealth: number) {
        this._health = newHealth;
    }

    private _weapon: Weapon = new Weapon();

    get weapon() {
        return this._weapon;
    }

    set weapon(w: Weapon) {
        this._weapon = w;
    }

    private _seeVector: Vector2 | null = null;

    get seeVector() {
        return this._seeVector;
    }

    set seeVector(v: Vector2 | null) {
        this._seeVector = v;
    }

    private _offsetWeaponPosition = new Vector2(10, 10);

    get offsetWeaponPosition() {
        return this._offsetWeaponPosition;
    }

    set offsetWeaponPosition(v: Vector2) {
        this._offsetWeaponPosition = v;
    }

    clone(cloneFromObj?: Actor): Actor {
        let origin: Actor;
        let copied: Actor;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Actor();
            copied.clone(this);
        }
        copied.health = origin.health;
        copied.weapon.clone(origin.weapon);

        return copied;
    }

    update(delta: number) {
        super.update(delta);

        if (this._seeVector != null) {
            this.rotation = this.position.angle(this._seeVector);
        }
        if (this._weapon) {
            this._weapon.position.set(this.position);
            this._weapon.position.add(this._offsetWeaponPosition);
            this._weapon.position.rotateAround(this.rotation, this.position);

            if (this._seeVector != null) {
                this._weapon.rotation = this._weapon.position.angle(this._seeVector);
                // this.rotation = this._weapon.rotation;
            } else {
                this._weapon.rotation = this.rotation;
            }
        }
    }
}
