import Collision from "./modules/collision.js";
import ContFruit from "./modules/contFruit.js";
import controlVida from "./modules/controlVidas.js";
import Create from "./modules/create.js";
import Direction from "./modules/direction.js";
import EfectClick from "./modules/efect-click.js"
import Fruit from "./modules/fruit.js";
import GameOver from "./modules/gameover.js";
import GenerarVida from "./modules/generarVida.js";
import LoopFruit from "./modules/loopFruit.js";
import MoveFruit from "./modules/moveFriut.js";
import Position from "./modules/position.js";
import ShortFruit from "./modules/shortFruit.js";
import Start from "./modules/start.js";



const app = new PIXI.Application({backgroundAlpha:0});
document.querySelector(".container").appendChild(app.view);
app.loader.add('t1', './assets/background.jpg');
const canvas = document.querySelector("canvas")




function setup(loader, resources) {
    const { stage } = app;
const background = new PIXI.Sprite(resources.t1.texture);
stage.addChild(background);
background.width = app.screen.width;
background.height = app.screen.height;
background.zIndex = 1000;
EfectClick(canvas,Position,app,Create,Collision,MoveFruit,Fruit,LoopFruit,ShortFruit,GenerarVida,controlVida,GameOver,Start,ContFruit)
 
}


document.addEventListener("DOMContentLoaded",async(e)=>{
    app.loader.load(setup)
    Direction(canvas)
})

Height = canvas.height
Width = canvas.width

