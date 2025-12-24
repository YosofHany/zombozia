function wakeSomeZombies(user="zox",amount=5,range=550,
  targetx=document.querySelector("canvas").width/2,
  targety=document.querySelector("canvas").height/2,
  timeTaken=amount/2){
  let t =new Other();t.x=(148*timeTaken)/amount;t.y=amount;t.dx=targetx;t.dy=targety;t.life=range;
  //dx and dy here are the x and the y of waking zombies
  t.spawn=function(){if(this.y<=0){this.life=0}
  if(this.x>0){this.x-=(148/FPS)}
  else{
wakeupZomby(
    this.dx+this.life*(Math.random()-0.5),
    this.dy+this.life*(Math.random()-0.5))
    ;t.x=(148*timeTaken)/amount;this.y--;}}
Other.b.push(t);
}
class Zomby{
target="player";
x=0;y=0;
bodyx= eval(this.target).x-this.x;bodyy= eval(this.target).y- this.y;
speed=1.2;dx=0;dy=0;
life=50;
hitbox=20;

distractor(){getMoney(3,this.x,this.y);}
static b=[];
static timing=0;
static timing2=0;
photo="z_R";
_show(){this.photo="z_"+((this.dx<0)?"L":"R");
  c2.drawImage(eval(this.photo),(this.x-32),(this.y-37),70,70);}
  move(){this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);}
  bounus(){}
spawn(){
 this.bodyx=eval(this.target).x-this.x;this.bodyy=eval(this.target).y-this.y;
 //console.log("spawning a zomby");
 this.d=Math.sqrt(Math.pow(this.bodyx,2)+Math.pow(this.bodyy,2));
 this.dx=(this.bodyx/this.d)*this.speed;
 this.dy=(this.bodyy/this.d)*this.speed;
 if(this.d>30){
   this.move();
 }else{eval(this.target).life-=0.09*(148/FPS)}
 this.bounus();
 this._show();
}


static sspawn(start , oh)
{
  var Start=start; var Oh=oh; 
  
  if(Zomby.timing2<Start){Zomby.timing2+=(148/FPS);}
  else 
  {
    if(Zomby.timing<Oh){Zomby.timing+=(148/FPS);}
    else{
     Zomby.timing=((Math.random())*(Oh/1.1));
     
     for(var _=0;_<Math.ceil(0.1+Math.pow((0.14*zombykilled)*1.2,0.5));_++)
     {  
     if(Math.random()>0.5){
     Zomby.add((Math.random()>0.5)?-9:830,Math.random()*512);if(Oh>200){Oh-=18}}else{
     Zomby.add(Math.random()*830,(Math.random()>0.5)?-9:512);if(Oh>200){Oh-=18}}
     //console.log("Zomby.timing "+Zomby.timing);
     }
    }
  }

 for(var x=0;x<(Zomby.b.length);x++)
 {
  if(Zomby.b[x].life<=1){Zomby.b[x].distractor();zombykilled++;Zomby.b=rfa(Zomby.b,x);
  break}
 }


  Zomby.b.forEach(function(element){element.spawn()});
}
static add(ex,way){var t=new Zomby();t.x=ex;t.y=way;Zomby.b.push(t);} 

 static wakeup(ex,way)
 {// this method should have another Overload (ex,way,obj)
  var t=new Zomby();
  t.x=ex;t.y=way;t.bodyx=1;
  t.spawn=function(){
    c2.drawImage(eval(this.photo),0,0,30,this.bodyx,this.x-35,this.y-(this.bodyx*70)/32,70,(this.bodyx*70)/32);
    if(this.bodyx<32){this.bodyx+=0.15*(148/FPS);}
    else{this.y-=30;this.spawn=new Zomby().spawn;}
  }
  Zomby.b.push(t);
 }
}