export default function Fruit(app,MoveFruit,canvas,stage,container,fruta1,ShortFruit,Collision,ControlVida,GameOver,Start,GenerarVida,ContFruit){
  let co = 0
    let mover = Math.floor(Math.random() * (800 - (-400))) + (-400)
    let movimiento = MoveFruit(canvas.width,canvas,stage,mover)
    let vuelta = movimiento.length
    app.ticker.add(gameLoop)
    EventLoop.push(gameLoop)
    function gameLoop(delta){
      delta = 0.5
      if(CantidadVidas < 3){
      if(fruta1 == undefined){
      if(Fruta.length == 0){
        Time = true 
      }
      app.ticker.remove(gameLoop);
      }else{
    if(co < vuelta){
      
      fruta1.fruta.x = movimiento[co].x*delta;
      fruta1.fruta.y = movimiento[co].y*delta;
      fruta1.shadow.x = movimiento[co].x*delta+ 20;
      fruta1.shadow.y = movimiento[co].y*delta + 60;
      fruta1.fruta.rotation += 0.1*delta
      if(Controle){
      if(Collision({x:X,y:Y,width:10,height:10},fruta1.fruta)){
        if(fruta1.url !== "boom"){
        Cortadas++
        Sprite.text.text = Cortadas
        app.ticker.remove(gameLoop);
        
        ShortFruit(fruta1.fruta.x,fruta1.fruta.y,app,container,fruta1.url)
        container.removeChild(fruta1.fruta)
        container.removeChild(fruta1.shadow)
        DirectionState = ""
        Fruta = Fruta.filter((e)=>{
         if( e.id !== fruta1.id){
           return e
          }else{
            return  null
          }
        })
        if(Fruta.length == 0){
          Time = true
        }
        app.ticker.remove(gameLoop);
    }else if(fruta1.url == "boom"){
      GameOver(container,Start,app,Collision,ShortFruit,GenerarVida,ContFruit)
      app.ticker.remove(gameLoop);
    }}
  }
      co++
     
      
    }else{
      if(fruta1.url !== "boom"){
     CantidadVidas++
     ControlVida(false,container,fruta1.fruta.x)
      }Fruta = Fruta.filter((e)=>{
        if( e.id !== fruta1.id){
          return e
         }else{
           return  null
         }
       })
       if(Fruta.length == 0){
         Time = true
       }
       container.removeChild(fruta1.fruta)
       container.removeChild(fruta1.shadow)
       co = 0
      app.ticker.remove(gameLoop);
    }}

    }else{
      GameOver(container,Start,app,Collision,ShortFruit,GenerarVida,ContFruit)
      app.ticker.remove(gameLoop);
    }
  }
    
}