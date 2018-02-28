import {Vector2} from "../game/core/Vector2";

export function testVectorRun() {

    QUnit.module('Vector2');

    let v: undefined | Vector2 = undefined;

    QUnit.test("create ", function (assert) {
        let v = new Vector2();
        assert.ok(v.x == 0, "create  Passed");
        assert.ok(v.y == 0, "create  Passed");
        v = new Vector2(12);
        assert.ok(v.x == 12, "create  Passed");
        assert.ok(v.y == 0, "create  Passed");
        v = new Vector2(12, 65);
        assert.ok(v.x == 12, "create  Passed");
        assert.ok(v.y == 65, "create  Passed");
    });

    QUnit.test("clone ", function (assert) {
        v = new Vector2(32, 56);
        let clone = v.clone();
        assert.deepEqual(v, clone, 'Vector2 is equal');
    });
    QUnit.test("clone set", function (assert) {
        v = new Vector2(32, 56);
        let clone = new Vector2().clone(v);
        assert.deepEqual(v, clone, 'Vector2  clone set');
    });
    QUnit.test("distanceTo ", function (assert) {
        let v = new Vector2(0, 0);
        let v1 = new Vector2(0, 0);
        assert.equal(v.distanceTo(v1), 0, 'distanceTo 0 - 0');

        v = new Vector2(0, 0);
        v1 = new Vector2(100, 0);
        assert.equal(v.distanceTo(v1), 100, 'distanceTo 0,0, - 100,0');

        v = new Vector2(0, 0);
        v1 = new Vector2(100, 100);
        assert.equal(v.distanceTo(v1).toFixed(3), 141.421, 'distanceTo 0,0, - 100,100');

        v = new Vector2(-50, 65);
        v1 = new Vector2(100, 100);
        assert.equal(v.distanceTo(v1).toFixed(3), 154.029, 'distanceTo -50, 65, - 100,100');
        v = new Vector2(-100, -50);
        v1 = new Vector2(30, -90);
        assert.equal(v.distanceTo(v1).toFixed(3), 136.015, 'distanceTo -100, -50, -30, -90');
    });

    QUnit.test(" set", function (assert) {
        v = new Vector2(32, 56);
        assert.equal(v.x, 32, 'Vector2  set');
        assert.equal(v.y, 56, 'Vector2  set');
        v.set(new Vector2(56,5));
        assert.equal(v.x, 56, 'Vector2  set');
        assert.equal(v.y, 5, 'Vector2  set');

        v = new Vector2(32, 56);
        v.set(3);
        assert.equal(v.x, 3, 'Vector2  set');
        assert.equal(v.y, 3, 'Vector2  set');
        v = new Vector2(32, 56);
        v.set(388, 896);
        assert.equal(v.x, 388, 'Vector2  set');
        assert.equal(v.y, 896, 'Vector2  set');
    });
}
