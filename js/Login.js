document.getElementById("login").addEventListener("submit", (e) =>{
   
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const account = localStorage.getItem("account");
     const user = JSON.parse(account);

     if(username != user.username && password != user.password) {
         alert("....");
         return;
     }
    
     alert("Banthanh cong");
    location.href = "Home.html";

})