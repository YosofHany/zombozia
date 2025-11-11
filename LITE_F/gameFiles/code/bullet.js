class bullet
{
  damage=30;
  x=0;y=0;dx=0;dy=0;
  startx=0;starty=0;
  shooter={};
  range=10;
  photo=blt_R;
  direction="R";
  static b= [];
  
  distractor(){}
  spawn()
  {
    this.x+=this.dx*(148/FPS);this.y+=this.dy*(148/FPS);
    c2.drawImage(this.photo,this.x-(this.photo.width/2),this.y-(this.photo.height/2),this.photo.width,this.photo.height);
  }
  static sspawn()
  {


    for(var a=0;a<(bullet.b.length);a++){bullet.b[a].spawn();
    if(calkdistans(bullet.b[a].x,bullet.b[a].y,bullet.b[a].startx,bullet.b[a].starty)>100*bullet.b[a].range){ bullet.b=rfa(bullet.b,a)}

    };




    for(var a=0;a<(bullet.b.length);a++)
    {
     for(var x=0;x<(Zomby.b.length);x++){
      
      
        if(calkdistans(Zomby.b[x].x,Zomby.b[x].y,bullet.b[a].x,bullet.b[a].y)<Zomby.b[x].hitbox)
        {
         damage(  Zomby.b[x],(bullet.b[a].damage));
         bullet.b[a].distractor();
          bullet.b=rfa(bullet.b,a);
        }
      }
    }
  }
  

 static add(ex,way,DX,DY,DMG=30,usr,r=10){var t=new bullet();t.x=ex;t.y=way;t.dx=DX;t.dy=DY;t.damage=DMG;t.photo=((DX>=0)?blt_R:blt_L);
    t.shooter=usr;t.startx=usr.x;t.starty=usr.y;
    t.range=r;
    bullet.b.push(t);}
}
