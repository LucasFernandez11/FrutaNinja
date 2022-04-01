export default function EfectClick(canvas,Position,app,Create,Collision,MoveFruit,Fruit,LoopFruit,ShortFruit,GenerarVida,ControlVida,GameOver,Start,ContFruit) {
  const container = new PIXI.Container();
  app.stage.addChild(container);
  const { stage } = app;
  let historyX = [];
  let historyY = [];
  let rope
  const trailTexture = PIXI.Texture.from('./assets/smoke2.png');
  const historySize = 20;
  const ropeSize = 100;
  let points = [];
  let ultimo = {}
  Start(container,app,Collision,ShortFruit,GenerarVida,ContFruit)
  LoopFruit(app,MoveFruit,canvas,stage,Create,container,Fruit,ShortFruit,Collision,ControlVida,GameOver,Start,GenerarVida,ContFruit)
  ContFruit(container,app)
    // Create history array.
    for (let i = 0; i < ropeSize; i++) {
        points.push(new PIXI.Point(0, 0));
    }
    rope = new PIXI.SimpleRope(trailTexture, points);

    rope.blendmode = PIXI.BLEND_MODES.ADD;
    

function remove(event){
  for (let i = 0; i < historySize; i++) {
    historyX.pop();
    historyX.unshift(Position(event,canvas).x);
    historyY.pop();
    historyY.unshift(Position(event,canvas).y);
    for (let i = 0; i < ropeSize; i++) {
        const p = points[i];
        const ix = cubicInterpolation(historyX, i / ropeSize * historySize);
        const iy = cubicInterpolation(historyY, i / ropeSize * historySize);
        p.x = ix;
        p.y = iy;
    }
    }
    setTimeout(()=>app.stage.removeChild(rope),100)
    
 }


     function create(event){
      if(Controle){
      for (let i = 0; i < historySize; i++) {
        historyX.push(Position(event,canvas).x);
        historyY.push(Position(event,canvas).y);
      }


      
  }

      ultimo ={ x:Position(event,canvas).x,y:Position(event,canvas).y}
      X=Position(event,canvas).x;
      Y=Position(event,canvas).y;
    }


    app.ticker.add((delta) => {
      if(Controle){
      historyX.pop();
      historyX.unshift(ultimo.x);
      historyY.pop();
      historyY.unshift(ultimo.y);
      for (let i = 0; i < ropeSize; i++) {
          const p = points[i];
          const ix = cubicInterpolation(historyX, i / ropeSize * historySize);
          const iy = cubicInterpolation(historyY, i / ropeSize * historySize);
          p.x = ix;
          p.y = iy;
      }
    
    }
    
  });

    function clipInput(k, arr) {
        if (k < 0) k = 0;
        if (k > arr.length - 1) k = arr.length - 1;
        return arr[k];
    }
    
    function getTangent(k, factor, array) {
        return factor * (clipInput(k + 1, array) - clipInput(k - 1, array)) / 2;
    }
    
    function cubicInterpolation(array, t, tangentFactor) {
        if (tangentFactor == null) tangentFactor = 1;
    
        const k = Math.floor(t);
        const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
        const p = [clipInput(k, array), clipInput(k + 1, array)];
        t -= k;
        const t2 = t * t;
        const t3 = t * t2;
        return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
    }
  //======================================================================
  // EVENTOS
  //======================================================================
  // Eventos raton
canvas.addEventListener('mousemove',(e)=>{
  create(e,false)
}, false);
canvas.addEventListener('mousedown', (event)=> {
  historyX = []
  historyY = []
  Controle = true
  app.stage.addChild(rope);
  
}, false);

canvas.addEventListener('mouseup',(event)=> {
  Controle = false
    historyX = []
    historyY = []
    remove(event)
}, false);

//  Eventos pantallas táctiles
canvas.addEventListener('touchstart',(event)=> {
  create(event)
  app.stage.addChild(rope);
  Controle=true
  window.innerHeight == 5000
}, false);
canvas.addEventListener('touchend',(event)=> {
  Controle = false
    historyX = []
    historyY = []
    remove(event)
}, false);
canvas.addEventListener('touchmove', create, false);

}
