import * as PIXI from "pixi.js"
import Rocket from "./Rocket.js"

class GameLayout
{
	startGame()
	{
		this._startGame();
	}

	constructor()
	{
		this._fApp_a = null;

		this._createGameLayout();
	}

	_createGameLayout()
	{
		this._fApp_a = new PIXI.Application({
			width: 1920,
			height: 820,
			antialias: true,
			transparent: false,
			resolution: 1
		});

		document.body.appendChild(this._fApp_a.view);

		window.addEventListener("resize", this._fitGameLayout.bind(this));

		this._fitGameLayout();
	}

	_fitGameLayout()
	{
		const lBrowserScreenBounds_obj = { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight};
		const lGameScreenBounds_obj = { w: this._fApp_a.view.offsetWidth, h: this._fApp_a.view.offsetHeight};
		
		let lScaleX_num = 1;
		let lScaleY_num = 1;
		let lScaleCommon_num = 1;

		if (lBrowserScreenBounds_obj.w < lGameScreenBounds_obj.w)
		{
			lScaleX_num = lBrowserScreenBounds_obj.w / lGameScreenBounds_obj.w
		}
		if (lBrowserScreenBounds_obj.h < lGameScreenBounds_obj.h)
		{
			lScaleY_num = lBrowserScreenBounds_obj.h / lGameScreenBounds_obj.h
		}
		lScaleCommon_num = Math.min(lScaleX_num, lScaleY_num);

		const lNewMarginLeft_num = -(lGameScreenBounds_obj.w - (lGameScreenBounds_obj.w * lScaleCommon_num)) / 2;

		const lMarginTopForMovingGameScreenToTop_num = (-(lGameScreenBounds_obj.h - (lGameScreenBounds_obj.h * lScaleCommon_num)) / 2);
		const lCentringOffsetForMarginTop_num = (lBrowserScreenBounds_obj.h - (lGameScreenBounds_obj.h * lScaleCommon_num)) / 2;
		const lNewMarginTop_num = lMarginTopForMovingGameScreenToTop_num + lCentringOffsetForMarginTop_num;

		Object.assign(this._fApp_a.view.style, {
			"transform": "scale(" + lScaleCommon_num + ")",
			"margin-left": lNewMarginLeft_num + "px",
			"margin-top": lNewMarginTop_num + "px"
		});
	}

	_startGame()
	{
		this._fRocket_r = this._fApp_a.stage.addChild(new Rocket());
	}
}

export default GameLayout;