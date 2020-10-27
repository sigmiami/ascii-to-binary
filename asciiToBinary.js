


/*let ltr="A";
console.log(ltr);

let ltrToDec=ltr.charCodeAt(0);
console.log(ltrToDec);

let binum=Number(ltrToDec);
console.log(binum.toString(2));*/

function convertIt(){


let decNum=document.getElementsByClassName("decNum")[0];
let asciiChr=document.getElementsByClassName("asciiChr")[0];
let hexNum=document.getElementsByClassName("hexNum")[0];

let ltr=document.getElementById("input1").value;
let ltrToDec=ltr.charCodeAt(0);
let binum=Number(ltrToDec);
let binumCon=binum.toString(2);
let hexNumCon=binum.toString(16);
let binaryNum=document.getElementsByClassName("binaryNum")[0];

asciiChr.innerHTML=ltr;
decNum.innerHTML=ltrToDec;

binaryNum.innerHTML=binumCon;
hexNum.innerHTML=hexNumCon;

}


