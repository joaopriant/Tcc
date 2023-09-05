const ctx = document.getElementById('chart1');
const ctx1 = document.getElementById('chart2');
const ctx2 = document.getElementById('chart3');

new Chart(ctx1, {
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