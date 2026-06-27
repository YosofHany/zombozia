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
 t.x=(148*timeTaken)/amount;this.y--;}}
Other.b.push(t);}
class Zomby{
target=player;
x=0;y=0;
bodyx=this.target.x-this.x;bodyy=this.target.y-this.y;
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
 this.bodyx=this.target.x-this.x;this.bodyy=this.target.y-this.y;
 //console.log("spawning a zomby");
 this.d=Math.sqrt(Math.pow(this.bodyx,2)+Math.pow(this.bodyy,2));
 this.dx=(this.bodyx/this.d)*this.speed;
 this.dy=(this.bodyy/this.d)*this.speed;
 if(this.d>30){
 this.move();
 }else{this.target.life-=0.09*(148/FPS)}
 this.bounus();
 this._show();}
static sspawn(start,oh)
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
     }
    }
  }
 let deadPeople=[];
 for(let x=0;x<(Zomby.b.length);x++)
 {
  if(Zomby.b[x].life<=1)
  {
   Zomby.b[x].distractor();zombykilled++;
   deadPeople.push(x);
  }
 }
 Zomby.b=removFromArray(Zomby.b,deadPeople);
 Zomby.b.forEach(function(element){element.spawn()});
}
static add(ex,way){var t=new Zomby();t.x=ex;t.y=way;Zomby.b.push(t);}
 static wakeup(ex,way)
 {
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
function addInfected()
{
 let t=new Zomby();t.bodyx=0;t.bodyy=35;t.dmg=7;
 t.attack=function(){if(this.bodyx>=this.bodyy){damage(this.target,this.dmg,true);this.bodyx=0;}}
 t.life=100;t.hitbox=35;
 t.spawn=function()
 {let _t =closest(this,Building.b);this.target=player;
  if(_t){let d1=calkdistans(this.x,this.y,player.x,player.y),d2=calkdistans(this.x,this.y,_t.x,_t.y)
   if(d1>d2){this.target=_t}}
  let bdx=this.target.x-this.x;let bdy=this.target.y-this.y;
  this.d=Math.sqrt(Math.pow(bdx,2)+Math.pow(bdy,2));
  this.dx=(bdx/this.d)*this.speed;
  this.dy=(bdy/this.d)*this.speed;


  if(this.d>30){this.move();}
  if(this.bodyx<this.bodyy){if(this.d>30){this.bodyx+=(148/FPS)*0.4}else{this.bodyx+=(148/FPS)*0.6} }
  else
  {
   if(this.d<30){this.attack()}
   this.bodyx=0;
  }


  this._show()
 }
 
 t._show=function()
 {
  let ho=0
  if(this.d>30)
  {
   ho=Math.floor(3*((this.bodyy-this.bodyx+1)/this.bodyy))
  }
  else
  {
   ho=this.bodyx>(this.bodyy/2)?3:0;
  };if(ho<0){ho=0};
  c2.drawImage(finfected,ho*35,this.dx>0?0:40,35,40,(this.x-35),(this.y-49),70,98);
 }
 /*
 t.bounus=function(){
 }
 */
 Zomby.b.push(t)
}