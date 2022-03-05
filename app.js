let gameWindow = document.querySelector('.window');
let divInGameWindow = gameWindow.querySelectorAll('div');
let score = document.querySelector('.score');
let outTime = document.querySelector('.out-time');
let btnStart = document.querySelector('.start');
let btnReset = document.querySelector('.reset');
let input = document.querySelector('input');
let btnInstall = document.getElementById('install');
let counter=0;
let timer;


btnInstall.addEventListener('click', () => {
    timer = input.value;
    outTime.innerText = timer;
})


function Timer() {
   let count = setInterval(()=>{
    timer--;
    outTime.innerText = timer;
    if(timer <=0){
        clearInterval(count)
        
        alert("ваш счёт: " + counter)
        
        btnStart.removeAttribute('disabled', 'disabled');
        let target = document.querySelectorAll('.target');
        target.forEach(item => item.remove())
    }
    }, 1000)
}

function createElement(){
    let random;
    let random2;
    let color;
    (function createRandom(){ 
    random = Math.floor(Math.random() *100); 
    random2 = Math.floor(Math.random() *(300 - random)); 
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    let div = document.createElement('div');
    //-------------------------------
    div.style.height = random + 'px';
    div.style.width = random + 'px';
    div.style.border = `2px solid ${color}`
    div.style.position= 'absolute'
    div.style.top =random2 + 'px';
    div.style.left = random2 + 'px';
    div.style.background=color;
    //-------------------------------
    div.classList.add('target')
    gameWindow.append(div)
    }())
    
}

function incrementCounter(){
    counter+=1;
    console.log(counter)
}

document.addEventListener('click', (event) => {
    if(event.target.classList.contains("target")){
        incrementCounter();
        timer+=0.5;
        event.target.remove();
        createElement();
        score.innerText = counter;
    }
})




btnStart.addEventListener('click', () => {
    if(timer <= 0){
        alert('Пожалуйста, установите время')
        return
    }else if(counter != 0){
        counter =0;
    }
    createElement();
    Timer();
    btnStart.setAttribute('disabled', 'disabled')

})



btnReset.addEventListener('click', () => {
    score.innerText = 0;
    timer =0;
    outTime.innerText = timer;
    
    
})

