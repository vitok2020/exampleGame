import {Ammo} from "../game/core/Ammo";

export function testAmmoRun() {
    QUnit.module('Ammo');

    let obj: undefined | Ammo = undefined;



    QUnit.test("clone ", function (assert) {
        obj = new Ammo();

        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;

        obj.damage = 600;
        obj.distanceFly = 1600;
        obj.speedFly = 100;

        let item =  new Ammo();

        item.position.x = 330;
        item.position.y = 1303;
        item.targetPosition.x = 230;
        item.targetPosition.y = 13230;
        item.rotation = Math.PI / 21;
        item.speed = 3030;
        item.intersectionShape.position.x = 260;
        item.intersectionShape.position.y = 6130;
        item.intersectionShape.radius = 1230;

        let item1 =  new Ammo();

        item1.position.x = 3330;
        item1.position.y = 13303;
        item1.targetPosition.x = 2303;
        item1.targetPosition.y = 132330;
        item1.rotation = Math.PI / 221;
        item1.speed = 30330;
        item1.intersectionShape.position.x = 2260;
        item1.intersectionShape.position.y = 61230;
        item1.intersectionShape.radius = 1220;

        obj.ammos.push(item, item1);
        let cloneAmmo = obj.clone();
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal');
    });

    QUnit.test("clone  set", function (assert) {
        obj = new Ammo();

        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;

        obj.damage = 600;
        obj.distanceFly = 1600;
        obj.speedFly = 100;

        let item =  new Ammo();

        item.position.x = 330;
        item.position.y = 1303;
        item.targetPosition.x = 230;
        item.targetPosition.y = 13230;
        item.rotation = Math.PI / 21;
        item.speed = 3030;
        item.intersectionShape.position.x = 260;
        item.intersectionShape.position.y = 6130;
        item.intersectionShape.radius = 1230;

        let item1 =  new Ammo();

        item1.position.x = 3330;
        item1.position.y = 13303;
        item1.targetPosition.x = 2303;
        item1.targetPosition.y = 132330;
        item1.rotation = Math.PI / 221;
        item1.speed = 30330;
        item1.intersectionShape.position.x = 2260;
        item1.intersectionShape.position.y = 61230;
        item1.intersectionShape.radius = 1220;

        obj.ammos.push(item, item1);

        let cloneAmmo = new Ammo();
        cloneAmmo.clone(obj);
        assert.deepEqual(obj, cloneAmmo, 'ammo is equal clone set');
    });
}
