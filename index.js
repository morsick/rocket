import GameLayout from "./src/GameLayout.js"
import ResourceLoader from "./src/ResourceLoader.js"

const bodyNode = document.body || document.getElementsByTagName('body')[0];
Object.assign(bodyNode.style, { "padding": "0", "margin": "0", "overflow": "hidden"});

let lGameLayout_gl = new GameLayout();
let lResourceLoader_rl = new ResourceLoader();
lResourceLoader_rl.startLoad();
lResourceLoader_rl.on(ResourceLoader.ALL_RESOURCE_LOADED, () => {lGameLayout_gl.startGame()})
