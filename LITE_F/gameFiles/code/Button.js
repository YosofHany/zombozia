class Btn{
_id="";
brdrClr=[255,255,255];dbrdrClr=[0,0,0];

fntClr=[0,0,0];dfntClr=[0,0,0];

bkgrwndClr=[255,255,255];dbkgrwndClr=[0,0,0];


height=50;dheight=0;
width=50;dwidth=0;

borderWidth=2;dborderWidth=0;
Styl="";
bonusFunction=function(){}
change=function(){
for(var ii=0;ii<3;ii++)
   {
   	var C=this.brdrClr[ii]+this.dbrdrClr[ii];
   	if(C>=0&&C<=255){this.brdrClr[ii]=C}
   }
   for(var ii=0;ii<3;ii++)
   {
   	var C=this.fntClr[ii]+this.dfntClr[ii];
   	if(C>=0&&C<=255){this.fntClr[ii]=C}
   }
   for(var ii=0;ii<3;ii++)
   {
   	var C=this.bkgrwndClr[ii]+this.dbkgrwndClr[ii];
   	if(C>=0&&C<=255){this.bkgrwndClr[ii]=C}
   }
   this.height+=this.dheight;
   this.width+=this.dwidth;
   this.borderWidth+=this.dborderWidth;
}

spawn=function()
   {
	
   this.Styl="border: "+this.borderWidth+"px solid rgb("+Math.round(this.brdrClr[0])+","+Math.round(this.brdrClr[1])+","+Math.round(this.brdrClr[2])+");color:rgb("+Math.round(this.fntClr[0])+","+Math.round(this.fntClr[1])+","+Math.round(this.fntClr[2])+");";
   this.Styl+="background-color:rgb("+Math.round(this.bkgrwndClr[0])+","+Math.round(this.bkgrwndClr[1])+","+Math.round(this.bkgrwndClr[2])+");height: "+this.height+"px; width: "+this.width+"px ;";
   this.change();  
   this.bonusFunction();
   }



static b =[];
static Q=function(_ch_){
	for(var i=0;i<Btn.b.length;i++){
		if(Btn.b[i]._id==_ch_){return Btn.b[i];}
		
        }
    }
static sspawn=function()
   {
   	for(var i=0;i<Btn.b.length;i++)
      {
    var currentBtn=document.getElementById(Btn.b[i]._id);
    Btn.b[i].spawn();
    currentBtn.setAttribute("style",Btn.b[i].Styl);
    
      }
   }
   
static add(ID,BRDRCLR,FNTCLR,BKGRWNDCLR,HEIGHT,WIDTH,BORDERWIDTH,bonusArg=function(){if(Math.round(this.dwidth*10)!=0){this.dwidth/=1.1}else{this.dwidth=0}}){
var t = new Btn();
t._id=ID;t.brdrClr=BRDRCLR;t.fntClr=FNTCLR;t.bkgrwndClr=BKGRWNDCLR;t.height=HEIGHT;t.width=WIDTH;t.borderWidth=BORDERWIDTH;
t.bonusFunction=bonusArg;
Btn.b.push(t);
}
static add(ID,bonusArg=function(){if(Math.round(this.dwidth*10)!=0){this.dwidth/=1.1}else{this.dwidth=0}}){
var t = new Btn();
t._id=ID;
t.bonusFunction=bonusArg;
Btn.b.push(t);
}
}
