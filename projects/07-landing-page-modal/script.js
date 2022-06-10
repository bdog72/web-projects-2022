//
//

const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

const formContainer = document.querySelector('.form-container');

signupX.addEventListener('click', () => {
  signupModal.classList.remove('display');
  formContainer.classList.remove('disable');
});

loginX.addEventListener('click', () => {
  signupModal.classList.remove('display');
  formContainer.classList.remove('disable');
});

signupBtn.addEventListener('click', () => {
  signupModal.classList.add('display');
  formContainer.classList.add('disable');
});

loginBtn.addEventListener('click', () => {
  signupModal.classList.add('display');
  formContainer.classList.add('disable');
});