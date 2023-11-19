let score=0;

let have_button = document.getElementById('have-but');
let has_button = document.getElementById('has-but');
let been_button= document.getElementById('been-but');
let haveDivs = document.getElementsByClassName('have');
const startButton = document.getElementById('startButton');
let First_text_content;
let  firstDiv;
let negative_score=0;
var clickedDiv="";
var class_click="";
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

function Check_have()
{
    let Have_div=document.querySelectorAll('.have');
    let isFilled=false;
    Have_div.forEach((div)=>{
         isFilled = div.textContent.trim() !== "" ? true : false;
        
    });
    return isFilled;
}


for (var i = 0; i < haveDivs.length; i++) {
   
    haveDivs[i].addEventListener('click', function (event) {
          firstDiv = event.target.previousElementSibling;
        
         First_text_content=firstDiv.textContent;
        
        console.log(event.target.className,First_text_content);

         clickedDiv = event.target;
         if(First_text_content=="I")
         {
            clickedDiv.textContent="am";
         }
         else if(First_text_content=="You")
         {
            clickedDiv.textContent="are";
         }
         
         else{
            clickedDiv.textContent="Is";
         }
         clickedDiv.style.borderBottom="2px solid black"
         
         class_click=event.target.className;
         setTimeout(function () {
            
            event.target.textContent = "";
        }, 700);

        // Log or perform actions based on the clicked div
        console.log('Clicked div content:', clickedDiv.textContent);
    });
}

have_button.addEventListener('click' ,()=>{
    clickedDiv.textContent="Is"
    if(First_text_content=="He" || First_text_content=="She" || First_text_content=="It" )
    {
        score++;
    }
    else{
        negative_score++;
    }
    
    console.log(score,negative_score);
    
    
   
    clickedDiv.style.color="Black";
})


has_button.addEventListener('click',()=>{
    clickedDiv.textContent="am"
    clickedDiv.style.color="black";

    if(First_text_content=="I")
    {
        score++;
    }
    else{
        negative_score++;
    }

})


been_button.addEventListener('click',()=>{
    clickedDiv.textContent="are";
    clickedDiv.style.color="black";
    if(First_text_content=="You")
    {
        score++;
    }
    else{
        negative_score++;
    }
})

let arr=["v I","^ You","> He","< She","- It"," = they","w We"];
let counter =0;

function load_newone(){
    const haveDivss = document.querySelectorAll('.have');
    var firstDivs = document.querySelectorAll('.row .first');
    
    haveDivss.forEach(index=>{
        index.textContent="";
    })
 
    fill_progress();
    counter++;
    
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
    alert("You have completed 10 exeerices");
    window.location.href="cricular.html"
   }
    
}

let correct=document.getElementById('right-ans');
let wrong= document.getElementById('wrong');

console.log(correct,wrong);
correct.innerHTML+=`${score}`;
wrong.innerHTML+=negative_score;



