function weaponFunction(name="",)
{
 return`<img src="gameFiles/${name}.png" class="w" onmousedown='Weapon.buy("${name}",${eval(name).price},"${eval(name).aim}");weponSelected()'>
 </img><br><span id="${name}">${eval(name).price}$</span><br>`;
}
class Weapon
{
 name="";
 aim="cell";
 price=20
 bltspeed=7;
 cooldown=200;
 coolup=0;
 damage=30;
 rightClick(tx,ty){}
 fire(tx,ty){
 player.photo=Weapon.currentW+"_"+(tx>player.x?"R":"L")+Weapon.currS;
if(this.coolup>=this.cooldown){this.coolup=0;
 bullet.add(
 player.x,
 player.y,
 this.bltspeed*((tx-player.x)/calkdistans(player.x,player.y,tx,ty)),
 this.bltspeed*((ty-player.y)/calkdistans(player.x,player.y,tx,ty)),
 this.damage,
 player);
 emptyBullet(player.x,player.y,tx>player.x?"L":"R")
}}
 spawn(){
if(this.coolup<this.cooldown){this.coolup+=(148/FPS);}
 }
stopFiring(){}
 static currentW="man";
 static currS="";
 static ownedWepons=["man"];
 static pickedWepons=["gun","bazooka","autoGun","lazer"];
 static buy(w,price,aim)
 {
  let result=false;
  if(Weapon.currentW!=w)
  {
   if(Weapon.ownedWepons.includes(w)){Weapon.currentW=w;globalThis.mode="fight";document.getElementById("style1").innerHTML="canvas{cursor:"+aim+";}";result= true;}
   else if(player.mony>=price)
   {
    player.mony-=price;mony.innerHTML="MONEY : "+player.mony+"$"; Weapon.currentW=w;globalThis.mode="fight";Weapon.ownedWepons.push(w);document.getElementById("style1").innerHTML="canvas{cursor:"+aim+";}";
    if(eval(w).cooldown>299){Weapon.currS="_0"};
    result=true;
   }
   if(w=="bazooka")
   {
    if(result){Weapon.currS=(bazooka.coolup>=bazooka.cooldown?"":"_0");}
   }
   else{Weapon.currS="";}
  }else{Weapon.currS="";Weapon.currentW="man";globalThis.mode="mine";document.getElementById("style1").innerHTML="canvas{cursor:default;}"}
  player.photo=Weapon.currentW+"_"+player.photo.split("_")[1]+Weapon.currS;
  return result;
 }
}
var gun=new Weapon();gun.name="gun";gun.cooldown=100;gun.coolup=90;
var bazooka=new Weapon();bazooka.name="bazooka";bazooka.price=30;bazooka.cooldown=400;bazooka.damage=70;bazooka.coolup=390;
bazooka.spawn=function(){if(this.coolup<this.cooldown){this.coolup+=(148/FPS);}
else{player.photo=player.photo.substring(0,9);Weapon.currS=""}
}
bazooka.fire=function(tx,ty)
{player.photo=Weapon.currentW+"_"+(tx>player.x?"R":"L")+"_0";Weapon.currS="_0";
if(this.coolup>=this.cooldown){this.coolup=0;
 Rocket.add(
 player.x,
 player.y,
 this.bltspeed*((tx-player.x)/calkdistans(player.x,player.y,tx,ty)),
 this.bltspeed*((ty-player.y)/calkdistans(player.x,player.y,tx,ty)),
 this.damage,
 player);Weapon.currS="_0";
 player.photo="bazooka_"+(tx>player.x?"R":"L")+"_0";
}
};bazooka.bltspeed=5;
var autoGun =new Weapon();autoGun.name="autoGun";autoGun.price=50;autoGun.cooldown=30;
autoGun.fire=function(){player.photo=Weapon.currentW+"_"+(pointX>player.x?"R":"L");
this.coolup=1;
}
autoGun.stopFiring=function(){this.coolup=0;}
autoGun.spawn=function(){if(this.coolup==1&&this.cooldown<0){
 bullet.add(player.x,player.y,
 this.bltspeed*((pointX-player.x)/calkdistans(player.x,player.y,pointX,pointY)),
 this.bltspeed*((pointY-player.y)/calkdistans(player.x,player.y,pointX,pointY)),
 this.damage,
 player);
 player.photo=Weapon.currentW+"_"+(pointX>player.x?"R":"L");
 emptyBullet(player.x,player.y,pointX>player.x?"L":"R")
 this.cooldown=30;

}else{this.cooldown-=(148/FPS);}}
var lazer =new Weapon();lazer.name="lazer";lazer.price=80;
lazer.cooldown=90;lazer.damage=90;lazer.aim="crosshair"
lazer.fire=function(tx,ty)
{
 if(lazer.cooldown<=lazer.coolup)
 {
  lazerPulse(player.x,player.y,999,getSeta(player.x-tx,ty-player.y,-1,0),Zomby,lazer.damage-40,lazer.damage);
  player.photo=Weapon.currentW+"_"+(tx>player.x?"R":"L");
  lazer.coolup=0;
 }
}
var screwDriver=new Weapon();screwDriver.name="screwDriver";
screwDriver.fire=function(tx,ty){player.photo=Weapon.currentW+"_"+(tx>player.x?"R":"L");}
screwDriver.spawn=function()
{
 
}
screwDriver.rightClick=function()
{
 
}