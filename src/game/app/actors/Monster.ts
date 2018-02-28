import {Actor} from "../../core/Actor";
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import Container = PIXI.Container;

export class Monster extends Actor {

    view: Container;
    private color: number = 0xffffff* Math.random();
    private text: Text;
    private textHealth: Text;

    constructor() {
        super();
        this.view = new Graphics();
        this.intersectionShape.radius = 50;
        this.health = 100;

        let v = (this.view as Graphics);
        v.clear();
        v.lineStyle(10, this.color);
        v.moveTo(0, 0);
        v.lineTo(this.intersectionShape.radius, 0);
        v.drawCircle(0, 0, this.intersectionShape.radius);


        this.text = new Text('0,0');
        this.textHealth = new Text('0');
        this.textHealth.style.fill = 0xFF0000;
        this.view.addChild(this.text);
        this.view.addChild(this.textHealth);
    }


    update(delta: number) {
        super.update(delta);
        this.updateView()
    }

    private updateView() {
        this.view.position.set(this.position.x, this.position.y);
        this.view.rotation = this.rotation;
        this.position.round();
        this.text.text = '' + this.position.x + ' - ' + this.position.y;
        this.textHealth.text = this.health.toString();
    }

    clone(cloneFromObj?: Monster): Monster {
        let origin: Monster;
        let copied: Monster;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Monster();
            copied.clone(this);
        }

        return copied;
    }

}