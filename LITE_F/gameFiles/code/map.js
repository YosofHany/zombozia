//localStorage.clear()

/*test not similar*/ //storeClearedLevel("levl 1",3,"clearedLevels1");storeClearedLevel("levl 2",3,"clearedLevels1");storeClearedLevel("levl 3",3,"clearedLevels1");storeClearedLevel("levl 4",1,"clearedLevels1");storeClearedLevel("levl 1",1,"clearedLevels2");storeClearedLevel("levl 2",1,"clearedLevels2");
/*test the same*/ //storeClearedLevel("levl 1",3,"clearedLevels1");storeClearedLevel("levl 2",3,"clearedLevels1");storeClearedLevel("levl 3",3,"clearedLevels1");storeClearedLevel("levl 1",1,"clearedLevels2");storeClearedLevel("levl 2",1,"clearedLevels2");storeClearedLevel("levl 3",1,"clearedLevels2");
let clearedLevels1=localStorage.getItem("clearedLevels1");
let clearedLevels2=localStorage.getItem("clearedLevels2");
let arr1=[];if(clearedLevels1){arr1=stringToArray(clearedLevels1)}
let arr2=[];if(clearedLevels2){arr2=stringToArray(clearedLevels2)}
let L=
[
 [400,480,20,  9, 0],
 [330,411,-100,5, -1],
 [310,258,-100,5, -2],
 [400,258,-14, 39,-2],
 [490,258,20,  9,-2 ],
 [470,105,20,  9, -2],
 [400,35, 20,  9, -2]
];


function clearAndStore(str="levl "+arr1.length)//custom function to be passed to newLine
{let ll=selectLevel(str);
 let next=ll.next[0];next.cleared=0;next.next[0].cleared=-1;
 localStorage.setItem("clearedLevels2",arrayToString(arr1))
}
if(arr1.length==arr2.length)
{
 
 
 let iti=0;
 for(let i of L)
 {
  let clrd=arr1[iti]?arr1[iti][1]:L[iti][4]
  newLevel(i[0],i[1],"levl "+(iti+1),"lvl"+(iti+1)+".html",clrd,[i[2],i[3]]).next=[];
  if(iti<arr1.length){newLine([i[0],i[1]],[L[iti+1][0],L[iti+1][1]],()=>{},0);}
  if(iti>0){levelb[iti-1].next.push(levelb[iti]);}
  iti++;
 }
 
 let ll=selectLevel("levl "+(arr1.length+1))
 ll.cleared=0;
 //console.log(ll)
 ll.next[0].cleared=-1;
 localStorage.setItem("clearedLevels2",arrayToString(arr1))
}
else
{
 
 let iti=0;
 for(let i of L)
 {
  let clrd=arr1[iti]?arr1[iti][1]:L[iti][4] 
  if(iti==(arr1.length-1)){clrd=0}
  newLevel(i[0],i[1],"levl "+(iti+1),"lvl"+(iti+1)+".html",clrd,[i[2],i[3]]).next=[];
  if(iti>0){levelb[iti-1].next.push(levelb[iti]);}
  if(iti<arr1.length-1){newLine([i[0],i[1]],[L[iti+1][0],L[iti+1][1]],()=>{},0);}
  iti++
 }
 newLine([L[arr1.length-1][0],L[arr1.length-1][1]],[L[arr1.length][0],L[arr1.length][1]],clearAndStore)
}
/*
if(!localStorage.getItem("clearedLevels2"))
{
 for(let i=1;i<arr1.length;i++){storeClearedLevel(arr1[i-1][0],arr1[i-1][1],"clearedLevels2")}
}
//arr2=structuredClone(arr1);
let diffr=false
if(arr1.length!=arr2.length)
{console.log();console.log();
 if(clearedLevels2){arr2.pop()}
 //localStorage.setItem("clearedLevels2",clearedLevels1);
 diffr=true;alert("diffrent")
}


for(let lvl of levelb){if((lvl.cleared>0)&&lvl.next){newLine([lvl.x,lvl.y],[lvl.next[0].x,lvl.next[0].y],null,0);}}
let last=selectLevel("levl "+arr1.length)
last.cleared=0;last.next[0].cleared=-1;

if(diffr)
{
 newLine([last.x,last.y],[last.next[0].x,last.next[0].y],clearAndStore);
 storeClearedLevel(last.name,arr1[arr1.length-1][1],"clearedLevels2")
}
else
{
 alert("same"); 
}
 */