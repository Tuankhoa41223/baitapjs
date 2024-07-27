const accountImage = document.getElementById("account-image");
const menu = document.getElementById("menu");

accountImage.addEventListener("click", function() {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

var Listcontent = document.querySelectorAll(".left h5");

var icon = document.querySelector(".left .icon");

var iconList = document.querySelectorAll(".left .icon i");

var mainLeft = document.querySelector(".left .main-left");

icon.addEventListener("click", function(){
  Listcontent.forEach(Element => Element.classList.toggle("hidden"));
  mainLeft.classList.toggle("main-left");
  iconList.forEach(element => element.classList.toggle("hidden"));
 
})

var textcontent = document.querySelectorAll(".main-left .nav-item");

var boxcontent = document.querySelectorAll(".box"); // bien toan cuc 




textcontent.forEach((element,index) => {

   element.addEventListener("click", () => {
       textcontent.forEach(element => element.style = "white");
       element.style.color = "red";
       boxcontent.forEach(element => element.style.display = "none");
      boxcontent[index].style.display = "block";
   })
})

function addFood(id) {
  boxcontent[1].style.display = 'none';
  boxcontent[2].style.display = 'block';
  textcontent[1].style.color = 'white';
  textcontent[2].style.color = 'red';

  var  select = document.querySelector(".select");  
  select.value = id;

  
}
function cardTables(id){

  const orderById = orders.find(element => element.id == id);
  const card = document.getElementById("cardFoodById");
  idTable = id;
  card.innerHTML = "";
  var total = 0;
   orderById.items.forEach(a => {
       const food = listFood.find(element => element.id == a.idfood);
        total += food.price*a.quantity ;
       card.innerHTML += `
       <tr>
          <td>1</td>
          <td><img style="height: 50px;" src="${food.img}" alt=""></td>
             <td>${food.name}</td>
              <td>${food.price}</td>
               <td>${a.quantity}</td>
       </tr>
       
      `;
  })
     card.innerHTML += `
           <tfoot>
              <th class="text-center" colspan="3">Total</th>
              <th class="text-center" colspan="2">${total}</th>
            </tfoot>
     `
}

function paybillfood() {
  var pay = document.getElementById("paybill");

  boxcontent[1].style.display = 'none';
  boxcontent[3].style.display = 'block';
  textcontent[1].style.color = 'white';
  textcontent[3].style.color = 'red';
  pay.value = idTable;

  var  bill = orders.find(element => element.id == idTable);

  const billpay = document.getElementById("payFoodById");
  var total = 0;
  billpay.innerHTML = "";

  bill.items.forEach((a,index) => {

   const food = listFood.find(element => element.id == a.idfood);
   total += food.price*a.quantity ;
   billpay.innerHTML += `
   <tr>
      <td>${index + 1}</td>
      <td><img style="width: 50px;"  src="${food.img}" alt=""></td>
         <td>${food.name}</td>
          <td>${food.price}</td>
           <td>${a.quantity}</td>
   </tr>
   
  `;
  })
  billpay.innerHTML += `
  <tfoot>
     <th class="text-center" colspan="3">Total</th>
     <th class="text-center" colspan="2">${total}</th>
   </tfoot>
`;
}

  



