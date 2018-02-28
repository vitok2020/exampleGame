

import {MovementObject} from "../core/MovementObject";

export interface Command {
    execute(obj:MovementObject): void;
}