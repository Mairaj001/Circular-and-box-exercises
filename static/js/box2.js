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
 
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
     formattedTime = formatTime(hours, minutes, seconds);
    //  console.log(formattedTime);
    
    
  }
  
  function formatTime(hours, minutes, seconds) {
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
  



let score=0;
let negscore=0;

let currentIndex = 0;
const haveDivs = document.querySelectorAll('.have');
const firstDivs = document.querySelectorAll('.first');
const start=document.getElementById('start-button');

let start_lsitenr=start.addEventListener('click', function() {
  haveDivs[currentIndex].classList.add('focused');
  haveDivs[currentIndex].focus();
  haveDivs[currentIndex].textContent="am"
  setTimeout(() => {
    haveDivs[currentIndex].textContent="";
  }, 1000);
  
});

function enable_buttons()
{
    document.getElementById('Is-but').removeAttribute('disabled');
    document.getElementById('am-but').removeAttribute('disabled');
    document.getElementById('are-but').removeAttribute('disabled');
    startTimer();
   
}
function decodeHTMLEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }



function Is_button(value) {
    let frist_text;
   start.removeEventListener('click',function name(params) {
    
   });
    if (currentIndex < haveDivs.length) {
      let currentDiv = haveDivs[currentIndex];
      if (!currentDiv.textContent.trim()) {
        currentDiv.textContent = value;
        haveDivs[currentIndex].setAttribute('contenteditable', 'false');
        currentIndex++;
        
        if (currentIndex < haveDivs.length) {
          haveDivs[currentIndex].classList.add('focused');
          haveDivs[currentIndex].focus();
          frist_text = firstDivs[currentIndex].textContent;
          let div_Cont=decodeHTMLEntities(frist_text);
          let comp_div_up=decodeHTMLEntities('You &#8593');
          let comp_div_down=decodeHTMLEntities('I &#8595');
          
          if(div_Cont===comp_div_down)
          {
            haveDivs[currentIndex].textContent="am";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont===comp_div_up)
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="they ↑↑")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="She →")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            score++;
            console.log(score,negscore);
          }
          if(div_Cont==="He ←")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            score++;
            console.log(score,negscore);
          }
          if(div_Cont==="It −")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            score++;
            console.log(score,negscore);
          }
          
          if(div_Cont==="We ↓↓")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }

          
          
          
            
       
        }
      }
      if (currentIndex === haveDivs.length) {
        console.log("completed");
       
       
        haveDivs[currentIndex - 1].setAttribute('contenteditable', 'false');
        load_newone();
      }
    }
    else{
        currentIndex=0;
    }
  }

  function Am_button(value) {
    let frist_text;
   start.removeEventListener('click',function name(params) {
    
   });
    if (currentIndex < haveDivs.length) {
      let currentDiv = haveDivs[currentIndex];
      if (!currentDiv.textContent.trim()) {
        currentDiv.textContent = value;
        haveDivs[currentIndex].setAttribute('contenteditable', 'false');
        currentIndex++;
        
        if (currentIndex < haveDivs.length) {
            
          haveDivs[currentIndex].classList.add('focused');
          haveDivs[currentIndex].focus();
         
          frist_text = firstDivs[currentIndex].textContent;
          let div_Cont=decodeHTMLEntities(frist_text);
          let comp_div_up=decodeHTMLEntities('You &#8593');
          let comp_div_down=decodeHTMLEntities('I &#8595');
          
          if(div_Cont===comp_div_down)
          {
            haveDivs[currentIndex].textContent="am";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            score++;
            console.log(score,negscore);
          }
          if(div_Cont===comp_div_up)
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="they ↑↑")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="She →")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="He ←")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="It −")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          
          if(div_Cont==="We ↓↓")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore,formattedTime);
          }

          
          
          
            
       
        }
      }
      if (currentIndex === haveDivs.length) {
        console.log("completed");
       
       
        haveDivs[currentIndex - 1].setAttribute('contenteditable', 'false');
        load_newone();
      }
    }
    else{
        currentIndex=0;
    }
  }

  function Are_button(value) {
    let frist_text;
   start.removeEventListener('click',function name(params) {
    
   });
    if (currentIndex < haveDivs.length) {
      let currentDiv = haveDivs[currentIndex];
      if (!currentDiv.textContent.trim()) {
        currentDiv.textContent = value;
        haveDivs[currentIndex].setAttribute('contenteditable', 'false');
        currentIndex++;
        
        if (currentIndex < haveDivs.length) {
          haveDivs[currentIndex].classList.add('focused');
          haveDivs[currentIndex].focus();
          frist_text = firstDivs[currentIndex].textContent;
          let div_Cont=decodeHTMLEntities(frist_text);
          let comp_div_up=decodeHTMLEntities('You &#8593');
          let comp_div_down=decodeHTMLEntities('I &#8595');
          
          if(div_Cont===comp_div_down)
          {
            haveDivs[currentIndex].textContent="am";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont===comp_div_up)
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            }, 500);
            score++;
            console.log(score,negscore);
          }
          if(div_Cont==="they ↑↑")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            score++;
            console.log(score,negscore);
          }
          if(div_Cont==="She →")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="He ←")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          if(div_Cont==="It −")
          {
            haveDivs[currentIndex].textContent="is";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            negscore++;
            console.log(score,negscore);
          }
          
          if(div_Cont==="We ↓↓")
          {
            haveDivs[currentIndex].textContent="are";
            setTimeout(() => {
                haveDivs[currentIndex].textContent=" ";
            },500);
            score++;
            console.log(score,negscore);
          }

          
          
          
            
       
        }
      }
      if (currentIndex === haveDivs.length) {
        console.log("completed");
       
       
        haveDivs[currentIndex - 1].setAttribute('contenteditable', 'false');
        load_newone();
      }
    }
    else{
        currentIndex=0;
    }
  }

function open_index()
{
    window.location.href="index.html"
}

  let arr=['I ↓', 'You ↑', 'He ←', 'She →', 'It −', 'they ↑↑', 'We ↓↓'];
let counter =0;

function load_newone(){
   console.log(score,negscore);
    const haveDivss = document.querySelectorAll('.have');
    var firstDivs = document.querySelectorAll('.row .first');
    
    haveDivss.forEach(index=>{
        index.textContent="";
        index.setAttribute('contenteditable', 'true');
    })
 
    fill_progress();
    counter++;
    currentIndex=0;
    
    if(counter<10)
    {
    firstDivs.forEach((index,i)=>{
        const randomIndex = Math.floor(Math.random() * arr.length);
        const selectedElement = arr[randomIndex];
        console.log(selectedElement);
        index.textContent=selectedElement;
        
    })
   }
   else{
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(score,negscore,formattedTime);
    localStorage.setItem('scores', JSON.stringify(scores));
    alert("You have completed 10 exeerices");
    stopTimer();
    window.location.href="cricular.html"
   }
    
}


let storedScores = JSON.parse(localStorage.getItem('scores'));


if (storedScores) {
  console.log(storedScores); 
  console.log("Score 1:", storedScores[0]); 
  console.log("Score 2:", storedScores[1]); 
} else {
  console.log('No scores found.');
}
 






















let progress = 1;
const maxProgress = 10;
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
