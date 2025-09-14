let max=6;
let min=1;
let rolled=document.getElementById("dice")
let myvalue=document.getElementById("num")
let num;
rolled.onclick=function(){
    num=Math.floor(Math.random()*(max-min+1))+min;
    myvalue.textContent=num;
}
