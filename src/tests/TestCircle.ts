import {Circle} from "../game/core/collision/Circle";

export function testCircleRun() {
    QUnit.module('Circle');

    let obj: undefined | Circle = undefined;

    QUnit.test("create ", function (assert) {
        let v = new Circle();
        assert.ok(v.position.x == 0, "create  Passed");
        assert.ok(v.position.y == 0, "create  Passed");
        assert.ok(v.radius == 0, "create  Passed");
        v = new Circle(12);
        assert.ok(v.position.x == 12, "create  Passed");
        assert.ok(v.position.y == 0, "create  Passed");
        assert.ok(v.radius == 0, "create  Passed");
        v = new Circle(12, 65);
        assert.ok(v.position.x == 12, "create  Passed");
        assert.ok(v.position.y == 65, "create  Passed");
        assert.ok(v.radius == 0, "create  Passed");
        v = new Circle(12, 65, 598);
        assert.ok(v.position.x == 12, "create  Passed");
        assert.ok(v.position.y == 65, "create  Passed");
        assert.ok(v.radius == 598, "create  Passed");
    });

    QUnit.test(" clone", function (assert) {
        obj = new Circle(12, 65, 598);
        let cloneAmmo = obj.clone();
        assert.deepEqual(obj, cloneAmmo, 'Circle is equal');
    });
    QUnit.test(" clone set", function (assert) {
        obj = new Circle(12, 65, 598);
        let cloneAmmo = new Circle().clone(obj);
        assert.deepEqual(obj, cloneAmmo, 'Circle is equal');
    });

    QUnit.test(" isIntersect", function (assert) {

        let obj1 = new Circle(12, 65, 598);
        let obj2;

        assert.ok(obj1.isIntersect(obj1.clone()), 'Circle isIntersect clone');

        obj1 = new Circle(0, 0, 7);
        obj2 = new Circle(10, 10, 8);
        assert.ok(obj1.isIntersect(obj2), 'Circle isIntersect 0, 0, 10 && 10, 10, 10');

        obj1 = new Circle(-50, -50, 100);
        obj2 = new Circle(50, 50, 100);
        assert.ok(obj1.isIntersect(obj2), 'Circle isIntersect -50, -50, 100 && 50, 50, 100');

        obj1 = new Circle(0, 0, 14.86606 / 2);
        obj2 = new Circle(11, 10, 14.86606 / 2);
        assert.notOk(obj1.isIntersect(obj2), 'Circle isIntersect 0, 0, 10 && 11, 10, 10');

        obj1 = new Circle(0, 0, 14.866069 / 2);
        obj2 = new Circle(11, 10, 14.866069 / 2);
        assert.ok(obj1.isIntersect(obj2), 'Circle isIntersect ');

    });


}
