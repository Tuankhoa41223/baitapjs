getData(urlTable,displayTable);

let tablesAll ;

function displayTable(data) {
     var select = document.querySelector(".select");
     var tables = document.querySelector(".order");
     var pay = document.getElementById("paybill");
     tablesAll = data ;

    data.forEach(element => {
        if(element.status) {
            select.innerHTML += ` <option value="${element.id}">Table ${element.id}</option>`;
            pay.innerHTML += ` <option value="${element.id}">Table ${element.id}</option>`

        }
        
        var item = document.createElement("div");
          item.classList.add("col");

        const img = element.status ? `../img/istockphoto-1771472062-612x612.jpg` :`../img/istockphoto-1804496631-612x612.jpg`;
        const btn = element.status ? ` <button onclick=addFood(${element.id}) type="button" class="btn btn-primary" >
                        <i class="fa-solid fa-circle-plus "></i>
                        Add</button>
                        <button  onclick=cardTables(${element.id}) type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#cardTable" >
                        <i class="fa-solid fa-cart-shopping"></i>
                        Card</button>`: ` <button onclick=getTableId(${element.id}) type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#orderTable">
                        <i class="fa-solid fa-circle-plus"></i>
                        Booking</button>`;
        item.innerHTML =
         ` <div class="card">
                    <img src="${img}" class="card-img-top" alt="...">
                    <span>${element.id}</span>
                    <div class="card-body ">
                       ${btn}
                    </div>
                  </div> `
        tables.appendChild(item);
    });
}

var idTable = null;

function getTableId(id) {
    idTable = id;
    console.log(idTable);
}

function orderTable() {
    const customer = document.getElementById("customername").value;
    const quantity = document.getElementById("quantity").value;

    var newTable = {
        id: idTable,
        nameCustomer: customer,
        quantity: quantity,
        status : true
    }
    edit(urlTable,idTable,newTable);

}



