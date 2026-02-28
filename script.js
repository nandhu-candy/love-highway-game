let questionIndex = 1;
let touchedSecondWife = false;
let clicked50 = false;

const music = document.getElementById("bgMusic");

function normalize(text){
    return text.toLowerCase().replace(/\s+/g,' ').trim();
}

document.getElementById("startBtn").addEventListener("click",()=>{
    playMusic();
    setTimeout(loadQuestion,1500);
});

function playMusic(){
    music.volume = 0;
    music.play().catch(()=>{});

    let fade=setInterval(()=>{
        if(music.volume<0.5)
            music.volume+=0.02;
        else clearInterval(fade);
    },200);
}

function loadQuestion(){

    let game=document.getElementById("game");
    game.classList.remove("hidden");

    let container=document.querySelector(".questionCard");

    if(!container){
        document.getElementById("game").innerHTML=
        `<div class="questionCard"></div>`;
        container=document.querySelector(".questionCard");
    }

    if(questionIndex===1){
        container.innerHTML=`
        <h2>1. Our 1st bike ride?</h2>
        <input id="ans">
        <button onclick="checkQ1()">Check</button>
        `;
    }

    else if(questionIndex===2){
        container.innerHTML=`
        <h2>2. 1st trip we went together?</h2>
        <input id="ans">
        <button onclick="checkQ2()">Check</button>
        `;
    }

    else if(questionIndex===3){
        container.innerHTML=`
        <h2>3. 1st night out?</h2>
        <input id="ans">
        <button onclick="checkQ3()">Check</button>
        `;
    }

    else if(questionIndex===4){
        container.innerHTML=`
        <h2>4. Weird food moment?</h2>
        <input id="ans">
        <button onclick="checkQ4()">Check</button>
        `;
    }

    else if(questionIndex===5){
        container.innerHTML=`
        <h2>5. Food we ate many times?</h2>
        <input id="ans">
        <button onclick="checkQ5()">Check</button>
        `;
    }

    else if(questionIndex===6){
        container.innerHTML=`
        <h2>6. 1st Movie?</h2>
        <input id="ans">
        <button onclick="checkQ6()">Check</button>
        `;
    }

    else if(questionIndex===7){
        container.innerHTML=`
        <h2>7. When did we hold hand?</h2>
        <input id="ans">
        <button onclick="checkQ7()">Check</button>
        `;
    }

    else if(questionIndex===8){
        container.innerHTML=`
        <h2>8. Favourite shirt colour?</h2>
        <button onclick="checkColor('pink')">Pink</button>
        <button onclick="checkColor('black')">Black</button>
        <button onclick="checkColor('blue')">Blue</button>
        <button onclick="checkColor('brown')">Brown</button>
        `;
    }

    else if(questionIndex===9){
        container.innerHTML=`
        <h2>9. Friend / Lover / Wife?</h2>
        <input id="ans">
        <button onclick="checkQ9()">Check</button>
        `;
    }

    else if(questionIndex===10){
        container.innerHTML=`
        <h2>10. Touch box if you want 2nd wife 😏</h2>
        <div onclick="touchSecond()" style="border:2px solid white;padding:20px;cursor:pointer">
        Touch here
        </div>

        <button onclick="skipSecond()">Skip</button>
        `;
    }

    else if(questionIndex===11){
        container.innerHTML=`
        <h2>11. Send me Rs.50 😜</h2>
        <button onclick="next50()">Next</button>

        <button onclick="click50()"
        style="position:absolute;bottom:10px;right:10px;font-size:8px">
        50
        </button>
        `;
    }

    else if(questionIndex===12){
        container.innerHTML=`
        <h2>12. You are my poru__ 🔑</h2>
        <input id="ans">
        <button onclick="hiddenKey()">Check</button>

        <button onclick="hiddenKey()"
        style="position:absolute;top:10px;left:10px;font-size:10px">
        🔑
        </button>
        `;
    }

    else if(questionIndex===13){
        container.innerHTML=`
        <h2>13. Am your Amm__</h2>
        <input id="ans">
        <button onclick="checkQ13()">Check</button>

        <button style="position:absolute;left:20px">U</button>
        <button style="position:absolute;right:40px">U</button>
        <button style="position:absolute;top:30px">U</button>
        `;
    }

    else if(questionIndex===14){
        container.innerHTML=`
        <h2>14. If today was special what day?</h2>
        <input id="ans">
        <button onclick="checkQ14()">Finish</button>
        `;
    }
}

function next(){
    questionIndex++;
    loadQuestion();
}

/* -------- Question Checks -------- */

function checkQ1(){
    let a=normalize(ans.value);
    if(a.includes("may 9")) next();
    else showWrong();
}

function checkQ2(){
    let a=normalize(ans.value);
    if(a.includes("pond")) next();
    else showWrong();
}

function checkQ3(){
    let a=normalize(ans.value);
    if(a.includes("feb") && a.includes("28")) next();
    else showWrong();
}

function checkQ4(){
    let a=normalize(ans.value);
    if(a.includes("shawarma")) next();
    else showWrong();
}

function checkQ5(){
    let a=normalize(ans.value);
    if(a.includes("fried rice")) next();
    else showWrong();
}

function checkQ6(){
    let a=normalize(ans.value);
    if(a.includes("agh")) next();
    else showWrong();
}

function checkQ7(){
    let a=normalize(ans.value);
    if(a.includes("feb") && a.includes("28")) next();
    else showWrong();
}

function checkColor(color){
    if(color==="black") next();
    else showWrong();
}

function checkQ9(){
    let a=normalize(ans.value);
    if(a.includes("all") || a.includes("everything")) next();
    else showWrong();
}

function touchSecond(){
    touchedSecondWife=true;
    alert("How dare you 😡😤");
}

function skipSecond(){
    if(!touchedSecondWife) alert("My love 😘");
    else alert("Can't able to handle one Wife thinking about 2nd one 😏");

    next();
}

function next50(){
    if(!clicked50) alert("U cheater u didn't send 50 yet 😒");
    else next();
}

function click50(){
    clicked50=true;
    alert("You escaped 😂");
}

function hiddenKey(){
    next();
}

function checkQ13(){
    let a=normalize(ans.value);

    if(a==="u") alert("Yes am your Ammu 🫂😘"), next();
    else showWrong();
}

function checkQ14(){
    let a=normalize(ans.value);

    if(a.includes("birthday")){
        document.getElementById("game").innerHTML=`
        <div style="text-align:center;margin-top:40vh;font-size:30px">
        Race Completed Successfully.<br>
        If you’re smiling right now…<br>
        That was the goal.<br>
        Happy Birthday da my Purusha 😘
        </div>`;
    }
    else showWrong();
}

function showWrong(){
    alert("Wrong 😏");
}
