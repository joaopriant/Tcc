const options = ["Aberta","Pendente","Concluida"];
var chamados = [0,0,0];


function carregarChamado(chamados=[]) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {

      let objChamado = JSON.parse(this.responseText);
      var chamadoAberto = 0;
      var chamadoPendente = 0;
      var chamadoConcluida = 0;
      objChamado.forEach(chamado => {
        let status = chamado.Status;
        if (status == options[0]){
          chamadoAberto += 1;
        }else if (status == options[1]){
          console.log("Pendente")
          chamadoPendente +=1;
        }else if (status == options[2]){
          console.log("Concluida");
          chamadoConcluida +=1;
        }
        chamados[0] = chamadoAberto;
        chamados[1] = chamadoPendente;
        chamados[2] = chamadoConcluida;
        return chamados
      });
  }
  xmlhttp.open("GET", "../../controle/manutencao/controle_manutencao_listarAll.php");
  xmlhttp.send();

}
carregarChamado(chamados);
const ctx1 = document.getElementById('chart2');
const ctx2 = document.getElementById('chart3');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Abertas', 'Pendentes', 'Concluidas'],
    datasets: [{
      label: 'Chamados',
      data: chamados,
      borderWidth: 1,
      backgroundColor: [
        '#0113E0',
        '#E05216',
        '#5CE016'
        ],
    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      },
      yAxes: [{
        gridLines: {
          drawBorder: true,
          display: false
          }
      }]
    }
  }
});

new Chart(ctx2, {
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