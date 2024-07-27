document.getElementById("register").addEventListener("submit", (e) =>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword= document.getElementById("confirmpassword").value;
    const error = document.querySelector(".error");

   if( !username || !email || !password || !confirmpassword) {
          return;
   }

    if(password != confirmpassword){
        error.style.display = "block";
        return;
    }
    const user = {
        username : username,
        email : email,
        password : password,
        img : "https://cdn.pixabay.com/photo/2024/02/05/02/53/cat-8553498_640.jpg"
    }
    var userdata = JSON.stringify(user);
    localStorage.setItem("account",userdata);
    alert("ban da dang ki thanh cong")

    location.href = "Login.html";
    
})