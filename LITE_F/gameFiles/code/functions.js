function getSeta(x1,y1,x2,y2){ let r1=Math.sqrt(x1*x1+y1*y1);
 let r2=Math.sqrt(x2*x2+y2*y2);let cos1=x1/r1;let cos2=x2/r2;let sin1=y1/r1;
 let sin2=y2/r2;let sita1=Math.acos(cos1);if(sin1<0){sita1=(2*Math.PI)-sita1}
 let sita2=Math.acos(cos2);if(sin2<0){sita2=(2*Math.PI)-sita2} if(r1==0||r2==0){return 0}else{
 if((sita2-sita1)<0){return((sita2-sita1)+(2*Math.PI))}else{ return (sita2-sita1)};}}
function sita_2_cor(r,sita){let x= r*Math.cos(sita);let y= r*Math.sin(sita);return[x,y];}
// 1 degree = 0.017453293 radians
function cor_2_sita(x,y){var r=Math.sqrt(Math.pow((x),2)+Math.pow((y),2));var cosinSita=x/r;var sinSita=y/r;var sita=Math.acos(cosinSita);if(sinSita<0){sita=(2*Math.PI)-sita;}if(r!=0){ return [r,sita]}else{return [0,0]}}
function calkdistans(x1,y1,x2,y2){return(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));}
function rfa(array,indox){let b=[];for(i=0;i<array.length-1;i++){if(i>=indox){b[i]=array[i+1]}else{b[i]=array[i]}}return b}
function damage (target , dmg){target.life-=dmg;}
function boom(X,Y)
{
 for(let v= 0;v<5;v++)
 {
  let t=new Other();
  t.x=X;t.y=Y;t.dx=(Math.random()-0.5)*3;
  t.dy=4+Math.random()*2;
  t.spawn=function()
  {
    this.x+=this.dx*(148/FPS);this.y-=this.dy*(148/FPS);this.dy-=0.07*(148/FPS);
    c2.fillStyle="#000000";
    c2.fillRect(this.x,this.y,10,10);
    if(this.y>Y&&this.dy<0){this.dy*=-0.5;this.life-=10}
  }
  Other.b.push(t)
 }
}
function emptyBullet(X,Y,DIR){
  let t=new Other();t.x=X;t.y=Y;t.dx=(DIR=="R"?1.1:-1.1)*((Math.random()/3)+0.4);t.dy=(0.4+Math.random())*2;
  t.spawn=function(){this.x+=this.dx*(148/FPS);this.y-=this.dy*(148/FPS);this.dy-=0.04*(148/FPS);c2.fillStyle="#ffff00";c2.fillRect(this.x,this.y,8,4);if(this.y>(Y+25)&&this.dy<0){this.dy*=-0.7;this.dx/=2;this.life-=5}}
  Other.b.push(t)
  }  
function smoke(X,Y,DX=0,DY=0){
  let t = new Other();t.x=X;t.y=Y;t.dx=DX;t.dy=DY;
  t.spawn=function(){let size=(101-this.life*4);this.x+=this.dx*(148/FPS);this.y-=this.dy*(148/FPS);c2.drawImage(smok,this.x-(size/2),this.y-(size/2),size,size);this.life-=0.1*(148/FPS);};Other.b.push(t)}

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
  this.dy+=0.05*(148/FPS);
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
 this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);
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
  t.bonus();}
Other.b.push(t);}
}
function wakeupZomby(ex,way,s=new Zomby().bounus)
 {
  stuff(ex,way);
  var t=new Zomby();
  t.x=ex;t.y=way;t.bodx=1;t.body=0.4;
  t._show=function(){c2.drawImage(eval(this.photo),0,0,30,this.bodx,this.x-35,this.y-(this.bodx*70)/32,70,(this.bodx*70)/32);}
  t.move=function(){
    if(this.bodx<32){this.bodx+=this.body*(148/FPS);this.body=0.02+(40-this.bodx)/100}
    else{this.y-=30;this.move=new Zomby().move;this._show=new Zomby()._show;this.bounus=s;}
  };Zomby.b.push(t);}

