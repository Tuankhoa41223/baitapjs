


// var username = document.getElementById("username").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// var confirmpassword= document.getElementById("confirmpassword").value;


// var account = {
//     username : username,
//     email : email,
//     password : password,
//     confirmpassword : confirmpassword,
// }


// var accountdata = JSON.stringify(account);
// localStorage.setItem("account",accountdata);


document.getElementById("register").addEventListener("submit", (e) =>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword= document.getElementById("confirmpassword").value;

    if(password != confirmpassword){
        alert("Ban dang nhap sai mat khau");
        return;
    }
    const user = {
        username : username,
        email : email,
        password : password,
        confirmpassword : confirmpassword,
    }
    var userdata = JSON.stringify(user);
    localStorage.setItem("account",userdata);
    alert("ban da dang ki thanh cong")

    location.href = "Login.html"
    
})