class Zomby{
x=0;y=0;
bodyx= player.x-this.x;bodyy= player.y- this.y;
speed=1.2;
dx=0;dy=0;
life=50;
hitbox=20;
distractor(){getMoney(3,this.x,this.y);zombykilled++}
static b=[];
static timing=0;
static timing2=0;
photo="z_R";
spawn(){
 this.target=Math.sqrt(Math.pow(this.bodyx,2)+Math.pow(this.bodyy,2));
 this.bodyx=player.x-this.x;this.bodyy=player.y-this.y;
 this.dx=(this.bodyx/this.target)*this.speed;
 this.dy=(this.bodyy/this.target)*this.speed;
 if(this.target>30){
   this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);
 }else{player.life-=0.09*(148/FPS)}
 this.photo="z_"+((this.dx<0)?"L":"R");
  c2.drawImage(eval(this.photo),(this.x-32),(this.y-37),70,70);
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
     console.log("Zomby.timing "+Zomby.timing);
     }
    }
  }

 for(var x=0;x<(Zomby.b.length);x++)
 {
  if(Zomby.b[x].life<=1){Zomby.b[x].distractor();Zomby.b=rfa(Zomby.b,x);
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


var zox =new Zomby();
zox.life=4500;
zox.speed=1.5;
zox.phase=0;
zox.exists=0;
zox.hitbox=36;
zox.photo="zox_L_0";

zox.timeUp=230;zox.timeUp2=30;


zox._show=function(){c2.drawImage(eval(this.photo),this.x-38,this.y-50);}
zox.moves=
[
 function(){if(zox.timeUp>0){zox.timeUp-=(148/FPS);}else{
 if(zox.dx!=0&&zox.dy!=0){zox.dx=0;zox.dy=0}
 else{var angl=(Math.random()*2*Math.PI); zox.dx=sita_2_cor(zox.speed,angl)[0];zox.dy=sita_2_cor(zox.speed,angl)[1]}
 zox.timeUp=230+(40-Math.random()*80)} },
 function(){},
 function(){},
 function(){}
];
zox.move=zox.moves[0];
zox.attacks=[
function(){
if(zox.timeUp2>0){zox.timeUp2-=(148/FPS);}else{

var t=new Other();
t.x=zox.x;t.y=zox.y;
t.dx=2*(Math.round(zox.phase/2+0.1)+1)*(player.x-zox.x)/calkdistans(player.x,player.y,zox.x,zox.y);
t.dy=2*(Math.round(zox.phase/2+0.1)+1)*(player.y-zox.y)/calkdistans(player.x,player.y,zox.x,zox.y);
t.life=8;
t.bonus=function()
{
 if(Math.abs(this.x-player.x)<eval(player.photo).width/2&&Math.abs(this.y-player.y)<eval(player.photo).height/2){player.life-=4;this.life=0;}
 if(calkdistans(this.x,this.y,zox.x,zox.y)>2000){this.life=0;}
}
Other.b.push(t);
 if(Math.random()<0.1){zox.timeUp2=300;zox.photo=zox.photo.slice(0,6)+"0";}
 else{zox.timeUp2=(30+(Math.random()-0.5)*30);zox.photo=zox.photo.slice(0,6)+"1";}
}},//  !!!!!!
function(){},
function(){},
function(){}

];
zox.attack=zox.attacks[zox.phase];

zox.spawn=function()
{

 zox.x+=zox.dx*(148/FPS);zox.y+=zox.dy*(148/FPS);
 zox.bodyx=player.x-zox.x;zox.bodyy=player.y-zox.y;
 if(zox.phase!=5-Math.ceil((zox.life/4500)*4)){zox.phase=5-Math.ceil((zox.life/4500)*4);}
 zox.photo="zox_"+(zox.bodyx<0?"L":"R")+"_"+zox.photo.split("_")[2]
 zox._show();
 zox.move();
 zox.attack();
 if(zox.y<45){zox.y=45}
 if(zox.y>470){zox.y=470}
 if(zox.x<20){zox.x=20}
 if(zox.x>805){zox.x=805}
 document.getElementById("bossLife").innerHTML='<div style="background-color:crimson;position:absolute;right:0px;height:100%;width:'+zox.life/45+'%;">ZOX : '+Math.round(zox.life)+'</div>';
}
zox.appear=function()
{
  zox.x=200;zox.y=100;zox.exists=1;
  Zomby.b.push(zox);
  for(var l=0;l<Zomby.b.length;l++){Zomby.b[l].speed=Zomby.b[l].speed*-1;}
  document.getElementById("healthBars").innerHTML+='<div class="life" id="bossLife" style="text-align: right;display: inline-block;width: 50%;height:32px;position:absolute;right: 0px;"></div>';
  document.getElementById("bossLife").innerHTML='<div style="background-color:crimson;width:'+zox.life/45+'%;">ZOX : '+Math.round(zox.life)+'</div>';
  Zomby.sspawn=function(a,aa){
  
   for(var x=0;x<(Zomby.b.length);x++)
   {
    if(Zomby.b[x].life<=1){getMoney(15,zox.x,zox.y);Zomby.b=rfa(Zomby.b,x);
    mony.innerHTML="MONEY : "+player.mony+"$"; zombykilled++;break}
   }
    Zomby.b.forEach(function(element){element.spawn()});
  }


}
