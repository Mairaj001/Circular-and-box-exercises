
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set ,get,child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  // add the firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

let heading;
let answer_colums;//total anser colums
let question_col;//total questions coloums
let answer_buttons;
let total_col;
let total_rows;
let total_exerices;
let questions;
let answers;

async function Get_data()
{
  const dbRef=ref(db);

  await get(child(dbRef,'Exercise/'+'testmairaj')).then((snapshot)=>{
    if(snapshot.exists())
    {
      console.log("yes table is exist");
      heading=snapshot.val().heading;
      answer_colums=snapshot.val().anser_col;
      question_col=snapshot.val().question_cols;
      total_col=snapshot.val().total_coloums;
      total_rows=snapshot.val().total_rows;
      total_exerices=snapshot.val().total_exerciese;
      answer_buttons=snapshot.val().answer_button;
      questions=snapshot.val().question;
      answers=snapshot.val().answer;

    }
  })
  console.log(heading,answer_colums,question_col,total_col,total_rows,total_exerices,answer_buttons,questions,answers);
}


Get_data()

document.getElementById('start-button').addEventListener('click',()=>{
	create_table();
})
let counter=0;

function create_table(){

	counter=0;
   console.log(total_exerices);
	

	if(total_exerices==0)
	{
		alert('please select the total exerices to create');
	}
	else if(total_exerices==1)
	{
		create_box();    
    }
	else if(total_exerices>1)
	{
		create_box();        
	}



}

function create_box(){
   const containerBox = document.getElementById('container');
    const numExercises = total_rows
    const numRows = total_col;
    const answer_but=answer_buttons.length;

	
	

	const question_col_arr=question_col;
	const answer_col_arr=answer_colums;

	console.log(question_col_arr,"array spliting",answer_col_arr);

   



	

	
	
	
	
	document.getElementById('tense-div').textContent=heading;
 
	
	const anser_button_div=document.createElement('div');
	anser_button_div.classList.add('inner-options')
	for(let i=0;i<answer_but;i++)
	{
	 console.log("anser-but")
	 let anser_button= document.createElement('button')
	 
	 anser_button.classList.add('anser_but');
     anser_button.innerHTML=answer_buttons[i];
	 anser_button_div.appendChild(anser_button);
	}
 
	 
	 for (let i = 0; i < numExercises; i++) {
		 const rowDiv = document.createElement('div');
		 rowDiv.classList.add('row-box');
		 rowDiv.id = `row${i}`;
 
        
		
		 for (let j = 0; j <numRows; j++) {
			if (question_col_arr.includes(j)) {
                
                let haveDiv = document.createElement('div');
                haveDiv.classList.add('question');
               
                
                rowDiv.appendChild(haveDiv);
            } else if (answer_col_arr.includes(j)) {
                let haveDiv = document.createElement('div');
                haveDiv.classList.add('answer');
                haveDiv.contentEditable = true;
                
                rowDiv.appendChild(haveDiv);
            } else {
                let haveDiv = document.createElement('div');
                haveDiv.contentEditable = true;
                rowDiv.appendChild(haveDiv);
            }
			 
			
		 }
 
		 containerBox.appendChild(rowDiv);
		 
	 }
	 containerBox.appendChild(anser_button_div);
	
     const question_divss=document.querySelectorAll('.question');
     console.log(question_divss);

     question_divss.forEach((element, index) => {
        const arrayIndex = Math.floor(index / 3); 
        const arrayToUse = questions[arrayIndex]; 
        
        const arrayElementIndex = index % 3; 
        const arrayElement = arrayToUse[arrayElementIndex]; 
        
        
        element.textContent = arrayElement;
      });

}