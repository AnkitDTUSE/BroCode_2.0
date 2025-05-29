let str="CGPAachiKarunga";
let str2="ChudGyeGuru";
for(let i=str.length;i>0;i--){
    let str3=str.slice(0,i);
    console.log(str3);
}
for(let i=0;i<str2.length;i++){
    let str3=str2.slice(0,i+1);
    if(str3==='C'){continue;}
    console.log(str3);
}