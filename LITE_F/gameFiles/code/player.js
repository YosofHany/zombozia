var player= {
 x   :c.clientWidth/2,
 y   :c.clientHeight/2,
 dx  :0,
 dy  :0,
 mony:0,
 life:100,
 photo :"man_R",
 spawn : function(){
 if(Weapon.currentW!="man"){eval(Weapon.currentW).spawn();}

 if(player.y<45){player.y=45}
 if(player.y>470){player.y=470}
 if(player.x<20){player.x=20}
 if(player.x>805){player.x=805}
 c2.drawImage(eval(player.photo),player.x-(eval(player.photo).width/2),player.y-(eval(player.photo).height/2));

 if(player.dy==0||player.dx==0){player.x+=player.dx;player.y+=player.dy;}
 else{player.x+=player.dx*0.7071;player.y+=player.dy*0.7071;}
 
 if(player.life>0){
 document.getElementById("life").innerHTML="<div style=\"background-color:crimson;width:"+player.life*2+"px;\">LIFE : "+Math.round(player.life)+"</div>";
 document.getElementById("floose").innerHTML='<div>MONEY : '+Math.round(player.mony)+'</div>';
 }
 }
}
document.addEventListener("keydown",event =>{if(event.key=="ArrowUp"||event.key=="w"){ player.dy=-1.5;}});
document.addEventListener("keyup",event =>{if(event.key=="ArrowUp"||event.key=="w"){player.dy=0;}});
document.addEventListener("keydown",event =>{if(event.key=="ArrowDown"||event.key=="s"){player.dy=1.5;}});
document.addEventListener("keyup",event =>{if(event.key=="ArrowDown"||event.key=="s"){player.dy=0;}});
document.addEventListener("keydown",event =>{if(event.key=="ArrowLeft"||event.key=="a"){player.dx=-1.5;player.photo=Weapon.currentW+"_L"+Weapon.currS;}});
document.addEventListener("keyup",event =>{if(event.key=="ArrowLeft"||event.key=="a"){player.dx=0;}});
document.addEventListener("keydown",event =>{if(event.key=="ArrowRight"||event.key=="d"){player.dx=1.5;player.photo=Weapon.currentW+"_R"+Weapon.currS;}});
document.addEventListener("keyup",event =>{if(event.key=="ArrowRight"||event.key=="d"){player.dx=0;}});
