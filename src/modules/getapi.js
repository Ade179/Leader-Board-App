const displayScores = require('./scores.js');

const apiKey = 'SogWUWx3MUyE5wfnO5kY';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const myApi = `${baseUrl}games/${apiKey}/scores/`;

const getTheApi = async () => {
  await fetch(myApi)
    .then((response) => response.json())
    .then((json) => displayScores(json.result));
};

module.exports = getTheApi;