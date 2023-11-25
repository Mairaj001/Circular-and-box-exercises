
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set ,get,child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB56ZVB4S8EBwZfVJNFjE0D4llVaSKD4d0",
  authDomain: "exercises-91d7d.firebaseapp.com",
  databaseURL: "https://exercises-91d7d-default-rtdb.firebaseio.com",
  projectId: "exercises-91d7d",
  storageBucket: "exercises-91d7d.appspot.com",
  messagingSenderId: "874784414500",
  appId: "1:874784414500:web:683668e3d94cba9d50f1b1",
  measurementId: "G-RSHZPWZM4V"
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

  await get(child(dbRef,'Exercise/'+'testdb')).then((snapshot)=>{
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

	
	

	const question_col_arr=question_col.split('');
	const answer_col_arr=answer_colums.split('');

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
			if (question_col_arr.includes(j.toString())) {
                
                let haveDiv = document.createElement('div');
                haveDiv.classList.add('question');
               
                
                rowDiv.appendChild(haveDiv);
            } else if (answer_col_arr.includes(j.toString())) {
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
        const arrayIndex = Math.floor(index / 3); // 
        const arrayToUse = questions[arrayIndex]; // Accessing the corresponding array using the index
        
        const arrayElementIndex = index % 3; // To cycle through 0, 1, 2 for each set of 3 divs
        const arrayElement = arrayToUse[arrayElementIndex]; // Accessing each element in the corresponding array
        
        // For example, setting text content of each .question element to the array element
        element.textContent = arrayElement;
      });

}