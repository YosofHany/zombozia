var player= {
 dx  :0,
 dy  :0,
 mony:0,
 life:100,
 speed:1.5,
 photo:"man_R",
 x:c.clientWidth/2,
 y   :c.clientHeight/2,
 spawn : function(){
 if(Weapon.currentW!="man"){eval(Weapon.currentW).spawn();}
 this.mony=Math.round(this.mony);
 if(player.y<45){player.y=45}
 if(player.y>470){player.y=470}
 if(player.x<20){player.x=20}
 if(player.x>805){player.x=805}
 c2.drawImage(eval(player.photo),player.x-(eval(player.photo).width/2),player.y-(eval(player.photo).height/2));

 if(player.dy==0||player.dx==0){player.x+=player.dx*(148/FPS);player.y+=player.dy*(148/FPS);}
 else{player.x+=player.dx*0.7071*(148/FPS);player.y+=player.dy*0.7071*(148/FPS);}
 
 if(player.life>0){
 document.getElementById("life").innerHTML="<div style=\"background-color:crimson;width:"+player.life*2+"px;\">LIFE : "+Math.round(player.life)+"</div>";
 document.getElementById("floose").innerHTML='<div>MONEY : '+Math.round(player.mony)+'</div>';
 }
 }
}
var btns={w:false,s:false,a:false,d:false}
document.addEventListener("keydown",event =>
{
 if(event.key=="ArrowUp"||event.key=="W"||event.key=="w")
 {
  if(!btns["w"]){btns["w"]=true;player.dy-=1.5;}
 }
 else if(event.key=="ArrowDown"||event.key=="S"||event.key=="s")
 {
  if(!btns["s"]){btns["s"]=true;player.dy+=1.5;}
 }
 else if(event.key=="ArrowLeft"||event.key=="A"||event.key=="a")
 {
  if(!btns["a"]){btns["a"]=true;player.dx-=1.5;}
 }
 else if(event.key=="ArrowRight"||event.key=="D"||event.key=="d")
 {
  if(!btns["d"]){btns["d"]=true;player.dx+=1.5;}
 }
 if(player.dx!=0)
 {
 let N=player.photo.indexOf("_");
 player.photo=player.photo.substring(0,N)+(player.dx>0?"_R":"_L")+player.photo.substring(N+2);
 }
});
document.addEventListener("keyup",event =>
{
 if(event.key=="ArrowUp"||event.key=="W"||event.key=="w")
 {
  if(btns["w"]){btns["w"]=false;player.dy+=1.5;}
 }
 else if(event.key=="ArrowDown"||event.key=="S"||event.key=="s")
 {
  if(btns["s"]){btns["s"]=false;player.dy-=1.5;}
 }
 else if(event.key=="ArrowLeft"||event.key=="A"||event.key=="a")
 {
  if(btns["a"]){btns["a"]=false;player.dx+=1.5;}
 }
 else if(event.key=="ArrowRight"||event.key=="D"||event.key=="d")
 {
  if(btns["d"]){btns["d"]=false;player.dx-=1.5;}
 }
 if(player.dx!=0)
 {
 let N=player.photo.indexOf("_");
 player.photo=player.photo.substring(0,N)+(player.dx>0?"_R":"_L")+player.photo.substring(N+2);
 }
});