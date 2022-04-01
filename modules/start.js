export default function Start(container,app,Collision,ShortFruit,GenerarVida,ContFruit){
    Time = false
    const texture = PIXI.Texture.from(`./assets/fruit/sandia.png`);
    const fruit = new PIXI.Sprite(texture);
    fruit.anchor.set(0.5);
    fruit.zIndex = 100;
    fruit.x = Width/2;
    fruit.y = Height/2 + 100;
    fruit.transform.scale._x = 1.5
    fruit.transform.scale._y = 1.5
    container.addChild(fruit);
    
    const texture2 = PIXI.Texture.from(`./assets/new-game.png`);
    const dojo = new PIXI.Sprite(texture2);
    dojo.anchor.set(0.5);
    dojo.zIndex = 100;
    dojo.x = Width/2;
    dojo.y = Height/2 + 100;
    dojo.transform.scale._x = 1.5
    dojo.transform.scale._y = 1.5
    container.addChild(dojo);

    const texture3 = PIXI.Texture.from(`./assets/home-mask.png`);
    const mask = new PIXI.Sprite(texture3);
    mask.anchor.set(0.5);
    mask.zIndex = 100;
    mask.x = 400;
    mask.y = 100;
    mask.transform.scale._x = 1.5
    mask.transform.scale._y = 1.5
    mask.alpha = 0.7
    container.addChild(mask);

    const texture4 = PIXI.Texture.from(`./assets/logo.png`);
    const logo = new PIXI.Sprite(texture4);
    logo.anchor.set(0.5);
    logo.zIndex = 100;
    logo.x = 200;
    logo.y = 90;
    logo.transform.scale._x = 1.2
    logo.transform.scale._y = 1.2
    container.addChild(logo);

    const texture5 = PIXI.Texture.from(`./assets/home-desc.png`);
    const desc = new PIXI.Sprite(texture5);
    desc.anchor.set(0.5);
    desc.zIndex = 100;
    desc.x = 100;
    desc.y = 210;
    desc.transform.scale._x = 1
    desc.transform.scale._y = 1
    container.addChild(desc);


    const texture6 = PIXI.Texture.from(`./assets/ninja.png`);
    const ninja = new PIXI.Sprite(texture6);
    ninja.anchor.set(0.5);
    ninja.zIndex = 100;
    ninja.x = 480;
    ninja.y = 110;
   ninja.transform.scale._x = 1.2
    ninja.transform.scale._y = 1.2
    container.addChild(ninja);
    
    Fruta=[]


    
    Cortadas = 0
    CantidadVidas = 0
    app.ticker.add(gameLoop)
    async function gameLoop(delta){
        fruit.rotation += 0.15*0.1
        dojo.rotation -= 0.1*0.1
        if(Controle){
        if(Collision({x:X,y:Y,width:10,height:10},fruit)){
            app.ticker.remove(gameLoop);
            ShortFruit( fruit.x, fruit.y,app,container,"sandia",1.5)
            container.removeChild(dojo)
            container.removeChild(fruit)
            container.removeChild(mask)
            container.removeChild(logo)
            container.removeChild(desc)
            container.removeChild(ninja)
            container.addChild(Sprite.cont.fruta);
            app.stage.addChild(Sprite.text);
            Time = true
            for (let i = 1; i <= 3; i++) {
                Vidas.push(GenerarVida(Width-(40*i),40,container,i))
                container.addChild(Vidas[i-1]);
            }
            app.ticker.remove(gameLoop);
        }
    }
}
}
