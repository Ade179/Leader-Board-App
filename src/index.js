import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const getTheApi = require('./modules/getapi.js');
const Postdata = require('./modules/Post.js');

const username = document.querySelector('.username');
const userscore = document.querySelector('.userscore');
const Submitbtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.btn');

Submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  Postdata(username.value, userscore.value);
  username.value = null;
  userscore.value = null;
});

refreshBtn.addEventListener('click', () => {
  document.location.reload();
  getTheApi();
});

getTheApi();