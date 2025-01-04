let start=document.getElementById("start");
let stop=document.getElementById("stop");
let counterDisplayStart=document.getElementById('counter-display-start');
let counterDisplayStop=document.getElementById('counter-display-stop');
let stopWatchBtn=document.getElementById('stop-watch-start');
let stopWatchStartDisplay=document.getElementById('stop-watch-start-display');

let form=document.getElementById('timer-form');

let intervalIdCounter;

let counter=function(){
    let count=0;
    return function inside(){
        count++;
        return count;
    }
}


start.addEventListener("click",function(){
    let a=counter();
    intervalIdCounter=setInterval(function(){
        counterDisplayStart.innerHTML=a();
    },1000);
})

stop.addEventListener("click",function(){
    clearInterval(intervalIdCounter);
    counterDisplayStop.innerHTML='Counter stopped!';
})

form.addEventListener("submit",function(e){
    e.preventDefault();
    let formData=new FormData(form);
    let duration = formData.get("timer");
    let b=counter();
    console.log(duration);
    let intervalId=setInterval(function(){
        stopWatchStartDisplay.innerText=b();
    },1000)

    setTimeout(function(){
        clearInterval(intervalId);
        stopWatchStartDisplay.innerHTML='Time out!';
    },duration*1000);
   
})