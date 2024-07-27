document.getElementById("login").addEventListener("submit", (e) =>{
   
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if( !username || !password ) {
        return;
 }
    const account = localStorage.getItem("account");
     const user = JSON.parse(account);

     if(username != user.username && password != user.password) {
         alert("....");
         return;
     }
    
     alert("Ban dag nhap thanh cong");
    location.href = "Home.html";
     
});