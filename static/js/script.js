
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

function checkPass(){
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
