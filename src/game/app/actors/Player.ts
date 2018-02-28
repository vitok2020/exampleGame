import {Actor} from "../../core/Actor";
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import Container = PIXI.Container;

export class Player extends Actor {

    view: Container;
    private color: number = 0xffffff;
    private text: Text;

    constructor() {
        super();
        this.view = new Graphics();
        this.intersectionShape.radius = 40;
        this.health = 100;

        let v = (this.view as Graphics);
        v.clear();
        v.lineStyle(10, this.color);
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

    clone(cloneFromObj?: Player): Player {
        let origin: Player;
        let copied: Player;
        if (cloneFromObj) {
            origin = cloneFromObj;
            copied = this;
            super.clone(cloneFromObj);
        } else {
            origin = this;
            copied = new Player();
            copied.clone(this);
        }
        return copied;
    }

}