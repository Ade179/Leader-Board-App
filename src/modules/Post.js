const apiKey = 'SogWUWx3MUyE5wfnO5kY';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const myApi = `${baseUrl}games/${apiKey}/scores/`;
const Postdata = async (user, score) => {
  await fetch(myApi, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

module.exports = Postdata;