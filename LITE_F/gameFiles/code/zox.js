var zox =new Zomby();
zox.life=4500;
zox.speed=1.5;
zox.phase=0;
zox.exists=0;
zox.hitbox=36;
zox.photo="zox_L_0";
zox.distractor=function(){getMoney(19,this.x,this.y);document.getElementById("bossLife").innerHTML='';document.getElementById("bossLife").style="display:none"}
zox.timeUp=230;zox.timeUp2=30;//timeUp is used in moves , timeUp2 is used in attacks

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
zox.attack=zox.attacks[0];

zox.spawn=function()
{

 zox.x+=zox.dx*(148/FPS);zox.y+=zox.dy*(148/FPS);
 zox.bodyx=player.x-zox.x;zox.bodyy=player.y-zox.y;
 if(zox.phase!=5-Math.ceil((zox.life/4500)*4))
{
 zox.phase=5-Math.ceil((zox.life/4500)*4);if(zox.phase>1){wakeSomeZombies("zox",2*zox.phase)}
 if(zox.phase>=2)
 {zox.dx=0;zox.dy=0;
  zox.timeUp=800;zox.timeUp2=800;
  zox.attack=function()
  {
    if(zox.timeUp2>0){zox.timeUp2-=(148/FPS);}else{zox.attack=zox.attacks[0];}

  }
  for(let i=0;i<(2*zox.phase+1);i++){wakeupZomby(zox.x+sita_2_cor(100,Math.PI*2*(i/(2*zox.phase+1)))[0],
    zox.y+sita_2_cor(100,Math.PI*2*(i/(2*zox.phase+1)))[1],
    function(){orbit(this,"zox");this.bounus=function(){if(calkdistans(this.x,this.y,player.x,player.y)<30){player.life-=0.09*(148/FPS)}}})}
  //wakeupZomby(100,100,function(){orbit(this,"player");this.bounus=function(){}});
 }
}
 zox.photo="zox_"+(zox.bodyx<0?"L":"R")+"_"+zox.photo.split("_")[2]
 zox._show();
 zox.move();
 zox.attack();
 if(zox.y<45){zox.y=45}
 if(zox.y>470){zox.y=470}
 if(zox.x<20){zox.x=20}
 if(zox.x>805){zox.x=805}
 document.getElementById("bossLife").innerHTML='<div style="text-wrap-mode:nowrap;background-color:crimson;position:absolute;right:0px;height:100%;width:'+
 zox.life/45+'%;">ZOX : '+Math.round(zox.life)+'</div>';
}
zox.appear=function()
{
  zox.x=200;zox.y=100;zox.exists=1;
  Zomby.b.push(zox);
  for(var l=0;l<Zomby.b.length;l++){Zomby.b[l].speed=Zomby.b[l].speed*-1;}
  document.getElementById("healthBars").innerHTML+='<div class="life" id="bossLife" style="text-align: right;display: inline-block;width: 50%;height:32px;position:absolute;right: 0px;"></div>';
  document.getElementById("bossLife").innerHTML='<div style="background-color:crimson;width:'+zox.life/45+'%;">ZOX : '+Math.round(zox.life)+'</div>';
  //document.getElementById("bossLife").style+="text-wrap-mode:nowrap;"
  Zomby.sspawn=function(a,aa){
  
   for(var x=0;x<(Zomby.b.length);x++)
   {
    if(Zomby.b[x].life<=1){Zomby.b[x].distractor();zombykilled++;Zomby.b=rfa(Zomby.b,x);zombykilled++;break}
   }
    Zomby.b.forEach(function(element){element.spawn()});
  }
}
