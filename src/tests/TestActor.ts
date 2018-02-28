import {Ammo} from "../game/core/Ammo";
import {Actor} from "../game/core/Actor";
import {Weapon} from "../game/core/Weapon";

export function testActorRun() {
    QUnit.module('Actor');

    let obj: undefined | Actor = undefined;

    QUnit.test("clone ", function (assert) {
        obj = new Actor();

        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;

        obj.weapon.name = 'weap';
        obj.weapon.speedShot = 30;
        let a = new Ammo();
        a.damage = 20;
        obj.weapon.ammos.push(a);

        let cloneAmmo = obj.clone();
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal');
    });

    QUnit.test("clone  set", function (assert) {
        obj = new Actor();


        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;

        obj.weapon.name = 'weap';
        obj.weapon.speedShot = 30;
        let a = new Ammo();
        a.damage = 20;
        obj.weapon.ammos.push(a);

        let cloneAmmo = new Actor();
        cloneAmmo.clone(obj);
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal clone set');
    });
}