function stuff(ex,way,dirction="both",col="#4dd80c",amount=6)
{let var1 = 0; let var2 =30/amount;
 for(let i=0;i<amount;i++){
 let t=new Other();t.color=col;t.y=way;t.x=ex+(var1-15);t.life=5
 if(dirction!="left"&&dirction!="right"){t.dx=i>=(amount/2)?0.1:-0.1;}
 else{t.dx=dirction=="left"?-0.1:0.1};t.dy=-0.5-Math.random()/2
 t.bonus=function(){this.dy+=0.02*(148/FPS);if(this.y>way&&this.dy>0){this.dy/=-2;this.life-=3}}
 var1+=var2;Other.b.push(t);}}

 function orbit(thing,center="zox",radius=100,speed=1.5)
 {
  thing.orbiting=false;
  thing.orbitRadius=radius;
  thing.target=center;
  thing.move=function(){
  this.d=Math.sqrt(Math.pow(eval(this.target).x-this.x,2)+Math.pow(eval(this.target).y-this.y,2));
  if((this.d>this.orbitRadius+5)&&(!this.orbiting)){ 
  this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);
  }
  else{
    this.move=function(){
    if(!this.orbiting){this.angle=cor_2_sita((this.x-eval(center).x),(this.y-eval(center).y))[1]}
    this.orbiting=true;
    this.angle+=(speed*(148/FPS)/this.orbitRadius);if(this.angle>2*Math.PI){this.angle=0}
    this.x=eval(center).x+sita_2_cor(this.orbitRadius,this.angle)[0];
    this.y=eval(center).y+sita_2_cor(this.orbitRadius,this.angle)[1];
    //this._show()
    }
  }
  this._show()
 }
}
function lazerPulse(ex,way,r,sita,target=null,power=50,dmg=null,color="#ff0700")
{
 let t = new Other();t.life=power;t.color=color;
 t.spawn=function()
 {
  this.life-=0.6*(148/FPS);
  let targetX=sita_2_cor(r,sita)[0]+ex;
  let targetY=sita_2_cor(r,sita)[1]+way;
  c2.beginPath();
  c2.fillStyle=color;
  c2.strokeStyle=color;
  let change1=[sita_2_cor(this.life/2,sita+(90*(Math.PI/180)))[0],sita_2_cor(this.life/2,sita+(90*(Math.PI/180)))[1]];
  let change2=[-change1[0],-change1[1]];
  let p1=[ex+change1[0],way+change1[1]];let p2=[ex+change2[0],way+change2[1]];
  let p3=[targetX+change1[0],targetY+change1[1]];let p4=[targetX+change2[0],targetY+change2[1]];
  c2.lineTo(p1[0],p1[1]);
  c2.lineTo(p2[0],p2[1]);
  c2.lineTo(p4[0],p4[1]);// ^\o_o/^ 1 -> 2 -> 4 -> 3
  c2.lineTo(p3[0],p3[1]);
  c2.closePath();
  c2.stroke();
  c2.fill();
 }
 Other.b.push(t);
 if(target!=null)
 {
  let slope=Math.tan(sita);
  let b=slope*(-ex)+way;
  for(let n=0;n<target.b.length;n++)
  {
   //console.log("ex = "+Math.round(ex)+", way ="+Math.round(way)+", target= ("+target.b[n].x+","+target.b[n].y+"), b="+Math.round(b)+", slop="+Math.round(slope*100)/100);
   let D= Math.abs(-slope*(target.b[n].x/b)+(target.b[n].y/b)-1)/Math.sqrt(Math.pow(1/b,2)*(1+slope*slope));
   console.log("D = "+D);
   if(D<(power/2)+target.b[n].hitbox)
   {
    let S1=getSeta(1,0,target.b[n].x-ex,target.b[n].y-way,);
    let s1MinusSita=Math.min(Math.abs(S1-sita),Math.abs((Math.min(S1,sita))-(Math.max(S1,sita)-2*Math.PI)));
    console.log("S1 = " +Math.round(S1*(180/Math.PI))+", sita = "+Math.round(sita*(180/Math.PI)));
    if(s1MinusSita<0.7)
    {
     damage(target.b[n],dmg);
    }
   }
  }
 }
}
function victory()
{
 if(confirm("VICTORY !!! \n\n Return to menu ?"))
 {
  document.querySelector("body").innerHTML+='<form action="../Game.html" style="display:hidden" id="formIJustCreated"></form>';
  document.querySelector("#formIJustCreated").submit()

 }
}