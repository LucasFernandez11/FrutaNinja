export default function controlVida(operacion,container,x){
    for (let i = 1; i <= 3; i++) {
        if(operacion){

        }else{
            if(Vidas.lenght !== 0){
            NoVidas.forEach(el=>container.addChild(el))
            for (let i = 2; i > 2-CantidadVidas; i--) {
                let texture;
            if(i == 0){
                    texture = PIXI.Texture.from(`./assets/xxx.png`);
                }else if(i == 1){
                    texture = PIXI.Texture.from(`./assets/xx.png`);
                }else{
                    texture = PIXI.Texture.from(`./assets/x.png`);
                }
           
            const vida = new PIXI.Sprite(texture);
            vida.anchor.set(0.5);
            vida.zIndex = 100;
            vida.x = Vidas[i].x;
            vida.y = Vidas[i].y;
            NoVidas.push(vida)
            container.removeChild(Vidas[i])
            container.addChild(vida);
            } const texture2 = PIXI.Texture.from(`./assets/xxf.png`);
            const cruz = new PIXI.Sprite(texture2);
            cruz.anchor.set(0.5);
            cruz.zIndex = 100;
            cruz.x = x;
            cruz.y = Height - 40;
            container.addChild(cruz);

            setTimeout(()=>container.removeChild(cruz),500)
        }}
        
    }
}