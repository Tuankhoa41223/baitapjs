getData(urlOrder,displayOrder);

var orders =[];

function displayOrder(data) {
    orders = data ;
}
document.querySelector(".orders").addEventListener("click", () => {
    var idTable = document.querySelector(".select").value;
    var food = document.querySelectorAll(".foodanddrink .col");
    var ordered = orders.find(Element => Element.id == idTable);
    var menu = ordered? [...ordered.iterm] : [];

    food.forEach(element =>{
        const quantity = parseInt(element.querySelector(".box-quantity").value);
        if(quantity > 0){
            const idfood = element.querySelector(".idFood").innerText; 
            const index = menu.findIndex(element => element.idfood == idfood);
            if(index != -1){
                menu[index].quantity += quantity;
            }else{
                menu.push({
                    "idfood":idfood,
                    "quantity":quantity
                })
            }
        }
    })

    if(menu.length > 0) {
        const order = {
            "id": idTable,
            "items": menu
        }
        if(ordered) {
            edit(urlOrder,idTable,order);
        }else {
            add(urlOrder,order);
        }
    }
})
