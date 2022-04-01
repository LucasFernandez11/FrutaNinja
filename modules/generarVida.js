export default function GenerarVida(x,y,container,i){
    let texture;
    if(i == 1){
        texture = PIXI.Texture.from(`./assets/xxxf.png`);
    }else if(i == 2){
        texture = PIXI.Texture.from(`./assets/xxf.png`);
    }else{
        texture = PIXI.Texture.from(`./assets/xf.png`);
    }
    const vida = new PIXI.Sprite(texture);
    vida.anchor.set(0.5);
    vida.zIndex = 100;
    vida.x = x;
    vida.y = y;
    return vida
}