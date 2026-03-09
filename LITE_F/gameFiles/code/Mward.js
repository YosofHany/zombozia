class Mward
{
static  timer=0;  
y=0
x=0
valu=60
static b=[];
distrtactor(){
getMoney(5,this.x,this.y);
}
static sspawn(O0){
var wait =O0;
this.timer+=(148/FPS);if(this.timer>wait&&Mward.b.length<6){
this.add(20+Math.random()*800,40+Math.random()*450);this.timer=0;wait+=12*(148/FPS)}
let dead=[];
for(let x=0;x<(Mward.b.length);x++){
if(Mward.b[x].valu<10){Mward.b[x].distrtactor();dead.push(x)}}
Mward.b=removFromArray(Mward.b,dead);
this.b.forEach(function(element){element.spawn()});
}

getmined(__){this.valu-=__;}

spawn() {if(this.valu>10){

c2.drawImage(mward,this.x-(((this.valu)+30)/2),this.y-(((this.valu)+10)/2),(this.valu)+30,(this.valu)+10);
}}

static add(ex,way){var t=new this();t.x=ex;t.y=way;this.b.push(t);}
}
