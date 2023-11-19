
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
            window.location.href = "admin.html"
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

