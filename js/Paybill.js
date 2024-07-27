
function autopay(){
    const select = document.getElementById("paybill");
   
    var  bill = orders.find(element => element.id == select.value);

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

   var buttonPay = document.querySelector(".paybutton");


   buttonPay.addEventListener('click',(e)=>{
      e.preventDefault();
      var idtable = document.getElementById("paybill").value;

      var nameCustomer = tablesAll.find(element => element.id == idtable);

      var billtotal = {
         id: idtable,
         nameCustomer: nameCustomer.nameCustomer,
         total:calculateTotalAmount(idtable),
         date: new Date().toISOString()
   }
   add(urlPaybill,billtotal);

      var tableReset =  {
         id: idtable,
         nameCustomer: "",
         quantity: null,
         status: false
       }

      edit(urlTable,idtable,tableReset);

      deleted(urlOrder,idtable);
   });

   function calculateTotalAmount(id) {
      var listpay = orders.find(element => element.id == id);
      var total = 0;
      listpay.items.forEach(order => {
        var mon = listFood.find(a => a.id == order.idfood);
        total += mon.price * order.quantity;
      });
      return total;
    }


