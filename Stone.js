class Stone {
constructor(x,y){
var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}
this.stone = Bodies.rectangle(x, y, width, height, options);
 this.width = width;
 this.height = height;
this.image = loadImage("stone.png");

}
display() {
  var angle = this.body.angle;
  push();
  translate(this.stone.position.x, this.stone.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
      

}



}