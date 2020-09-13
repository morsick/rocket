
import * as PIXI from "pixi.js"
import * as config from './config/assets.json';
import EventEmitter from "./EventEmitter.js"

class ResourceLoader extends EventEmitter
{
	static ALL_RESOURCE_LOADED() { return "ALL_RESOURCE_LOADED"};
	
	startLoad()
	{
		this._startLoad();
	}

	constructor()
	{
		super();
	}

	get _assetsLoadQueue()
	{
		let lAssetsConfog_arr = config.default;
		let lAssetsQueue_arr = [];

		lAssetsConfog_arr.forEach(element => {
			lAssetsQueue_arr.push(element.src)
		});

		return lAssetsQueue_arr;
	}

	_startLoad()
	{
		console.log("!@!", this._assetsLoadQueue);

		PIXI.Loader.shared.add(this._assetsLoadQueue).load(this._onAllAssetsLoaded.bind(this));
	}

	_onAllAssetsLoaded()
	{
		console.log("!@! onAllAssetsLoaded");

		this.emit(ResourceLoader.ALL_RESOURCE_LOADED);
	}
}

export default ResourceLoader;