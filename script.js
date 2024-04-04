let userSeq=[];
let gameSeq=[];
let previousScore=null;
let start=false;
let level=0;
//  let btns=[box1,box2,box3,box4];
 let lev=document.querySelector("h2");
 document.addEventListener("keypress",function(){
   if(start==false){
    start=true;
    levelUp();
   }
   
 })

 function levelUp(){
    userSeq=[];
    lev.innerText=`Level  ${++level}`;
 
    let randomNumber=Math.floor(Math.random()*3)+1;
    let randombtn=document.querySelector(`.box${randomNumber}`)
    gameSeq.push(randombtn)
    console.log(gameSeq);

    flashbtn(randombtn,1000);
 }
 

 function flashbtn(btn,time){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, time);
 }
 function redFlash(){
    document.body.classList.add("red-flash");
    setTimeout(() => {
        document.body.classList.remove("red-flash");
    }, 0.900);
 }


 function btnpressed(){
    flashbtn(this);
    userSeq.push(this);
    console.log(userSeq);
    check(userSeq.length-1);


 }
 function check(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length){

            setTimeout(levelUp());
        }
    }else{
        lev.innerHTML=`Game over!!! your Score : ${level-1} <br> Your Highest Score is : ${highestScore(level-1)}<br>
        Press any key to restart`
        start=false;
        level=0;
        userSeq=[];
        gameSeq=[];
        redFlash();


    }
}
    

 let allbtns=document.querySelectorAll(".box");
 for (const btn of allbtns) {
    btn.addEventListener("click",btnpressed);
 }

function highestScore(score){
    
    if(previousScore==null){
        previousScore=score;
        return score;
    }
    else if(previousScore>score){
        return previousScore;
    }
    else{
        previousScore=score;
        return score;
    }
}