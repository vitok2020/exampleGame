/**
 * - NOTE: it would be quite easy to push event-driven too
 *   - microevent.js for events handling
 *   - in this._onkeyChange, generate a string from the DOM event
 *   - use this as event name
 */

export class KeyboardState {
    static MODIFIERS: any = ['shift', 'ctrl', 'alt', 'meta'];
    static ALIAS: any = {
        'left': 37,
        'up': 38,
        'right': 39,
        'down': 40,
        'space': 32,
        'pageup': 33,
        'pagedown': 34,
        'tab': 9
    };

    keyCodes: any;
    modifiers: any;

    constructor() {
        this.keyCodes = {};
        this.modifiers = {};
        document.addEventListener("keydown", this._onKeyDown.bind(this), false);
        document.addEventListener("keyup", this._onKeyUp.bind(this), false);
    }

    /**
     * To stop listening of the keyboard events
     */
    destroy() {
        document.removeEventListener("keydown", this._onKeyDown, false);
        document.removeEventListener("keyup", this._onKeyUp, false);
    }

    /**
     * query keyboard state to know if a key is pressed of not
     *
     * @param {String} keyDesc the description of the key. format : modifiers+key e.g shift+A
     * @returns {Boolean} true if the key is pressed, false otherwise
     */
    pressed(keyDesc: string) {
        let keys = keyDesc.split("+");
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let pressed;
            if (KeyboardState.MODIFIERS.indexOf(key) !== -1) {
                pressed = this.modifiers[key];
            } else if (Object.keys(KeyboardState.ALIAS).indexOf(key) != -1) {
                pressed = this.keyCodes[KeyboardState.ALIAS[key]];
            } else {
                pressed = this.keyCodes[key.toUpperCase().charCodeAt(0)]
            }
            if (!pressed) return false;
        }
        return true;
    }

    private _onKeyDown(event: any) {
        this._onKeyChange(event, true);
    }

    private _onKeyUp(event: any) {
        this._onKeyChange(event, false);
    }

    /**
     * to process the keyboard dom event
     */
    private _onKeyChange(event: any, pressed: boolean) {
        let keyCode = event.keyCode;
        this.keyCodes[keyCode] = pressed;
        this.modifiers['shift'] = event.shiftKey;
        this.modifiers['ctrl'] = event.ctrlKey;
        this.modifiers['alt'] = event.altKey;
        this.modifiers['meta'] = event.metaKey;
    }
}





