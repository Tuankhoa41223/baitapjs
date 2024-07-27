getData(urlFood,displayFood); //callback function

var listFood =  [];

function displayFood(data) {
    var food = document.querySelector(".foodanddrink");
     listFood = data;
   
    data.forEach(element => {

        var item = document.createElement("div");
          item.classList.add("col");

        
          item.innerHTML = `<div class="card">
                  
                <div class="heading">
                   <span class="idFood">${element.id}</span>
                    <h5>${element.name}</h5>
                    <i class="fa-solid fa-pen-to-square edit"></i>
                  </div>
                  <img src="${element.img}" class="card-img-top px-2" alt="...">
                  <div class="card-body">
                    <p class="text-primary">$${element.price}</p>
                    <div class="nut">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa-solid fa-circle-minus"></i>
                      </button>
                      <input type="text" class="text-center box-quantity" value="0"> 
                      <button class="btn btn-primary" type="submit">
                        <i class="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> `
        food.appendChild(item);
        var box = item.querySelector(".box-quantity");
        var prev = item.querySelector(".fa-circle-minus");
        var next = item.querySelector(".fa-circle-plus");

        next.addEventListener("click",() => {
           box.value = parseInt(box.value) + 1;
        })
        prev.addEventListener("click",()=>{
          if (parseInt(box.value)>0){
            box.value = parseInt(box.value) - 1;
          }
        })
        
    });
    
}
var idTable = null;

function getTableId(id) {
    idTable = id;
    console.log(idTable);
}

