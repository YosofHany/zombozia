var down=false;
var downdOn={x:0,y:0}
function on(b={},ex=pointX,way=pointY){return((ex>(b.x-b.w/2))&&ex<b.x+b.w/2&&way>b.y-b.h/2&&way<b.y+b.h/2)}
class canvasButton extends Other
{h=50;w=120;text="button";down=false;on=false;clr2="#ffffff";
 onDown()
 {if(!this.down){
   this.down=true;
   let tem1=this.clr2;this.clr2=this.brdr;
   this.brdr=this.color;
   this.color=this.fg;
   /*this.fg=tem1;console.log("you just pressed "+this.text+`\n clr2=${this.clr2}\n color=${this.color}\n brdr=${this.brdr}\n fg=${this.fg}\n`);*/
  }}
 onClck(){console.log(this.text);}
 onUp(){if(this.down)
 {
  this.down=false;
  let tem1=this.clr2;this.clr2=this.fg;
  this.fg=this.color;
  this.color=this.brdr;
  this.brdr=tem1;
 }}
 onLeav(){this.dx=-6;if(on(this)&&down&&on(this,downdOn.x,downdOn.y)){this.onClck()}}
 onEnter(){this.dx=6}
 _show()
 {let X=this.x-this.w/2,Y=this.y-this.h/2;
  c2.fillStyle=this.color;c2.strokeStyle=this.brdr;
  c2.fillRect(X,Y,this.w,this.h);
  c2.lineWidth=4;c2.fillStyle=this.fg
  c2.strokeRect(X,Y,this.w,this.h);
  c2.font="22px sans-serif";c2.fillStyle=this.fg;c2.fillText(this.text,X+this.w/2-50,this.y+5);
  c2.strokeStyle="#000000";
 }
 brdr="#fd1100"
 fg="#000000"
 spawn=function()
 {if(this.w+this.dx>=this.minw){this.w+=this.dx};this.dx*=0.9;
  this._show();
  this.bonus();}
 static b=[];
 static add(ar=[,,]){var t=new canvasButton();let ARGS=["x","y","w","h","color","brdr","clr2","fg",'_show','onClck',"text"];
 for(let I=0;I<=ARGS.length;I++){if(ar[I]){t[ARGS[I]]=ar[I]}};canvasButton.b.push(t);return t}

 static sspawn()
 {
  for(let a=0;a<(canvasButton.b.length);a++)
  {canvasButton.b[a].spawn();}
 }
 static OND(){for(let i of canvasButton.b){if(on(i)){i.onDown()}}}
 static ONU(){for(let i of canvasButton.b){if(i.down&&on(i)){i.onClck()};i.onUp();}}
}
function exitButton(ex,Y,w=50,h=27)
{let tt=canvasButton.add([ex,Y,w,h,"#e4e4e4",/*brdr*/,/*clr2*/,"#202020",
 function(){c2.fillStyle=this.color;c2.strokeStyle=this.brdr;
  c2.beginPath();for(const elm of this.p){c2.lineTo(elm[0],elm[1]);}
  c2.closePath();c2.lineWidth=4;c2.stroke();c2.fill();
  c2.font='26px sans-serif';c2.fillStyle=this.brdr;c2.fillText("out",ex+w/2+9,Y+7);c2.strokeStyle="#000000";}
 ,function(){goTo("../Game.html")}]).p=[[ex-w/2,Y],[(ex-w/2)+10,Y-h/2],[ex+w/2,Y-h/2],[(ex+w/2)-10,Y],[ex+w/2,Y+h/2],[(ex-w/2)+10,Y+h/2]];return tt;}

 function pauseButton(ex,wy,l=34,dist="theMap.html")
{
 let t=canvasButton.add([ex,wy,l,l,"#dddddd","#222222",/*clr2*/,"#222222",
  function(){c2.fillStyle=this.color;c2.strokeStyle=this.brdr;
  c2.fillRect(ex-l/2,wy-l/2,l/3,l);c2.strokeRect(ex-l/2,wy-l/2,l/3,l);c2.fillRect(ex+l/6,wy-l/2,l/3,l);c2.strokeRect(ex+l/6,wy-l/2,l/3,l);},
  function(){if(confirm("paused \n EXIT ?")){goTo(dist)}}])}