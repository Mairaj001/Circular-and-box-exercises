import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
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
const auth=getAuth(app);






const admin= document.getElementById('admin');
const user = document.getElementById('user');


function go_user(){
    admin.classList.remove('selected')
   user.classList.toggle('selected');
}
function go_admin(){
    admin.classList.toggle('selected')
    user.classList.remove('selected')
}

document.getElementById('login_but').addEventListener('click',checkPass);
document.getElementById('register_but').addEventListener('click',checkPass);
document.getElementById('goto-user').addEventListener('click',go_admin);
document.getElementById('goto-admin').addEventListener('click',go_user);
document.getElementById('signUp').addEventListener('click',show_signup);

function generateRandomId() {
    return Math.random().toString(36).substring(2); // Generates a random string
  }
  let gateway=false;
function checkPass(){
    let signUp_text=signUp.textContent;
    console.log(signUp_text);

    if(signUp_text=="Signup")
    {
        console.log("signup means to retrive data to db")
        let username= document.getElementById('username').value;
    let password= document.getElementById('pass').value
    console.log(username,password);


    if(admin.classList.contains("selected")){
        if(username=="admin" && password=="admin")
        {
            console.log('access granted to admin');
            window.location.href = "admin2.html"
        }
        else{
            console.log("access does not granted to admin")
        }
    }
     else if(user.classList.contains('selected')){
        const username=document.getElementById('username').value;
        const passcode=document.getElementById('pass').value;
        signInWithEmailAndPassword(auth,username,passcode)
        .then(done=>{console.log(done);window.location.href = "user.html"})
        .catch(err=>alert("wrong id pass"))

        if(username=="user" && password=="user")
        {
            console.log('access granted to user');
            window.location.href = "user.html"
            console.log("kajsdf")
        }
        else{
            console.log("access does not granted to user")
        }
     }
     else{
        alert("Please select any one of the option Admin or User")
     }
    }
    else if(signUp_text=="Login"){
        console.log("signup means to send data to db")
       
        const randomId = generateRandomId();
        const username=document.getElementById('username').value;
        const passcode=document.getElementById('pass').value;
        
        createUserWithEmailAndPassword(auth,username,passcode)
        .then((Credentials)=>{
            gateway=true;
            set(ref(db,'Users/'+randomId),{
                username:username,
                password:passcode,
                
                
            })
            .then(e=>alert("data added sussfully"))
            .catch(err=>console.log(err));
            console.log("creadntials",Credentials);
            alert("account created sussesfully")
           
        })
        .catch(err=>{console.log(err);alert(err);})
        console.log(gateway);
        
    }
   

}


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

let login_toggle=false;

function show_signup(){
    let sigin_in_header=document.getElementById('signIn');
    let options_div= document.getElementById('options');
    let forgot=document.getElementById('forgot');
    let signUp=document.getElementById('signUp');
    let login_but=document.getElementById('login_but');
    let reg_but=document.getElementById('register_but');


    console.log(sigin_in_header,options_div,forgot,signUp,login_but);

    let signUp_text=signUp.textContent;
    console.log(signUp_text);

    if(signUp_text=="Signup")
    {
       sigin_in_header.textContent="Sign Up";
       options_div.style.display="none";
       forgot.textContent="";
       login_but.value="Register";
       
       signUp.textContent="Login"

    }
    else if(signUp_text=="Login")
    {
        sigin_in_header.textContent="Sign In ";
        options_div.style.display="flex";
        forgot.textContent="Forgot Password";
        login_but.value="Sigin In";
      
        signUp.textContent="Signup"
    }


}
