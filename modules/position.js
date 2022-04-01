export default function Position(evt,canvas){
    let ClientRect = canvas.getBoundingClientRect(), 
          scaleX = canvas.width / ClientRect.width,
          scaleY = canvas.height / ClientRect.height; 
    if(evt.clientX){
          return {
          x: (evt.clientX - ClientRect.left) * scaleX, 
          y: (evt.clientY - ClientRect.top) * scaleY 
      }
    }else if(evt.changedTouches){
    return {
          x: (evt.changedTouches[0].pageX - ClientRect.left) * scaleX, 
          y: (evt.changedTouches[0].pageY - ClientRect.top) * scaleY 
        }
    }else{
      return false
    }
          

}