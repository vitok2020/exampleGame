import {Ammo} from "../game/core/Ammo";
import {Weapon} from "../game/core/Weapon";

export function testWeaponRun() {
    QUnit.module('Weapon');

    let obj: undefined | Weapon = undefined;



    QUnit.test("clone ", function (assert) {
        obj = new Weapon();
        obj.name = 'weapon1';
        obj.ammos.push(new Ammo());
        let a = new Ammo();
        a.damage = 20;
        obj.ammos.push(a);

        let cloneAmmo = obj.clone();
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal');

    });

    QUnit.test("clone  set", function (assert) {
        obj = new Weapon();
        obj.name = 'weapon1';
        obj.ammos.push(new Ammo());
        let a = new Ammo();
        a.damage = 20;
        obj.ammos.push(a);

        let cloneAmmo = new Weapon();
        cloneAmmo.clone(obj);
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal clone set');
    });
}
