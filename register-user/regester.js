var username = document.getElementById("user-name");
var pass = document.getElementById('password');
var governorate = document.getElementById('governorate');
var form = document.getElementById('myForm');
// localStorage.clear();
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(localStorage.getItem('users') != null){
        var users = JSON.parse(localStorage.getItem('users'));
    } else {
        var users = [];
    }

    var user = {
        nam: username.value,
        password: pass.value,
        governorate: governorate.value,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);




    var nam=document.getElementById("name");
    var password=document.getElementById('pass')
    // var users=[];
    
    
});
