function theCanvasFunction(hyt=512,wdth=828,clr="#085422",fps=40)
{
 globalThis.c =document.querySelector("canvas");
 c.width=wdth;
 c.height=hyt;
 globalThis.groundColor=clr;
 globalThis.c2 =c.getContext("2d",{ willReadFrequently: true }); 
 globalThis.mode ="mine";
 globalThis.mony =document.getElementById("floose");
 globalThis.pointX=0;globalThis.pointY=0;
 globalThis.FPS = fps;
 c.addEventListener("mousedown",event=>
 {
  if(!event.button)
  {
   if(mode=="mine")
   {
    for(var o=0;o<Mward.b.length;o++)
    {if(calkdistans(Mward.b[o].x,Mward.b[o].y,(event.x-c.offsetLeft),(event.y-c.offsetTop))<45)
    {if(calkdistans(Mward.b[o].x,Mward.b[o].y,player.x,player.y)<70){Mward.b[o].getmined(8);continue;}}}
   }
   else if(mode=="fight")
   {
    // -------SHOOT---------//
    eval(Weapon.currentW).fire(event.x-c.offsetLeft,event.y-c.offsetTop);
   }
   else if(mode=="build")
   {
    
   }
  }
 });
 document.addEventListener('contextmenu', event=>
 {
 event.preventDefault(); console.log("hellooooww");
  if(mode=="mine")
  {
   handleRightClick();
  }
  else if(mode=="fight")
  {
   eval(Weapon.currentW).rightClick();
  }
  else if(mode=="build")
  {
   handleRightClick();
  }
 });



 c.addEventListener("mouseup",event=>{if(Weapon.currentW!="man"){eval(Weapon.currentW).stopFiring();}});
 c.addEventListener("mouseleave",event=>{if(Weapon.currentW!="man"){eval(Weapon.currentW).stopFiring();}});
 c.addEventListener("mousemove",event=>
 {
  pointX=(event.x-c.offsetLeft);
  pointY=(event.y-c.offsetTop);
 });
 globalThis.zombykilled=0;
}


function handleRightClick()
 {
  if(globalThis.mode=="mine")
  {
   Weapon.buy("screwDriver",0,"default");
   globalThis.mode="build";
   buildingMenu.life=8;buildingMenu.y=c.clientHeight;buildingMenu.dy=-1;
   Other.b.push(buildingMenu)
  }
  else if(globalThis.mode=="build")
  {
   Weapon.buy("screwDriver",0,"default");
   globalThis.mode="mine";
  }
 }