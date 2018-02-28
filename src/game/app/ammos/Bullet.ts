import {Ammo} from "../../core/Ammo";
import Container = PIXI.Container;
import Text = PIXI.Text;
import Graphics = PIXI.Graphics;

export class Bullet extends Ammo {
    view: Container;
    private color: number = 0xff9955;
    private text: Text;



    constructor() {
        super();

        this.damage = 5;

        this.view = new Graphics();
        this.intersectionShape.radius = 10;

        let v = (this.view as Graphics);
        v.clear();
        v.lineStyle(2, this.color);
        v.moveTo(0, 0);
        v.lineTo(this.intersectionShape.radius, 0);
        v.drawCircle(0, 0, this.intersectionShape.radius);

        this.text = new Text('0,0');
        this.view.addChild(this.text);
    }


    update(delta: number) {
        super.update(delta);
        this.updateView()
    }

    private updateView() {
        this.view.position.set(this.position.x, this.position.y);
        this.view.rotation = this.rotation;
        this.text.text = '' + this.position.x + ' - ' + this.position.y;
    }



    clone(cloneFromObj?: Bullet): Bullet {
        let origin: Bullet;
        let copied: Bullet;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Bullet();
            copied.clone(this);
        }
        return copied;
    }
}