getData(urlPaybill,displayDashboard);

function displayDashboard(data){
    var billdata = [];
    data.forEach(bill => {
        const index = billdata.findIndex(element => element.idtable == bill.id);
        if (index != -1){
            billdata[index].total += bill.total;
        }else{
            billdata.push({
                "idtable":bill.id,
                "totalmount":bill.total
            })
        }       
    });
    var tableLabel1 = billdata.map(element => element.idtable).sort((a,b) => a - b);
    var tableLabel = tableLabel1.map(element => `Table ${element}`);
    var totalbill = billdata.map(element => element.totalmount);
    const ctx = document.createElement("canvas");
    document.querySelector(".bar-chart").appendChild(ctx);

    new Chart(ctx, {
        type: "bar",
        data: {
          labels: tableLabel ,
          datasets: [
            {
              label: "REVENUE TOTAL",
              data: totalbill,
              backgroundColor: "#c5487a",
              borderColor: "#c5487a",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
      const piece = document.createElement("canvas");
    document.querySelector(".pie-chart").appendChild(piece);

    new Chart(piece, {
      type: "pie", // Use 'pie' for creating a pie chart
      data: {
        labels: tableLabel,
        datasets: [
          {
            label: "TOTAL REVENUE",
            data: totalbill,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6)",
              "rgba(0, 128, 128, 0.6)",
              "rgba(128, 128, 0, 0.6)",
              "rgba(255, 165, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 0, 255, 0.6)",
              "rgba(128, 0, 0, 0.6)",
              "rgba(0, 128, 0, 0.6)",
              "rgba(0, 0, 128, 0.6)",
              // You can add more colors here if needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              'rgba(0, 0, 255, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              'rgba(0, 128, 128, 0.6)',
              'rgba(128, 128, 0, 0.6)',
              'rgba(255, 165, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)',
              'rgba(255, 0, 255, 0.6)',
              'rgba(128, 0, 0, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(0, 0, 128, 0.6)',
              // You can add more colors here if needed
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
}