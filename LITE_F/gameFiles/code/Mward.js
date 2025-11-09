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
static sspawn(O0){//-----------------------------------------sspawn---------------------------------
var wait =O0;
this.timer++;if(this.timer>wait&&Mward.b.length<6){
this.add(20+Math.random()*800,40+Math.random()*450);this.timer=0;wait+=12}
for(var x=0;x<(Mward.b.length);x++){
if(Mward.b[x].valu<10){Mward.b[x].distrtactor();Mward.b=rfa(Mward.b,x);}
}
this.b.forEach(function(element){element.spawn()});
}////////////////////////////////////////////////////////end of sspawn/////////////////////

getmined(__){this.valu-=__;}

spawn() {if(this.valu>10){

c2.drawImage(mward,this.x-(((this.valu)+30)/2),this.y-(((this.valu)+10)/2),(this.valu)+30,(this.valu)+10);
}}

static add(ex,way){var t=new this();t.x=ex;t.y=way;this.b.push(t);}
}
