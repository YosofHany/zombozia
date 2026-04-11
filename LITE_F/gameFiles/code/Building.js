class Building
{
 static pickedBuildings=["tower"];
 static build(typ="tower",ex,way)
 {
   let t =new (eval("Building."+typ))();
   t.x=ex;t.y=way
   Building.b.push(t);
   t.photo=eval(t.name);
   return t;
 }
 static b = [];
 static sspawn=function()
 {
  for(let i=0;i<Building.b.length;i++)
  {
   if(Building.b[i].life>0){Building.b[i].spawn();}
   else{Building.b[i]=null;}
   
  }
 }
 static base=class
 {
  name="tower"
  photo;
  levl=1;
  direction=0;
  coolup=0;cooldown=100;
  cost=25;
  timeToBuild=400;
  done=0;
  Blt=0;//
  target=null;
  targets=[Zomby];
  life=100;
  range=400;
  damage=20;
  hasTargetsAround=false;
  width=79;height=128;
  _show()
  {
   c2.drawImage(this.photo,
   this.Blt?(Math.round(8*this.direction/Math.PI)%16)*this.width:Math.round(15*this.done/this.timeToBuild)*this.width,
   (this.Blt)*this.height,
   this.width,
   this.height,
   this.x-(this.width/2),
   this.y-(this.height/2),
   this.width,
   this.height);
  }
  spawn()
  {
   if(this.targets[0].b[0]){this.target=[this.targets[0].b[0].x,this.targets[0].b[0].y];}
   if(this.Blt)
   {
    this.hasTargetsAround=false;
    for(let n=0;n<this.targets.length;n++)
    {
     for(let nn=0;nn<this.targets[n].b.length;nn++)
     {
       this.hasTargetsAround=true;
      let t=[this.targets[n].b[nn].x,this.targets[n].b[nn].y];
      let dist=calkdistans(t[0],t[1],this.x,this.y);
      if(calkdistans(this.target[0],this.target[1],this.x,this.y)>dist)
      {
       this.target=t;
      }
     }
    }//after this loop 'this.target' should be the closest target
   }else{this.done+=(148/FPS);if(this.done>this.timeToBuild){this.Blt=1;}}
   
   if(this.target)
   {
    if(calkdistans(this.target[0],this.target[1],this.x,this.y)>this.range){this.target=null;}
    else
    {
     this.direction=cor_2_sita(this.target[0]-this.x,this.target[1]-this.y)[1]; 
    }
   }
   if(this.coolup<this.cooldown){this.coolup+=(148/FPS);}
   else{if(this.hasTargetsAround&&this.target){this.shoot(this.target[0],this.target[1]);this.coolup=0;}}
   this._show();
  }
  shoot(ex,way)
  {
   bullet.add(
   this.x,this.y,
   7*((ex-this.x)/calkdistans(this.x,this.y,ex,way)),
   7*((way-this.y)/calkdistans(this.x,this.y,ex,way)),
   this.damage,this);
   this.coolup=0;
  }
 }
 static tower =class extends Building.base{}
 static jackHammer =class extends Building.base{name="jackHammer";}
 static redPlantedGun =class extends Building.base{name="redPlantGun";}
 static goldMine =class extends Building.base{name="goldMine";}
}
globalThis.buildingMenu = new Other();buildingMenu.width=428;
buildingMenu.options=[];
//buildingMenu.optionSelected=null;
let optionCount=Math.max(Building.pickedBuildings.length,4);
console.log(" optionCount ="+optionCount)
for(let bb=0;bb<optionCount;bb++)
{
 let t={numbr:bb};
 t._show=function(){}
 t.color="#fff200";
 if(Building.pickedBuildings[bb])
 {
  t.photo=eval(Building.pickedBuildings[bb]);
  t.typ=eval("new Building."+Building.pickedBuildings[bb]+"()");
  t._show=function()
  {
   c2.drawImage(this.photo,0,this.typ.height,this.typ.width,this.typ.height,this.place-20,buildingMenu.y-25,40,50);
   c2.font="20px Noto Mono";c2.fillStyle="#fff200";c2.fillText(this.typ.cost+"$",this.place,buildingMenu.y+48,);
  }
 }else{}
 t.spawn=function()
 {
  this.place=this.numbr*(buildingMenu.width/optionCount)+((buildingMenu.width/optionCount)/2)+((c.clientWidth-buildingMenu.width)/2);c2.fillStyle=this.color;c2.fillRect(this.place-25,buildingMenu.y-30,50,60);this._show()
 }
 buildingMenu.options.push(t);
}
buildingMenu.spawn=function()
{
 if(this.y<c.clientHeight-50){this.dy=0;}
 this.y+=this.dy*(148/FPS);
 c2.fillStyle="#8e8e8e";
 c2.fillRect((c.clientWidth-this.width)/2,this.y,this.width,60);
 for (let option of this.options)
 {
  if(option.spawn){option.spawn();}
 }
 if(mode!="build")
 {
  document.getElementById("style1").innerHTML="canvas{cursor:default;}"; 
  this.life-=10;
 }
 if(calkdistans(pointX,pointY,player.x,player.y)<player.range&&mode=="build"&&buildingMenu.optionSelected)
 {
  document.getElementById("style1").innerHTML="canvas{cursor:s-resize;}";
 }
 else
 {
  document.getElementById("style1").innerHTML="canvas{cursor:default;}";
 }
}
