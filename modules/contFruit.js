export default function ContFruit(container,app){
    const texture = PIXI.Texture.from(`./assets/score.png`);
    const fruit = new PIXI.Sprite(texture);
    fruit.anchor.set(0.5);
    fruit.zIndex = 100;
    fruit.x = 40;
    fruit.y = 40;
    fruit.transform.scale._x = 1
    fruit.transform.scale._y = 1
    fruit.alpha = 1
    Sprite.cont = {fruta:fruit}

    const style = new PIXI.TextStyle({
        fill: [
            "#fae469",
            "#ff8b23"
        ],
        fillGradientStops: [
            0.2,
            0.1
        ],
        fontFamily: "Helvetica",
        fontWeight: 900,
        strokeThickness: 1
    });
    const text = new PIXI.Text('0', style);
    text.x = 70
    text.y = 25
    Sprite.text = text
}