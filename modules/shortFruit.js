export default function ShortFruit(x,y,app,container,url,scale){
    let color1,
    color2



    if(url == "banana"){
        color1="fff569"
    color2 ="f7f5b4"
    }else if(url == "apple"){
        color1="3ee68f"
        color2 ="2ded3d"
}else if(url == "basaha"){
    color1="f75e5e"
    color2 ="fa1919"
}else if(url == "peach"){
    color1="fd1111"
    color2 ="f7a134"
}else if(url == "sandia"){
    color1="f75e5e"
    color2 ="f74d4d"
}
    let emitter = new PIXI.particles.Emitter(

       
        container,
    
        
        [PIXI.Texture.from('image.jpg')],
    
       
        {
            "alpha": {
                "start": 0.8,
                "end": 0.1
            },
            "scale": {
                "start": 0.3,
                "end":.5
            },
            "color": {
                "start": color1,
                "end": color2
            },
            "speed": {
                "start": 200,
                "end": 200
            },
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.5
            },
            "frequency": 0.1,
            "emitterLifetime": 0.31,
            "maxParticles": 1000,
            "pos": {
                "x": x,
                "y": y
            },
            "addAtBack": false,
            "spawnType": "burst",
            "particlesPerWave": 10,
            "particleSpacing": 0,
            "angleStart": 0
        }
    );
    
   
    let elapsed = Date.now();
   
    var update = function(){
    
        
        requestAnimationFrame(update);
    
        var now = Date.now();
        
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;

        
    };
    
    
    // Start emitting
    emitter.emit = true;
    emitter._destroyWhenComplete = true
    setInterval(()=>{
        emitter.emit = false
    },100)
    // Start the update
    update();
    



    const texture1 = PIXI.Texture.from(`./assets/fruit/${url}-1.png`);
    const shortFruit1 = new PIXI.Sprite(texture1);
    shortFruit1.anchor.set(0.5);
    shortFruit1.zIndex = 100;
    shortFruit1.x = x;
    shortFruit1.y = y;
    shortFruit1.transform.scale._x = scale || 1
    shortFruit1.transform.scale._y = scale || 1
    container.addChild(shortFruit1);
    const texture2 = PIXI.Texture.from(`./assets/fruit/${url}-2.png`);
    const shortFruit2 = new PIXI.Sprite(texture2);
    shortFruit2.anchor.set(0.5);
    shortFruit2.zIndex = 100;
    shortFruit2.x = x;
    shortFruit2.y = y;
    shortFruit2.transform.scale._x = scale || 1
    shortFruit2.transform.scale._y = scale || 1
    container.addChild(shortFruit2);
    const texture3 = PIXI.Texture.from(`./assets/flash.png`);
    const flash = new PIXI.Sprite(texture3);
    flash.anchor.set(0.5);
    flash.zIndex = 100;
    flash.x = x;
    flash.y = y;
    container.addChild(flash);
    if(DirectionState == "arriba left" || DirectionState == "abajo right"){
        flash.rotation = 0.5
        if(url == "peach"){
            shortFruit2.rotation = 6 
            shortFruit1.rotation = 6
        }else if(url == "sandia"){
            shortFruit2.rotation = 5.4
            shortFruit1.rotation = 5.4
        }
        else if(url == "banana"){
            shortFruit2.rotation = 5.4
            shortFruit1.rotation = 5.4
        }
        else if(url == "basaha"){
            shortFruit2.rotation = 4.6
            shortFruit1.rotation = 4.6
        }else if(url == "apple"){
            shortFruit2.rotation = 0
            shortFruit1.rotation = 0
        }
    }
    if(DirectionState == "arriba " || DirectionState == "abajo "){
        flash.rotation = 1.5
        if(url == "banana"){
            shortFruit2.rotation = 0.15 
            shortFruit1.rotation = 0.15
        }else if(url == "apple"){
        shortFruit2.rotation = 0.7
        shortFruit1.rotation = 0.7
    }else if(url == "basaha"){
        shortFruit2.rotation = 5.5
        shortFruit1.rotation = 5.5
    }else if(url == "peach"){
        shortFruit2.rotation = 0.8
        shortFruit1.rotation = 0.8
    }else if(url == "sandia"){
        shortFruit2.rotation = 0
        shortFruit1.rotation = 0
    }
    }
    if(DirectionState == "left" || DirectionState == "right"){
        flash.rotation = 0

        if(url == "peach"){
            shortFruit2.rotation = 2.3 
            shortFruit1.rotation = 2.3
        }else if(url == "sandia"){
            shortFruit2.rotation = 1.5
            shortFruit1.rotation = 1.5
        }
        else if(url == "banana"){
            shortFruit2.rotation = 1.7
            shortFruit1.rotation = 1.7
        }
        else if(url == "basaha"){
            shortFruit2.rotation = 0.7
            shortFruit1.rotation = 0.7
        }else if(url == "apple"){
            shortFruit2.rotation = 2.2
            shortFruit1.rotation = 2.2
        }
    }
    if(DirectionState == "arriba right" || DirectionState == "abajo left"){
        flash.rotation = 2.5
        if(url == "peach"){
            shortFruit2.rotation = 1.3
            shortFruit1.rotation = 1.3
        }else if(url == "sandia"){
            shortFruit2.rotation = 0.5
            shortFruit1.rotation = 0.5
        }
        else if(url == "banana"){
            shortFruit2.rotation = 0.6
            shortFruit1.rotation = 0.6
        }
        else if(url == "basaha"){
            shortFruit2.rotation = 0
            shortFruit1.rotation = 0
        }else if(url == "apple"){
            shortFruit2.rotation = 1.4
            shortFruit1.rotation = 1.4
        }
    }


    setTimeout(()=>{
        container.removeChild(flash)
    },100)

    let ticker = app.ticker.add(gameLoop)

    function gameLoop(delta){
        delta = 0.5
        if(shortFruit1.y < 600){
            if(url == "banana"){
                shortFruit1.y += delta + 5;
                shortFruit2.y += delta + 5;
                shortFruit1.x += delta;
                shortFruit2.x -= delta;
            }else if(url == "peach" || url == "sandia" || url == "banana" || url == "basaha" || url == "apple"){
                shortFruit1.y += 2 + 5;
                shortFruit2.y += 2 + 5;
                shortFruit1.x -= 2;
                shortFruit2.x += 2;
            }else{
                shortFruit1.y += delta + 5;
                shortFruit2.y += delta + 5;
                shortFruit1.x -= delta;
                shortFruit2.x += delta;
            }
        }else{
            container.removeChild(shortFruit1)
            container.removeChild(shortFruit2)
            app.ticker.remove(gameLoop);
        }   
}



}