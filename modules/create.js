export default function Create(canvas,container,url){
    const texture = PIXI.Texture.from(`./assets/fruit/${url}.png`);
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.zIndex = 100;
    bunny.x = -1000;
    bunny.y = -1000;
    container.addChild(bunny);
    const texture2 = PIXI.Texture.from(`./assets/shadow.png`);
    const bunny2 = new PIXI.Sprite(texture2);
    bunny2.anchor.set(0.5);
    bunny2.zIndex = 100;
    bunny2.x = -1000;
    bunny2.y = -1000;
    container.addChild(bunny2);
    return {fruta:bunny,shadow:bunny2}
}