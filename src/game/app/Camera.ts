import {UpdatableObject} from "../core/interfases/UpdatableObject";
import {MovementObject} from "../core/MovementObject";
import {Vector2} from "../core/Vector2";
import {DisplayObject} from 'pixi.js' ;
import {Application} from 'pixi.js' ;
import {Graphics} from 'pixi.js' ;

export class Camera implements UpdatableObject {

  public mouseVector: Vector2 = new Vector2();
  public view: Graphics;// todo delete
  private target: MovementObject;

  constructor(private app: Application, private world: DisplayObject, _target?: MovementObject) {
    this.target = _target ? _target : new MovementObject();
    this.view = new Graphics();
    this.view.lineStyle(3, 0x0000ff);
    let radius = 20;
    this.view.drawCircle(0, 0, radius);
    this.view.moveTo(-radius, 0);
    this.view.lineTo(radius, 0);
    this.view.moveTo(0, -radius);
    this.view.lineTo(0, radius);
  }

  setTarget(newTarget: MovementObject) {
    this.target = newTarget;
  }

  setWorld(newWorld: DisplayObject) {
    this.world = newWorld;
  }


  update(delta: number): void {
    // this.app.stage.position.set(-this.monsters[0].position.x, -this.monsters[0].position.y)
    let mousePosition = this.app.renderer.plugins.interaction.mouse.global;

    let mousePos = new Vector2(mousePosition.x, mousePosition.y);
    let pos = new Vector2(this.app.renderer.width / 2, this.app.renderer.height / 2);
    mousePos.sub(pos);

    let dist = mousePos.distanceTo(new Vector2());
    mousePos.normalize();
    mousePos.multiplyScalar(dist / 4);
    pos.sub(mousePos);

    this.world.pivot.x = this.target.position.x;
    this.world.pivot.y = this.target.position.y;
    this.world.position.x = pos.x;
    this.world.position.y = pos.y;


    let loc = this.world.toLocal(mousePosition);
    this.mouseVector.set(loc.x, loc.y);
    this.view.position.set(this.mouseVector.x, this.mouseVector.y)
  }


}
