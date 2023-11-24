import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

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




const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    console.log(tab_switchers);
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}



function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}



  

let first_arr=[];
let anser_arr=[];


function one_click()
{

  console.log("created")
  const first_divs=document.querySelectorAll('.first');
  const have_divs=document.querySelectorAll('.have');
  first_divs.forEach(index=>{
  first_arr.push(index.textContent);
  index.textContent="";
   } )
 have_divs.forEach(index=>{
  anser_arr.push(index.textContent);
  index.textContent="";
   })
 console.log(first_arr,anser_arr);
}


function Load_new_one()
{
	counter++;
	let header="tobe"
	const total_exerices=parseInt(document.getElementById('total-exercises').value);
	
	console.log(counter)
	if(counter==total_exerices)
	{   
		// console.log(first_arr,anser_arr);
		one_click();
	
	
		set(ref(db,'Exercise/'+header),{
			question:first_arr,
			answer:anser_arr,
		})
		.then(e=>alert("data added sussfully"))
		.catch(err=>console.log(err));

		

        containerBox.innerHTML="";
		alert("all are created and added to database");

	}
	
	else{
    one_click();
    }
	

}




const containerBox = document.querySelector('.container-box');



function create_box()
{
	const containerBox = document.querySelector('.container-box');
    const numExercises = parseInt(document.getElementById('numCol').value);
    const numRows = parseInt(document.getElementById('numRows').value);
    const answer_but=parseInt(document.getElementById('answer_but').value);
	const total_exerices=parseInt(document.getElementById('total-exercises').value);
	containerBox.innerHTML = '';

	const ex_name=document.createElement('div');
	ex_name.contentEditable=true;
	ex_name.classList.add('header_input')
	containerBox.appendChild(ex_name);

	const button=document.createElement('button')
	button.classList.add('button-inner');
	
	if(total_exerices==1)
	{
		button.textContent="save"
		button.onclick=Load_new_one;
	}
	else{
		button.textContent="save & next"
		button.onclick=Load_new_one;
	}
	
 
	
	const anser_button_div=document.createElement('div');
	anser_button_div.classList.add('row-box')
	for(let i=0;i<answer_but;i++)
	{
	 console.log("anser-but")
	 let anser_button= document.createElement('div')
	 anser_button.contentEditable=true;
	 anser_button.classList.add('header_input');
	 anser_button_div.appendChild(anser_button);
	}
 
	 // Generate exercise rows dynamically
	 for (let i = 1; i <= numExercises; i++) {
		 const rowDiv = document.createElement('div');
		 rowDiv.classList.add('row-box');
		 rowDiv.id = `row${i}`;
 
		 const firstDiv = document.createElement('div');
		 firstDiv.classList.add('first');
		 firstDiv.contentEditable = true;
		 rowDiv.appendChild(firstDiv);
 
		 // Generate columns within the row
		 for (let j = 0; j < numRows-1; j++) {
			 let haveDiv = document.createElement('div');
			 haveDiv.classList.add('have');
			 haveDiv.contentEditable = true;
			 rowDiv.appendChild(haveDiv);
		 }
 
		 containerBox.appendChild(rowDiv);
		 
	 }
	 containerBox.appendChild(anser_button_div);
	 containerBox.appendChild(button);

}


 let counter=0;


document.getElementById('generate-button').addEventListener('click',()=>{
	create_table();
})
function create_table(){

	counter=0;
   
	const total_exerices=parseInt(document.getElementById('total-exercises').value);

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
