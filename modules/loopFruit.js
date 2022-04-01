export default function LoopFruit(app,MoveFruit,canvas,stage,Create,container,Fruit,ShortFruit,Collision,ControlVida,GameOver,Start,GenerarVida,ContFruit){
    let urlFruta = ["apple","banana","peach","basaha","sandia","boom"]
    app.ticker.add(gameLoop)
    async function gameLoop(delta){
      delta = 0.5
        if(Time){
          if(CantidadVidas < 3){
            if(Fruta.length !== 0){
              
            Time = false
            for (let i = 0; i < Fruta.length; i++) {
              EventLoop.forEach((el)=>app.ticker.remove(el))
              EventLoop = []
              let tiempo = Math.floor(Math.random() * (5000 - 0)) + 0
              let fruta1 = await Fruta[i]
              setTimeout(()=>Fruit(app,MoveFruit,canvas,stage,container,fruta1,ShortFruit,Collision,ControlVida,GameOver,Start,GenerarVida,ContFruit), tiempo)
            }
          }else{
            await generar()
            await generar()
            await generar()
          }
        }else{
          GameOver(container,Start,app,Collision,ShortFruit,GenerarVida,ContFruit)
        }
        }
        
}
function generar(){
  let frutaelig = Math.floor(Math.random() * (urlFruta.length - 0)) + 0
  let data = Create(canvas,container,urlFruta[frutaelig])
  Fruta.push({fruta:data.fruta,id:Fruta.length,shadow:data.shadow,url:urlFruta[frutaelig]})
}
}