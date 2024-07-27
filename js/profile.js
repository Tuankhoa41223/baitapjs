let account = JSON.parse(localStorage.getItem("account"));

let p_username = document.getElementById("p-username");
p_username.value = account.username;
let p_email = document.getElementById("p-email");
p_email.value = account.email ;
let p_password = document.getElementById("p-password");
let p_address = document.getElementById("p-address");
p_address.value = account.address ? account.address : "";
let p_img= document.querySelector(".p-img");
let avatar = document.getElementById("account-image");
avatar.setAttribute("src",account.img);
p_img.setAttribute("src",account.img);

const storage = firebase.storage();

// Hiển thị ảnh xem trước khi chọn file
document.getElementById('fileInput').addEventListener('change', function (event) {
   const file = event.target.files[0];
   if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
         p_img.src = e.target.result;
      };
      reader.readAsDataURL(file);
   }
});
function uploadImage() {
    const file = document.getElementById("fileInput").files[0];
    if (file) {
       const storageRef = storage.ref('images/' + file.name);
       const uploadTask = storageRef.put(file);

       uploadTask.on('state_changed',
          function (snapshot) {
             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             document.getElementById('status').innerText = 'Upload is ' + progress.toFixed(2) + '% done';
          },
          function (error) {
             document.getElementById('status').innerText = 'Error: ' + error.message;
          },
          function () {
             uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                document.getElementById('status').innerText = 'Upload successful! File available at ' + downloadURL;
                document.getElementById('status').style.color = "green";
                
                // Store downloadURL in localStorage
                const account = {
                    username: p_username.value,
                    email: p_email.value,
                    password: p_password.value,
                    address: p_address.value,
                    img: downloadURL
                }
                localStorage.setItem("account", JSON.stringify(account));
             });
          }
       );
    } else {
       document.getElementById('status').innerText = 'No file selected';
    }
}

document.getElementById("profile").addEventListener("submit",(e) => {
   if( !p_username || !p_email || !p_password || !p_address ) {
      return;
}


    e.preventDefault();
    uploadImage();
    setTimeout(loadingimg,1000);


});



function loadingimg () {
      account = JSON.parse(localStorage.getItem("account"));
      avatar.setAttribute("src",account.img);
}