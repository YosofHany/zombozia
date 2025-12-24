class Other {

life=20;
color="#eeeeee";
x=0;y=0;dx=0;dy=0;
bonus(){}
spawn(){this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);c2.fillStyle=this.color;c2.fillRect(this.x-(this.life/2),this.y-(this.life/2),this.life,this.life);this.bonus();}

static b = [];
static sspawn(){for(var a=0;a<(Other.b.length);a++){Other.b[a].spawn();if(Other.b[a].life<=0){Other.b=rfa(Other.b,a)};}};
static add(X,Y,DX,DY,s){var t=new Other();t.x=X;t.y=Y;t.dx=DX;t.dy=DY;t.spawn=s;Other.b.push(t)};
static add(X,Y,DX,DY){var t=new Other();t.x=X;t.y=Y;t.dx=DX;t.dy=DY;Other.b.push(t)};
}
