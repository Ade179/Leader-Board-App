const table = document.querySelector('.table');

const tableRow = [{
  id: 1,
  description: 'James : 100',
},
{
  id: 1,
  description: 'Bola : 20',
},
{
  id: 1,
  description: 'Bukky : 50',
},
{
  id: 1,
  description: 'John : 78',
},
{
  id: 1,
  description: 'Kounde : 125',
},
{
  id: 1,
  description: 'Kiddwaya : 77',
},
{
  id: 1,
  description: 'Boye : 42',
},

];

const displayScores = () => {
  tableRow.forEach((row) => {
    const score = document.createElement('p');
    score.classList.add('scorelist');
    score.style.backgroundColor = 'beige';
    score.textContent = row.description;
    table.appendChild(score);
  });
};

module.exports = displayScores;