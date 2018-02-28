import {Command} from "./Command";
import {MovementObject} from "../core/MovementObject";

export class MoveCommand implements Command {

    private a:number =0;

    execute(obj:MovementObject): void {
        // console.log('нужно здвинуть', obj);
    }


}