const options = ["Aberta","Pendente","Concluida", "Recusada"];
var chamados = [0,0,0];
var aceitos = [0,0];
function carregarChamado(chamados=[]) {
  const xmlhttp = new XMLHttpRequest(); 
  xmlhttp.onload = function () {
    let objChamado = JSON.parse(this.responseText);
    var chamadoAberto = 0;
    var chamadoPendente = 0;
    var chamadoConcluida = 0;
    objChamado.forEach(chamado => {
        const status = chamado.Status;
        if (status == options[0]){
          chamadoAberto += 1;
        }else if (status == options[1]){
          chamadoPendente +=1;
        }else if (status == options[2]){
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

function aceitacaoChamado(chamados=[]) {
  const xmlhttp = new XMLHttpRequest(); 
  xmlhttp.onload = function () {
    let objChamado = JSON.parse(this.responseText);
    var chamadoAceito = 0;
    var chamadoRecusado = 0;
    objChamado.forEach(chamado => {
        const status = chamado.Status;
        if (status == options[0] || status == options[2]) {
          chamadoAceito += 1;
        }else if (status == options[3]){
          chamadoRecusado +=1;
        }
        chamados[0] = chamadoAceito;
        chamados[1] = chamadoRecusado;

        return chamados
      });
  }
  xmlhttp.open("GET", "/manutencoes");
  xmlhttp.send();

}
aceitacaoChamado(aceitos)
carregarChamado(chamados);
const ctx1 = document.getElementById('chart2');
const ctx2 = document.getElementById('chart3');
new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Abertas','Pendentes','Concluidas'],
    datasets: [{
      label: 'Chamados',
      data: chamados,
      borderWidth:1,
      backgroundColor: [
        '#0113E0',
        '#E05216',
        '#5CE016'
        ],
    }]
  },
  options: {
    scales: {
          display: true
        }
      },
      yAxes: [{
        gridLines: {
          drawBorder: true,
          display: true
          }
      }]
    });

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Aceitos','Recusados'],
    datasets: [{
      label: 'Chamados',
      data: aceitos,
      borderWidth:1,
      backgroundColor: [
        '#5CE016',
        '#E05216'
        ],
    }]
  },
  options: {
    scales: {
          display: true
        }
      },
      yAxes: [{
        gridLines: {
          drawBorder: true,
          display: true
          }
      }]
    });