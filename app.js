let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highest=0;
let btns=["red","green","yellow","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("Started");
    started=true;
    levelUp();
}
});
function btnFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}
function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function(){
    btn.classList.remove("userFlash");
  },150);
}
function levelUp(){
  userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
  //random button select
  let randomIdx=Math.floor(Math.random()*3);
  let randomColor=btns[randomIdx];
  gameSeq.push(randomColor);
  let randomBtn=document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}

function checkAns(idx){
  
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
     setTimeout(levelUp,1000);
  }} else{
   
    if(level>highest) highest=level;
    h2.innerHTML=`Game Over! Your score is <b>${level}. Highest Score is ${highest}  </b> <br> Press any key to start.`;//to add tags we changed from innerText to innerHTML
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);

    reset();
  }
}
function btnPress(){
let btn=this;
userFlash(btn);
userColor=btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=[document.querySelector("#red"),document.querySelector("#green"),document.querySelector("#blue"),document.querySelector("#yellow")];



for(btn1 of allBtns){
  btn1.addEventListener("click",btnPress);
  
}
function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;
}
