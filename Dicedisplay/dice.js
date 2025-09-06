
function rolldice(){
let dicerolls=document.getElementById("rolls").value;
dicerolls=Number(dicerolls);
let diceresult=document.getElementById("result");
let diceimage=document.getElementById("image");
const values=[];
const images=[];
for(let i=0;i<dicerolls;i++){
    const value=Math.floor(Math.random()*6 )+1;
    values.push(value);
    images.push(`<img src="${value}.jpeg" alt="${value}">`);
}

diceresult.textContent=`Dice:${values.join(',')}`;
diceimage.innerHTML=images.join('');
}