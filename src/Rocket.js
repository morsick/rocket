import Sprite from "./Sprite"
import * as PIXI from "pixi.js"

class Rocket extends Sprite
{
	constructor()
	{
		super();

		this._createBody();
	}

	_createBody()
	{
		let lBody_spr = this.addChild(new PIXI.Sprite.from("assets/images/rocket.png"));
	}
}

export default Rocket;