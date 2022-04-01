export default function GameOver(container,Start,app,Collision,ShortFruit,GenerarVida,ContFruit){
    Fruta.forEach(el => {
        container.removeChild(el.fruta)
        container.removeChild(el.shadow)
      });
      NoVidas.forEach(el=>container.removeChild(el))
      Vidas.forEach(el=>container.removeChild(el))
      NoVidas = []
      Vidas = []
    Time = false
    const texture = PIXI.Texture.from(`./assets/game-over.png`);
    const over = new PIXI.Sprite(texture);
    over.anchor.set(0.5);
    over.zIndex = 100;
    over.x = Width/2;
    over.y = Height/2;
    container.addChild(over);
    container.removeChild(Sprite.cont.fruta)
    app.stage.removeChild(Sprite.text)
    Sprite.text.text = "0"
    setTimeout(()=>{
        container.removeChild(over)
        Start(container,app,Collision,ShortFruit,GenerarVida,ContFruit)
    },1000)
}