const ctx = document.getElementById('chart1');
const ctx1 = document.getElementById('chart2');
const ctx2 = document.getElementById('chart3');
let pendente;
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    console.log(this.responseText);
    const obj = JSON.parse(this.responseText);
    this.pendente = obj
    console.log(obj)
}
xmlhttp.open("GET", "../../controle/manutencao/controle_manutencao_buscarconcluidos.php");
xmlhttp.send();

const doughnutLabel = {
  id: 'doughnutLabel',
  beforeDatasetsDraw(chart, args, pluginsOptions){
    const {ctx, data} = chart;
    ctx.save;
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = 'bold 40px sans-serif';
    ctx.fillStyle= '';
    ctx.fillText('21',xCoor, yCoor);
  }
}
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 15],
      borderWidth: 1,
    }]
  },

  options: {
    scales: {
      x:{
        grid:{
          display: false,
          
        },
        ticks:{
          display:false
        },

      },
      y: {
        grid:{
          display: false,
          drawTicks: false
        },
        ticks:{
          display:false
        },
        beginAtZero: true
      }
    }
  },
  plugins: [doughnutLabel]
});new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});