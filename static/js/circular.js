let startTime = 0;
let timerInterval;
let isRunning = false;
let formattedTime=0;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  localStorage.setItem('user',formattedTime);
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}
window.sharedData = "This is the data I want to share";

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

   formattedTime = formatTime(hours, minutes, seconds);
 
  
}

function formatTime(hours, minutes, seconds) {
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}







const container = document.getElementById('spiral-container');
let input_field=document.getElementById('input-field');
const buttonCount = 7;
const centralX = 130;
const centralY = 150;
const radius = 70;
let angles = [];
let animationTime = 0;
const animationDuration = 3230; 
let speed=0;
let time_out=null;
let score=0;
let negScore=0;
let temp_index=-1;



let names=["v I","^ You","> He","< She","- It"," = they","w We"];

function updateButtonPositions() {
   
  for (let i = 0; i < buttonCount; i++) {
    const button = container.children[i];
    const x = centralX + radius * Math.cos(angles[i]);
    const y = centralY + radius * Math.sin(angles[i]);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    angles[i] += 0; 
   
    button.textContent = names[i];
  }

  
}
for (let i = 0; i < buttonCount; i++) {
 
    const button = document.createElement('button');
    button.className = 'button';
    if(i===0)
    {
        button.style.background="orange";
    }
  
  
    container.appendChild(button);
    angles.push(( 2* Math.PI * i) / buttonCount);
    
    startTimer();
    
}


updateButtonPositions();

let itr=0;
let u_itr=0;

let currentIndex=1;
const buttons = document.querySelectorAll('#spiral-container button');
function shiftColor() {
  itr++;
  if(itr<5)
  {
    currentIndex=0;
  }
  else if(u_itr<5)
  {
    u_itr++;
    currentIndex=1;
    if(u_itr==5)
    {
      currentIndex=0;
    }
  }

  else{
    currentIndex = (currentIndex + 1) % buttons.length;
    console.log(currentIndex);
  }
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    

    
}





let progress = 1;
const maxProgress = 12;
const progress_div=document.getElementById('progress');

function fill_progress()
{
    if (progress < maxProgress) {
        progress++;
        const percent = (progress / maxProgress) * 100;
        progress_div.style.width = percent + '%';
        console.log("progress",progress_div)
    }
}


let counter=-1;
let sec_int;
let cc_pp=0; //counter for loader
let prog_coutner_circle=0; // counts 100 ex

fill_progress();

function submit_answer(text)
{
 cc_pp++;
 prog_coutner_circle++;
  if(cc_pp==10)
 {
  fill_progress();
  cc_pp=0
 }
  if(prog_coutner_circle===100)
 {
  
  stopTimer();
  console.log(prog_coutner_circle)
   localStorage.setItem("user1-pos-circ",score);
    localStorage.setItem("user1-neg-circ",negScore)
    localStorage.setItem("time-circ",formattedTime);
   document.getElementById('are').setAttribute('disabled','true');
   
   document.getElementById('Am').setAttribute('disabled','true');
   document.getElementById('Is').setAttribute('disabled','true');
   alert("You have completed the 100 exercies");

  } 
   counter++;
    input_field.value=text;
     if(counter==100)
     {
      // stopTimer();
      console.log("completed");
      

     }
   
    
    for (const button of buttons) {
        temp_index++;
    const buttonColor = window.getComputedStyle(button).backgroundColor;
  
    if (buttonColor === 'rgb(255, 165, 0)' || buttonColor === 'orange') {
      console.log(`${button.textContent} has orange color`);
      let but_text=button.textContent;
      if(but_text==="You")
      {
        text==="are"?score++:negScore++;
      }
      else if(but_text==="I")
      {
        text==="Am"?score++:negScore++;
      }
      else{
        text==="Is"?score++:negScore++;

      }
      console.log(but_text,text,score,negScore);
       let intervals= setInterval(() => {
            button.classList.toggle('green')
         
        }, 420);
         setTimeout(() => {
            clearInterval(intervals);
            button.style.background=" #3498db"
            console.log("false");
            
         }, 2600);

        
           
     }
    
    
}
 setTimeout(() => {
    set_interval();
    clearTimeout(sec_int);
}, 2600);

 
    
 

}

function set_interval()
{
    shiftColor();
}