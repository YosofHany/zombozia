class SomeThing
{
  x=0;y=0;
  dx=0;dy=0;
  
  photo=new Image();
  
  //direction="R";
  
  static b= [];
  
  spawn()
  {
    this.x+=this.dx;this.y+=this.dy;
    c2.drawImage(this.photo,this.x-(this.photo.width/2),this.y-(this.photo.height/2),this.photo.width,this.photo.height);
  }
  static sspawn(classname){
    eval(classname).b.forEach(function(element){element.spawn()});
  }
 // static add(ex,way){var t=new this();t.x=ex;t.y=way;this.b.push(t);}

  static add(ex,way,DX,DY,foto,s){var t=new this();t.spawn=s;t.photo=foto;t.x=ex;t.y=way;t.dx=DX;t.dy=DY;this.b.push(t);}

 // static add(ex,way,s){var t=new this();this.spawn=s;t.x=ex;t.y=way;this.b.push(t);}
}
