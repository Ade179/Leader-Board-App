/* eslint-disable no-useless-concat */
const table = document.querySelector('.table');
const displayScores = (results) => {
  results.forEach((row) => {
    const score = document.createElement('p');
    score.classList.add('scorelist');
    score.style.backgroundColor = 'beige';
    score.textContent = `${row.user}` + ':' + `${row.score}`;
    table.appendChild(score);
  });
};

module.exports = displayScores;