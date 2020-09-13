import * as PIXI from "pixi.js"
import EventEmitter from "./EventEmitter.js"

class Sprite extends PIXI.Sprite
{
	constructor()
	{
		super();

		this._fEventEmitter_ee = new EventEmitter();
	}

	on(eventName, fn)
	{
		this._fEventEmitter_ee.on(eventName, fn);
	}

	emit(eventName, data)
	{
		this._fEventEmitter_ee.on(eventName, data);
	}
}

export default Sprite