class Weapon
{
 
 name="";
 bltspeed=7;
 cooldown=200;
 coolup=0;
 damage=30;
 //user=player;
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
 static buy(w,price,aim)
 {
  if(Weapon.ownedWepons.includes(w)){Weapon.currentW=w;document.getElementById("style1").innerHTML="canvas{cursor:"+aim+";}";return true;  }
   else if(player.mony>=price)
   {
    player.mony-=price;mony.innerHTML="MONEY : "+player.mony+"$"; Weapon.currentW=w;Weapon.ownedWepons.push(w);document.getElementById("style1").innerHTML="canvas{cursor:"+aim+";}";
    if(eval(w).cooldown>299){Weapon.currS="_0"};return true;
   }
   else{return false;}
 } 
}
var gun=new Weapon();gun.name="gun";gun.cooldown=100;
var bazooka=new Weapon();bazooka.name="bazooka";bazooka.cooldown=400;bazooka.damage=70;
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
var autoGun =new Weapon();autoGun.name="autoGun";autoGun.fire=function(){player.photo=Weapon.currentW+"_"+(pointX>player.x?"R":"L");
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
var lazer =new Weapon();lazer.name="lazer";lazer.cooldown=90;lazer.damage=90;
lazer.fire=function(tx,ty)
{
 if(lazer.cooldown<=lazer.coolup)
 {
  lazerPulse(player.x,player.y,999,getSeta(player.x-tx,ty-player.y,-1,0),Zomby,lazer.damage-40,lazer.damage);
  player.photo=Weapon.currentW+"_"+(tx>player.x?"R":"L");
  lazer.coolup=0;
 }
}