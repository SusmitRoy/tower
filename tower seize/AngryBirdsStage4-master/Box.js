class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,50);
    this.visibility = 250

  }
  display(){
    if((this.body.speed)<2.5){
      super.display();
    }else {
      World.remove(world, this.body);
    }
  }

};
