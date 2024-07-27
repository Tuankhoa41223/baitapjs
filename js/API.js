const urlTable = "http://localhost:3000/tables";
const urlFood = "http://localhost:3000/food";
const urlOrder =  "http://localhost:3000/orders";
const urlPaybill = "http://localhost:3000/paybill";

function getData (url,displayData) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayData(data))
      .catch((error) => console.error("Lỗi:", error));
}

function edit(url,id,object) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
       
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}

function add(url,object) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => console.error('Error creating post:', error));
}
function deleted(url,id) {
  fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {      
    })
    .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}
