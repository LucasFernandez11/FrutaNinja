export default function Direction(canvas){
let oldx = 0,
oldy = 0,
nowx = 0,
nowy = 0,
listo = true,
mousemovemethod = function (e) {
    nowx = e.pageX || e.changedTouches[0].pageX;
    nowy = e.pageY || e.changedTouches[0].pageY
    DirectionState = ""
    if (nowy < oldy-5) {
        DirectionState = "arriba "
        if (nowx < oldx-5) {
            DirectionState += "left"
            listo = false
        } else if (nowx> oldx+5 ) {
            DirectionState += "right"
            listo = false
        }
    } else if (nowy > oldy+5) {
        DirectionState = "abajo "
        if (nowx < oldx-5) {
            DirectionState += "left"
            listo = false
        } else if (nowx > oldx+5) {
            DirectionState += "right"
            listo = false
        }
    }
    else if (nowx < oldx && listo) {
        DirectionState = "left"
    } else if (nowx > oldx && listo) {
        DirectionState = "right"
    }
    oldx = e.pageX || e.changedTouches[0].pageX;
    oldy = e.pageY || e.changedTouches[0].pageY
    
    listo = true
}

canvas.addEventListener('mousemove', mousemovemethod);
canvas.addEventListener('touchmove', (e) =>{
    mousemovemethod(e)
})
}