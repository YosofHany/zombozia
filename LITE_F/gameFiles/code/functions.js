function getSeta(x1,y1,x2,y2){ let r1=Math.sqrt(x1*x1+y1*y1);
 let r2=Math.sqrt(x2*x2+y2*y2);let cos1=x1/r1;let cos2=x2/r2;let sin1=y1/r1;
 let sin2=y2/r2;let sita1=Math.acos(cos1);if(sin1<0){sita1=(2*Math.PI)-sita1}
 let sita2=Math.acos(cos2);if(sin2<0){sita2=(2*Math.PI)-sita2} if(r1==0||r2==0){return 0}else{
 if((sita2-sita1)<0){return((sita2-sita1)+(2*Math.PI))}else{ return (sita2-sita1)};}}

function calkdistans(x1,y1,x2,y2){return(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));}
function rfa(array,indox){let b=[];for(i=0;i<array.length-1;i++){if(i>=indox){b[i]=array[i+1]}else{b[i]=array[i]}}return b}
function damage (target , dmg){target.life-=dmg;}
function sita_2_cor(r,sita){let x= r*Math.cos(sita);let y= r*Math.sin(sita);return[x,y];}
function boom(X,Y)
{
 for(let v= 0;v<5;v++)
 {
  let t=new Other();
  t.x=X;t.y=Y;t.dx=(Math.random()-0.5)*3;
  t.dy=4+Math.random()*2;
  t.spawn=function()
  {
    this.x+=this.dx;this.y-=this.dy;this.dy-=0.07;
    c2.fillStyle="#000000";
    c2.fillRect(this.x,this.y,10,10);
    if(this.y>Y&&this.dy<0){this.dy*=-0.5;this.life-=10}
  }
  Other.b.push(t)
 }
}
function emptyBullet(X,Y,DIR){
  let t=new Other();t.x=X;t.y=Y;t.dx=(DIR=="R"?1.1:-1.1)*((Math.random()/3)+0.4);t.dy=(0.4+Math.random())*2;
  t.spawn=function(){this.x+=this.dx;this.y-=this.dy;this.dy-=0.04;c2.fillStyle="#ffff00";c2.fillRect(this.x,this.y,8,4);if(this.y>(Y+25)&&this.dy<0){this.dy*=-0.7;this.dx/=2;this.life-=5}}
  Other.b.push(t)
  }  
function smoke(X,Y,DX=0,DY=0){
  let t = new Other();t.x=X;t.y=Y;t.dx=DX;t.dy=DY;
  t.spawn=function(){let size=(101-this.life*4);this.x+=this.dx;this.y-=this.dy;c2.drawImage(smok,this.x-(size/2),this.y-(size/2),size,size);this.life-=0.1;};Other.b.push(t)}

function weponSelected(){
  for(let i=0;i<Weapon.ownedWepons.length;i++){
    if(Weapon.ownedWepons[i]!="man"){
    document.getElementById(Weapon.ownedWepons[i]).innerHTML=Weapon.ownedWepons[i]}
  }
}

function getMoney(coins,x,y){
let uc=coins<7?coins:(Math.round(Math.sqrt(coins))+3);
let UC=uc;
for(;uc>0;uc--){
let t=new Other();

t.x=x;t.y=y;t.dx=(Math.random()-0.5);t.dy=4+(Math.sqrt(coins))*(Math.random())
t.life=coins/UC;
t.jumbsleft=3;
t.bonus=function()
{
  if(this.jumbsleft>0)
 {
  this.dy+=0.05;
  if(this.y>y&&this.dy>0){this.dy*=-0.5;this.jumbsleft--;}
  
  }
  else
  {
   this.hfiw=calkdistans(this.x,this.y,-c.offsetLeft,-c.offsetTop);
   this.bonus=function()
   {
    this.dx=(-c.offsetLeft-this.x)*0.01;
    this.dy=(-c.offsetTop-this.y)*0.01;
    if(this.x<0||this.y<0){player.mony+=this.life;this.life=0;}
   }
  }
}
t.spawn=function()
{
 this.x+=this.dx;this.y+=this.dy;
 c2.beginPath();
  c2.fillStyle="#aaaaaa";
  c2.arc(this.x,this.y,12,0,6);
  c2.closePath();
  c2.fill();
  c2.beginPath();
  c2.fillStyle="#cccc00";
  c2.arc(this.x,this.y,9,0,6);
  c2.closePath();
  c2.fill();
  t.bonus();
 
}
Other.b.push(t);}
}
