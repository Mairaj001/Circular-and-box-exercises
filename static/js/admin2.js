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
let buttons_ansr=[];

function one_click()
{

  console.log("created")
  const first_divs=document.querySelectorAll('.question');
  const have_divs=document.querySelectorAll('.answer');
  const rows=parseInt(document.getElementById('numRows').value)
  first_divs.forEach((element, index) => {
	if (index % rows === 0) {
		first_arr.push([]);
	}
	const currentArray = Math.floor(index / rows);
	first_arr[currentArray].push(element.textContent);
	element.textContent = "";
});

have_divs.forEach((element, index) => {
	if (index % rows === 0) {
		anser_arr.push([]);
	}
	const currentArray = Math.floor(index /rows);
	anser_arr[currentArray].push(element.textContent);
	element.textContent = "";
});

console.log(first_arr, anser_arr);
}


function Load_new_one()
{
	const header= document.getElementById('header').textContent;
	counter++;
	const numExercises = parseInt(document.getElementById('numCol').value);
    const numRows = parseInt(document.getElementById('numRows').value);
    
	
	const quetion_col=document.getElementById('question-col').value;
	const answer_col=document.getElementById('answer-col').value;
	const anser_buttons=document.querySelectorAll('.anser_but');
	anser_buttons.forEach(index=>{
		buttons_ansr.push(index.textContent);
	})

	const total_exerices=parseInt(document.getElementById('total-exercises').value);
	
	console.log(counter)
	if(counter==total_exerices)
	{   
		console.log(first_arr,anser_arr);
		one_click();
	
	
		set(ref(db,'Exercise/'+header),{
			question:first_arr,
			answer:anser_arr,
			heading:header,
			answer_button:buttons_ansr,
			total_exerciese:total_exerices,
			question_cols:quetion_col,
			anser_col:answer_col,
			total_rows:numExercises,
			total_coloums:numRows,
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

function assignclass(question,answer){
	const containerBox = document.querySelectorAll('.container-box');
	console.log(containerBox);
	containerBox.forEach(index=>{
		console.log(index.innerHTML)
	})

}


const containerBox = document.querySelector('.container-box');



function create_box()
{

	const containerBox = document.querySelector('.container-box');
    const numExercises = parseInt(document.getElementById('numCol').value);
    const numRows = parseInt(document.getElementById('numRows').value);
    const answer_but=parseInt(document.getElementById('answer_but').value);
	const total_exerices=parseInt(document.getElementById('total-exercises').value);
	const quetion_col=document.getElementById('question-col').value;
	const answer_col=document.getElementById('answer-col').value;

	const question_col_arr=quetion_col.split('');
	const answer_col_arr=answer_col.split('');

	console.log(question_col_arr,"array spliting",answer_col_arr);





	containerBox.innerHTML = '';

	const ex_name=document.createElement('div');
	ex_name.contentEditable=true;
	ex_name.classList.add('header_input');
	ex_name.id='header';
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
	 anser_button.classList.add('header_input','anser_but');
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
                haveDiv.contentEditable = true;
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

const user_info_div=document.querySelector('.todo-list.user-info');
let names_arr;


async function loadUsers() {
	try {
	  const dbRef = ref(db, 'Users');
	  const snapshot = await get(dbRef);
  
	  if (snapshot.exists()) {
		const data = snapshot.val();
		const usernames = Object.values(data).map(child => child.username);
		console.log(usernames);
		return usernames;
	  } else {
		console.log('No data available');
		return [];
	  }
	} catch (error) {
	  console.error('Error fetching data:', error);
	  throw error;
	}
  }
  

  async function fetchAndDisplayUsers() {
	try {
	  const usernames = await loadUsers();
	  
	  const userList = document.querySelector('.todo-list.user-info');
  
	  usernames.forEach(username => {
		const listItem = document.createElement('li');
		listItem.classList.add('completed')
		const usernameElement = document.createElement('p');
		usernameElement.textContent = username;
		const dotsIcon = document.createElement('i');
		dotsIcon.classList.add('bx', 'bx-dots-vertical-rounded');
  
		listItem.appendChild(usernameElement);
		listItem.appendChild(dotsIcon);
		userList.appendChild(listItem);
	  });
	} catch (error) {
	  alert('Error occurred while fetching users');
	}
  }
  
  
  fetchAndDisplayUsers();