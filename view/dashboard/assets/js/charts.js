const options = ["Aberta","Pendente","Concluído"];
var chamados = [0,0,0];


function carregarChamado(chamados=[]) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    let objChamado = JSON.parse(this.responseText);
    var chamadoAberto = 0;
    var chamadoPendente = 0;
    var chamadoConcluida = 0;
    objChamado.forEach(chamado => {
        console.log('asdasdasdasasadsdasads')
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
  xmlhttp.open("GET", "/manutencoes");
  xmlhttp.send();

}
carregarChamado(chamados);
console.log(chamados)
const ctx1 = document.getElementById('chart2');
const ctx2 = document.getElementById('chart3');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Abertas','Pendentes','Concluidas'],
    datasets: [{
      label: 'Chamados',
      data: chamados,
      borderWidth:3,
      backgroundColor: [
        '#0113E0',
        '#E05216',
        '#5CE016'
        ],
    }]
  },
  options: {
    scales: {
          display: false
        }
      },
      yAxes: [{
        gridLines: {
          drawBorder: true,
          display: false
          }
      }]
    });

const options2 = ["Aberta","Pendente","Concluído", "Recusado"];
var chamados2 = [0,0,0]
function carregarChamado(chamados=[]) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    let objChamado = JSON.parse(this.responseText);
    var chamadoAceito = 0;
    var chamadoPendente = 0;
    var chamadoRecusado = 0;
    objChamado.forEach(chamado => {
        console.log('asdasdasdasasadsdasads')
        let status = chamado.Status;
        if (status == options2[0] || status == options2[2]){
          chamadoAceito += 1;
        }else if (status == options2[1]){
          console.log("Pendente")
          chamadoPendente +=1;
        }else if (status == options2[3]){
          console.log("Recusado");
          chamadoRecusado +=1;
        }
        chamados[0] = chamadoAceito;
        chamados[1] = chamadoRecusado;
        chamados[2] = chamadoPendente;
        return chamados
      });
  }
  xmlhttp.open("GET", "/manutencoes");
  xmlhttp.send();

}
carregarChamado(chamados2);

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Aceitas','Recusadas','Pendentes'],
    datasets: [{
      label: 'Chamados',
      data: chamados2,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      display:0
    }
  }
});