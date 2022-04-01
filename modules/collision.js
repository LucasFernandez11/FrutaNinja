export default function Collision(a, b){
    var ab = a
    var bb = b
   
    return ab.x < bb.x + (bb.width/2) &&
    ab.x + ab.width > bb.x - (bb.width/2)&&
    ab.y < bb.y + (bb.height/2) &&
    ab.height + ab.y > bb.y - (bb.height/2)
}