import {MovementObject} from "../game/core/MovementObject";

export function testMovementObjectRun() {
    QUnit.module('MovementObject');

    let obj: undefined | MovementObject = undefined;

    QUnit.test("clone ", function (assert) {
        obj = new MovementObject();
        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;
        let cloneAmmo = obj.clone();
        assert.deepEqual(obj, cloneAmmo, 'MovementObject is equal');
    });
    QUnit.test("clone set", function (assert) {
        obj = new MovementObject();
        obj.position.x = 30;
        obj.position.y = 130;
        obj.targetPosition.x = 130;
        obj.targetPosition.y = 1230;
        obj.rotation = Math.PI / 2;
        obj.speed = 300;
        obj.intersectionShape.position.x = 60;
        obj.intersectionShape.position.y = 610;
        obj.intersectionShape.radius = 120;
        let cloneAmmo = new MovementObject().clone(obj);
        assert.deepEqual(obj, cloneAmmo, 'MovementObject is equal');
    });
}
