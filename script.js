const startBtn=document.getElementById("startBtn");
const intro=document.getElementById("intro");
const game=document.getElementById("game");
const music=document.getElementById("bgMusic");

startBtn.onclick=()=>{

intro.style.opacity="0";

setTimeout(()=>{
intro.classList.add("hidden");
game.classList.remove("hidden");

loadQuestion1();

},1200);

music.play().catch(()=>{});

}

function loadQuestion1(){
document.querySelector(".questionCard").innerHTML=`
<h2>1. Our 1st bike ride?</h2>
<input id="ans">
<button onclick="checkQ1()">Check</button>
`;
}

function normalize(t){
return t.toLowerCase().trim();
}

function checkQ1(){
let a=normalize(ans.value);
if(a.includes("may 9")) alert("Correct 😘");
else alert("Wrong 🥲");
}
