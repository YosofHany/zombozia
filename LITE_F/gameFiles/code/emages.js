var images=["mward","man_R","man_L","z_R","z_L","bazooka_R","bazooka_L","bazooka_R_0",
 "bazooka_L_0","gun_R","gun_L","blt_R","blt_L","rocket_R","rocket_L","smok","zox_R_0",
 "zox_L_0","autoGun_R","autoGun_L","zox_R_1","zox_L_1","lazer_R","lazer_L"];
for(let i=0;i<images.length;i++){eval('var '+images[i]+'=new Image();'+images[i]+'.src="gameFiles/'+images[i]+'.png";');}