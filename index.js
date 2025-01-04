let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let counterDisplayStart=document.getElementById('counter-display-start');
let counterDisplayStop=document.getElementById('counter-display-stop');
let stopWatchBtn=document.getElementById('stop-watch-start');
let stopWatchStartDisplay=document.getElementById('stop-watch-start-display');
let stopWatchResetDisplay=document.getElementById('stop-watch-reset-display');

let form=document.getElementById('timer-form');
let resetTimer = document.getElementById("timer-reset");

let intervalIdCounter;
let currentCounter;

let counter = function () {
    let count = 0;
    return function inside() {
        count++;
        return count;
    };
};


start.addEventListener("click",function(){
    if(!currentCounter){
        currentCounter=counter();
    }
    
    intervalIdCounter=setInterval(function(){
        counterDisplayStart.innerHTML=currentCounter();
        counterDisplayStop.innerHTML='';
    },1000);
})

stop.addEventListener("click",function(){
    clearInterval(intervalIdCounter);
    if(currentCounter){
        counterDisplayStop.innerHTML='Counter stopped!';
    }
})

reset.addEventListener("click",function(){
    clearInterval(intervalIdCounter);
    currentCounter=null;
    counterDisplayStart.innerHTML=0;
    counterDisplayStop.innerHTML="Counter reset!";
})

form.addEventListener("submit",function(e){
    e.preventDefault();
    let formData=new FormData(form);
    let duration = formData.get("timer");

    let b=counter();

    let intervalId=setInterval(function(){
        stopWatchStartDisplay.innerText=b();
        stopWatchResetDisplay.innerHTML='';
    },1000)

    setTimeout(function(){
        clearInterval(intervalId);
        stopWatchStartDisplay.innerHTML='Time out!';
    },duration*1000);
    stopWatchStartDisplay.innerHTML='';
   
})

resetTimer.addEventListener("click",function(){
    form.reset();
    stopWatchStartDisplay.innerHTML='';
    stopWatchResetDisplay.innerHTML='Reset the time.';
})